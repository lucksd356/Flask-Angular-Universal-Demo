import os
# Grabs the folder where the script runs.
basedir = os.path.abspath(os.path.dirname(__file__))


DEBUG = True
SECRET_KEY = 'temporary_secret_key'  # make sure to change this

# Connect to sqlite database
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'flask_backend.db')
