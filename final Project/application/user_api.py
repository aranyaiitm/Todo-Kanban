from flask import current_app
from flask_restful import Resource
from flask_login import current_user
from flask_security import auth_required, hash_password
from flask_restful import  marshal_with, fields, reqparse
from .database import db
from .datastore import user_datastore
from .validation import  UserValidationError
from .list_api import list_output
from sqlalchemy.exc import IntegrityError
from werkzeug.exceptions import Conflict


user_output = {
    "email" :fields.String,
    "name" :fields.String,
    "lists" :fields.List(fields.Nested(list_output))
}

create_user_parser = reqparse.RequestParser()
create_user_parser.add_argument('email')
create_user_parser.add_argument('name')
create_user_parser.add_argument('password')

class Userinfo(Resource):
    @auth_required("token")
    @marshal_with(user_output)
    def get(self):
        return current_user


    def put(self):
        pass


    def delete(self):
        pass

    def post(self):
        args = create_user_parser.parse_args()
        email = args.get("email", None)
        name = args.get("name", None)
        password = args.get("password", None)

        if email is None:
            raise UserValidationError(status_code=400, error_code='NU1001', error_message='email is required')
        if password is None:
            raise UserValidationError(status_code=400, error_code='NU1002', error_message='password is required')
        if user_datastore.find_user(email):
            raise UserValidationError(status_code=400, error_code='NU1004', error_message='username already exist')
        try:
            current_app.logger.info('started createing user in database')
            user = user_datastore.create_user(email, name, password=hash_password(password))
            db.session.commit()
            return '', 201
        except IntegrityError:
            raise Conflict