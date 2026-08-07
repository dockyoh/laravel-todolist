<?php

use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

// Route::get('/tasks', [TaskController::class, 'index']);
// Route::post('/tasks', [TaskController::class, 'store'])->name('tasks.store');

// Route::apiResource('tasks', TaskController::class);

// Route::get('/Tasks/create', function () {
//     return view('Tasks.create');
// });

Route::view('/Tasks/create', 'Tasks.create');
Route::view('/Tasks/edit', 'Tasks.edit');

Route::view('/Users/login', 'Users.login');
Route::view('/Users/register', 'Users.register');

// Route::get('/Tasks/edit', function () {
//     return view('Tasks.edit');
// });
