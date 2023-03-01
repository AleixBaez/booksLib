# library2ndhad

To do:

Properly set up postgres Variables at .env.
On Dockerfile, create an image based on postgres. Use the Docker build to set up the postgres role and password that I want to administrate psql.

On docker-compose, start the new image based on postgres.
With the present docker compose, docker-compose up runs a container with postgres.
From another terminal, using
psql -h localhost -p 5432 -U postgres ; password 1234 i can interact with postgres.



Done - Finish status class, its tests, finish volume class.

Now- Write init script that - sets Up postGres database with a table for status and another for editions. 

Learning- Docker-compose, at build time, can read env vars from the file named .env. Setting env_file to a service in the docker-compose sends the env_file (whatever the name) to the container. But at build time, only the filename -env will work. 
investigate how to handle users and logins

Headless browser Puppeteer per fer end to end

docker exec -it <container name> /bin/bash to enter a running container
D- I have been not using buid.sh that tags properly the built image and, therefor, I have been not understanding the behavior of my code for a couple of days.

Add tests that expect to interact with a db. The db should be running in an independent docker container. There should be a jest configuration that starts the tests
by launching the mockup db container / creates a mockup. TearDown of tests removes it. Tests should demonstrate:
-The node js app is able to reach a db server and login with the credentials stored in environment variables.
-Creation of edition and volume tables.
-Existence of edition and volume tables.
-CRUD operations on edition and volume tables. 