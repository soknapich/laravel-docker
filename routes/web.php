<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/login', function () {
    return view('welcome');
});
Route::get('/register', function () {
    return view('welcome');
});

Route::get('/products', function () {
    return view('welcome');
});


Route::get('/users', function () {
    
    $user = User::find(1);
    $token = $user->createToken('MyAppToken')->accessToken;

    return response()->json(['token' => $token]);

    //return User::all();
});

