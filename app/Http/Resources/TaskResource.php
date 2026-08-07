<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,

            'completed' => (bool)$this->is_completed,
            'status_label' => $this->is_completed ? 'Done' : 'Pending',

            'created_at' => $this->created_at->toIso8601String(),
            'updated_human' => $this->updated_at->diffForHumans(),
        ];
    }
}
