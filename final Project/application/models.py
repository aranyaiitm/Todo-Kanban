from .database import db
from flask_security import UserMixin, RoleMixin
from datetime import date



roles_users = db.Table('roles_users',
        db.Column('user_id', db.Integer(), db.ForeignKey('user.id')),
        db.Column('role_id', db.Integer(), db.ForeignKey('role.id')))


class User(db.Model, UserMixin):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String, unique=True, nullable=False)
    name = db.Column(db.String)
    password = db.Column(db.String, nullable=False)
    active = db.Column(db.Boolean)
    fs_uniquifier = db.Column(db.String(255), unique=True, nullable=False)
    roles = db.relationship('Role', secondary=roles_users,backref=db.backref('users', lazy='dynamic'))
    lists = db.relationship("List")
    

class Role(db.Model, RoleMixin):
    __tablename__ = 'role'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(80), unique=True)
    description = db.Column(db.String(255))


class List(db.Model):
    __tablename__ = 'list'
    list_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    list_name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    cards = db.relationship("Card", cascade="all, delete")


class Card(db.Model):
    __tablename__ = 'card'
    card_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String, nullable=False)
    content = db.Column(db.String, nullable=True)
    deadline = db.Column(db.Date, nullable=False, default=date.today)
    flag = db.Column(db.Boolean, nullable=False)
    list_id = db.Column(db.Integer, db.ForeignKey("list.list_id"), nullable=False)