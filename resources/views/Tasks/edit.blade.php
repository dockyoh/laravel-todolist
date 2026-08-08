<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite(['resources/css/app.css', 'resources/js/edit.js'])
    <title>Edit</title>
</head>
<body>
    <header>
        <a href="/">
            <h1>Todo List - Edit</h1>
        </a>
        <!-- <nav class="navbar">
            <ul>
                <li><a href="">Users</a></li>
            </ul>
        </nav> -->
        <ul class="log-user-container">
            <li class="log-user">Reygin Susas</li>
            <li><button class="logout-button">Logout</button></li>
        </ul>
    </header>
    <main>
        <form action="" method="post" class="edit-form">
            <label for="edit-title" class="edit-title-label">Title:</label>
            <input type="text" name="title" id="edit-title">

            <button type="submit" class="edit-button">Save</button>
        </form>
    </main>
    <footer></footer>
</body>
</html>