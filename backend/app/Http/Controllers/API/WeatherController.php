<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WeatherController extends Controller
{
    public function getCurrentWeather(Request $request)
    {
        return response()->json(['status' => 'working']);
    }
}
