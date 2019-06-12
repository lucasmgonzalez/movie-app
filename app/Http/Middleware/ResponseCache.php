<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Response;

class ResponseCache
{
    const CACHE_TTL = 60 * 60;

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $cacheKey = hash('sha256', $request->path().'|'.json_encode($request->query()));

        if (\Cache::has($cacheKey)) {
            return \Cache::get($cacheKey);
        }

        $response = $next($request);

        \Cache::put($cacheKey, $response, self::CACHE_TTL);

        return $response;
    }
}
