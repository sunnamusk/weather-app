<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\WeatherController;

// Current weather endpoint
Route::get('/weather/current', [WeatherController::class, 'getCurrentWeather']);

// Forecast weather endpoint
Route::get('/weather/forecast', [WeatherController::class, 'getForecast']);
