<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->group([
    'prefix' => 'api'
], function () use ($router){
    $router->get('/', function () use ($router){
        return $router->app->version();
    });

    $router->get('movies', 'MovieController@get');
    $router->get('movies/search', 'MovieController@search');
    $router->get('movies/upcoming', 'MovieController@upcoming');
    $router->get('movie/{id}', 'MovieController@retrieve');
});

// Send all other routes to React
$router->get('/{any:.*}', function () {
    return view('index');
});
