# library2ndhad
To do:

Properly set up postgres Variables at .env. 
On Dockerfile, create an image based on postgres. Use the Docker build to set up the postgres role and password that I want to administrate psql.

On docker-compose, start the new image based on postgres. 
Start another image that will, for now, allow me to interact with sergioPostgres through command-line.
Work on app to interact with postgres db.