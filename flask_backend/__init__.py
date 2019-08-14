from flask import Flask

app = Flask(__name__)
app.config.from_object('flask_backend.settings')
app.url_map.strict_slashes = False

import flask_backend.core
import flask_backend.models
import flask_backend.controllers
import flask_backend.restapi
