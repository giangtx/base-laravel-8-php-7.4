<?php

namespace App\Http\Controllers;

use App\Models\Contract;
use App\Models\User;
use App\Services\ManagerManagement\ManagerManagementService;
use App\Services\Smaregi\SmaregiBaseService;
use App\Services\UserManagement\UserManagementService;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Exception;

class AuthController extends Controller
{


    /**
     * Create a new controller instance.
     *
     */
    public function __construct()
    {
    }

}
