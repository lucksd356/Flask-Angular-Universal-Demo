import os
from flask_restful import abort, Api, Resource
from flask import jsonify, Response, json
from flask_backend import app
from flask_backend.core import db
from flask_backend.models import Post
import requests


api = Api(app)

# def listposts():
#     lsY = Post.query.all()
#     lsResults = []
#     for dcY in lsY:
#         lsResults.append({'id': dcY.id, 'title': dcY.title})
#     return lsResults

def _posts(post_id):
    if post_id == ':':
        lsY = Post.query.all()
        lsResults = []
        for dcY in lsY:
            lsResults.append({'id': dcY.id, 'title': dcY.title})
        return lsResults
    else:
        lsY = Post.query.filter(Post.id == post_id).all()
        lsResults = []
        for dcY in lsY[:1]:
            lsResults.append({'id': dcY.id, 'title': dcY.title, 'body' : dcY.body,
                    'pub_date': dcY.pub_date})
        return lsResults


class PostDetail(Resource):
    def get(self, post_id):
        lsResults = _posts(post_id)
        json_response = json.dumps({'data' : lsResults})
        return Response(json_response,
                    status=200, #html_codes.HTTP_OK_BASIC,
                    mimetype='application/json')


api.add_resource(PostDetail, '/api/postinfo/<post_id>/')
