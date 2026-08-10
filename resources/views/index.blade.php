<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Home-Task</title>
</head>
<body>
    <header>
        <h1>Todo List</h1>
         <ul class="log-user-container">
            <li class="log-user"></li>
            <li><button class="logout-button">Logout</button></li>
        </ul>
    </header>
    <main>
        <form action="" method="post" class="add-form">
            <label for="input-task">Add Task:</label>
            <input type="text" name="title" id="input-task" placeholder="Enter task here" required>

            <button type="submit" class="add-button">Add</button>
        </form>

        <ul class="task-list-container">
            <div class="task-list-header">
                <p>Title</p>
                <p>Status</p>
                <p>Created At</p>
                <p>Updated At</p>
            </div>
            <div class="template-container"></div>
            {{-- TEMPLAATE --}}
            <template class="task-template">
                <li class="task">
                    <p class="title">Jog</p>
                    <p class="status">Done</p>
                    <p class="updated-at">2 hours ago</p>
                    <p class="created-at">2026-07-30T07:30:13+00:00</p>
                    <div class="task-buttons-container">
                        <button class="done-button">Done</button>
                        <a href="/Tasks/edit" class="edit-link">Edit</a>
                        <button class="delete-button">Delete</button>
                    </div>
                </li>
            </template>
        </ul>
    </main>
    <footer></footer>
</body>
</html>