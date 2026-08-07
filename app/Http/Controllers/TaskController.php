<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

// use Laravel\Mcp\Response;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): AnonymousResourceCollection
    {
        $tasks = Task::all();

        // return response()->json($tasks, 200);
        return TaskResource::collection($tasks);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request): JsonResponse
    {
        $tasks = Task::create($request->validated());

        // return response()->json($tasks, 201);
        return response()->json(new TaskResource($tasks), 201);
        // return (new TaskResource($tasks))->response()->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): TaskResource
    {
        $task = Task::findOrFail($id);

        // return response()->json($task, 200);
        return new TaskResource($task);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, string $id): TaskResource
    {
        $task = Task::findOrFail($id);

        $task->update($request->validated());

        // return response()->json($task, 200);
        return new TaskResource($task);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): Response|JsonResponse
    {
        $task = Task::findOrFail($id);

        $task->delete();

        // return response()->json(['message' => 'Deleted Successfully'], 200);
        return response()->noContent();
    }
}
