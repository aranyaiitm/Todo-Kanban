from flask_restful import Api
from .user_api import Userinfo
from .list_api import Listinfo
from .card_api import Cardinfo


api = Api()

api.add_resource(Userinfo, "/api/user")
api.add_resource(Listinfo, "/api/list/<list_id>")
api.add_resource(Cardinfo, "/api/card")