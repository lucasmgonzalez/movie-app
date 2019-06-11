<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use App\Services\Contracts\MovieService;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(MovieService $movieService)
    {
        $this->service = $movieService;
    }

    public function get()
    {
        // Testing API

        $client = new Client([
            'base_uri' => 'https://api.themoviedb.org/3/'
        ]);

        $response = $client->get('movie/popular', ['query' => ['api_key' => '1f54bd990f1cdfb230adb312546d765d']]);

        return response()->json(json_decode($response->getBody()));
    }

    public function retrieve($id)
    {
        $movie = $this->service->getById($id);

        return response()->json($movie);
    }

    public function upcoming()
    {
        $movies = $this->service->getUpcoming();

        return response()->json($movies);
    }

    public function search(Request $request)
    {
        $query = $request->input('query');

        $movies = $this->service->searchByName($query);

        return response()->json($movies);
    }
}
