<?php

namespace App\Services;

use GuzzleHttp\Client;
use App\Services\Contracts\MovieService;

class TMDBMovieService implements MovieService
{
    private $httpClient;
    private $apiKey;

    const POSTER_PATH = 'http://image.tmdb.org/t/p/w600_and_h900_bestv2';

    const MOVIES_PER_PAGE = 20;

    public function __construct()
    {
        $this->apiKey = env('TMDB_API_KEY');

        $this->httpClient = new Client([
            'base_uri' => 'https://api.themoviedb.org/3/'
        ]);
    }

    private function makeRequest($method, $uri, $options = [])
    {
        // Injecting api_key
        if (!array_key_exists('query', $options) || !array_key_exists('api_key', $options['query'])) {
            $options['query']['api_key'] = $this->apiKey;
        }

        $response = $this->httpClient->request($method, $uri, $options);

        $data = json_decode($response->getBody(), true);

        if ($response->getStatusCode() !== 200) {
            throw  new \Exception($data['status_message'], $data['status_code']);
        }

        return $data;
    }

    public function getById($id)
    {
        return $this->makeRequest('GET', "movie/$id");
    }

    public function getUpcoming(int $howMany = 20, int $page = 1)
    {
        $numberOfPagesToGet = ceil($howMany / self::MOVIES_PER_PAGE);

        $result = [];

        for ($page = 1; $page <= $numberOfPagesToGet; $page++) {
            $response = $this->makeRequest('GET', "movie/upcoming", ['query' => ['page' => $page]]);

            $result = array_merge($result, $response['results']);
        }

        return array_slice($result, 0, $howMany);
    }

    public function searchByName(string $query)
    {
        return $this->makeRequest('GET', 'search/movie', ['query' => ['query' => $query]]);
    }
}
