## Start project

1. Select branch master
2. npm run start


## Docker

https://hub.docker.com/r/limmk/starwars

To run docker container:
1. docker pull limmk/starwars
2. docker run -p 3001:3000 --name starwars-app limmk/starwars

For existed container:
1. docker start starwars-app
