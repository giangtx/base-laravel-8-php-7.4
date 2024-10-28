<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Exception;
class CheckLoginWithNoPassword
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if(!Session::has('loginWithNoPassword')){
            return $next($request);
        }else{
            throw new Exception("UnAuthenticate");
        }
        
    }
}
