from flask_restful import Resource
from flask_security import auth_required
from flask_restful import  marshal_with, fields, reqparse
from .database import db
from .models import List
from .card_api import card_output


list_output = {
    "list_name" :fields.String,
    "description" :fields.String,
    "cards" :fields.List(fields.Nested(card_output))
}

create_list_parser = reqparse.RequestParser()
create_list_parser.add_argument('name')
create_list_parser.add_argument('description')

class Listinfo(Resource):
    @auth_required("token")
    @marshal_with(list_output)
    def get(self, list_id):
        list = List.query.filter(List.list_id == list_id).first()
        return list


    def put(self):
        pass


    def delete(self):
        pass

    @auth_required("token")
    @marshal_with(list_output)
    def post(self):
        pass