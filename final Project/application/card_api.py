from flask_restful import Resource
from flask_security import auth_required
from flask_restful import  marshal_with, fields, reqparse
from .database import db


card_output = {
    "list_id" :fields.Integer,
    "title" :fields.String,
    "content" :fields.String,
    "deadline" :fields.String,
    "flag" :fields.Boolean
}

create_card_parser = reqparse.RequestParser()
create_card_parser.add_argument('list_id')
create_card_parser.add_argument('title')
create_card_parser.add_argument('description')
create_card_parser.add_argument('deadline')
create_card_parser.add_argument('flag')

class Cardinfo(Resource):
    @auth_required("token")
    @marshal_with(card_output)
    def get(self):
        pass


    def put(self):
        pass


    def delete(self):
        pass

    @auth_required("token")
    @marshal_with(card_output)
    def post(self):
        pass