## About project

This is a training project.
**The goal** is to create a mini-application on react - "starwars" to use the skills acquired in the theoretical part of study and demonstrate the practical learning of the material.

**Minimum application requirements:**

1. Get data using api: https://swapi.dev/
2. Make output of the list of movies, a list of characters, a list of starships, a list of planets, a list of races
3. Make all lists search, autocomplete and sort, select how many to display.
4. For each type of list make its own card display item. There should be transitions between items on the links, if any. For example, the hero, on what starship flew, in what movie
5. Make the layout adaptive on css grid.
6. Break the application into lazy loading modules
7. Write tests on jest
8. Optionally, you can use any UI kit library, as well as material cdk.
9. Build the application in a docker container.

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
