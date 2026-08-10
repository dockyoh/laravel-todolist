<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function view(Request $request): UserResource
    {
        $user = $request->user();

        return new UserResource($user);
    }
}
