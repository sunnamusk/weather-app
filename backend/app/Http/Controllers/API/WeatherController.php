<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\Controller;

class WeatherController extends Controller
{
    public function getCurrentWeather(Request $request)
    {
        $city = $request->query('city', 'Nairobi');
        $apiKey = env('OPENWEATHER_API_KEY');

        $response = Http::get("https://api.openweathermap.org/data/2.5/weather", [
            'q' => $city,
            'appid' => $apiKey,
            'units' => 'metric',
        ]);

        return $response->successful()
            ? response()->json($response->json())
            : response()->json(['error' => 'Failed to fetch current weather'], $response->status());
    }

    public function getForecast(Request $request)
    {
        $city = $request->query('city', 'Nairobi');
        $apiKey = env('OPENWEATHER_API_KEY');

        $response = Http::get("https://api.openweathermap.org/data/2.5/forecast", [
            'q' => $city,
            'appid' => $apiKey,
            'units' => 'metric',
        ]);

        return $response->successful()
            ? response()->json($response->json())
            : response()->json(['error' => 'Failed to fetch forecast'], $response->status());
    }
}
