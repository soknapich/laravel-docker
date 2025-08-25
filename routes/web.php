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
    return User::all();
});

