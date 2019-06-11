<?php

namespace App\Services\Contracts;

interface MovieService
{
    public function getById($id);

    public function getUpcoming(int $limit, int $page);

    public function searchByName(string $query);
}
