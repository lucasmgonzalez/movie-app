# Movie App

----

## Architecture

* Backend
I chose Lumen, which is a PHP micro framework from laravel ecosystem, because I believe that nowadays this ecosystem is the easiest and simplest way to start a project with PHP.
I didn't think that I would need a database because I am basicallly reflecting what the TMDB api gave me. I don't intend to populate my own database, so the only reason I could have to add it to this project would be the number of times that I hit the TMDB api to get my results. For this, I believed that a middleware layer in front of my api that could cache the response based on which request sent and them deliver this cached response to every similar request would be enough to solve this particular problem.

* Frontend
I chose to keep my routes and pages on React so my Backend would only have the responsability to deliver the movies data.
To style my pages and components I chose a CSS-in-JS library that I am most familiar with(despite most of them been very similar) which is styled-components.

----

## Assumptions

The most important assumption made was about the frequency this database is updated. I don't believe it will update multiple times a day nor that the changes need to hit our application with such speed. Because of that, I believe that a response chache in front of the api would be the best way to avoid hitting the TMDB api on every request.

----

## List of third parties

* Lumen - Is a PHP micro framework I used to bootstrap my project. I believe this gave me speed to only work on the project instead of all the code I would need to bootstrap an API project like this.

* Guzzle - A http client I used to make calls from PHP to the TMDB database. I find this library to be very simple to use to make this kind of work, without leaving a bad code.

* styled-components - A CSS-in-JS library I used to style my page and components. I find that CSS-in-JS to be simpler than CSS or a pre-processor in another file.

* axios - It's just a http client that I used on the client side to make calls to my own backend. I don't like to use fetch API because if at any moment I need this application to render on the server side I would need to change every fetch call I have on my project or install a polyfill fetch for Node.JS

----
## How to run

Required:
* Docker
* Docker-compose

Steps:
* Install PHP dependencies with composer: `docker run --rm -v $(pwd):/app -w /app composer install`
* Install Javascript packages with yarn: `docker run --rm -v $(pwd):/app -w /app node:alpine yarn install`
* Build bundle and assets: `docker run --rm -v $(pwd):/app -w /app node:alpine yarn build`
* Run `docker-compose` to setup and turn on the containers
* Access from browser on http://localhost:8080
