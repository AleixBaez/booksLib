# library2ndhad
To do:

Properly set up postgres Variables at .env. 
On Dockerfile, create an image based on postgres. Use the Docker build to set up the postgres role and password that I want to administrate psql.

On docker-compose, start the new image based on postgres. 
With the present docker compose, docker-compose up runs a container with postgres.
From another terminal, using 
psql -h localhost -p 5432 -U postgres ; password 1234 i can interact with postgres. 

Write tests that set Up 
Start another image that will, for now, allow me to interact with sergioPostgres through command-line.
Work on app to interact with postgres db.

Finish status class, its tests, finish volume class. 
Do the setUp of postGres database with a table for status and another for editions.
investigate how to handle users and logins
