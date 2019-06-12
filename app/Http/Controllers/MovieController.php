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

    public function retrieve($id)
    {
        $movie = $this->service->getById($id);

        return response()->json($movie);
    }

    public function upcoming(Request $request)
    {
        $howMany = $request->input('howMany') ?? 30;

        $movies = $this->service->getUpcoming($howMany);

        return response()->json($movies);
    }

    public function search(Request $request)
    {
        $query = $request->input('query');

        $movies = $this->service->searchByName($query);

        return response()->json($movies);
    }
}
