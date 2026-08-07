<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite(['resources/css/app.css', 'resources/js/auth.js'])
    <title>Register</title>
</head>
<body>
    <header>
        <a href="/">
            <h1>Home - Register</h1>
        </a>
        <a href="/Users/login">Login</a>
    </header>
    <main>
        <form action="" method="post" class="register-form">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="Reygin Susas" required>

            <label for="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="sreygin@gmail.com" required>

            <label for="password">Password:</label>
            <input type="password" name="password" id="password" required>

            <label for="password_confirmation">Confirm Password:</label>
            <input type="password" name="password_confirmation" id="password_confirmation" required>

            <button type="submit">Register</button>
        </form>
        <ul class="error-container">
            <div class="template-container"></div>
            <template class="error-template">
                <li>
                    <p class="error"></p>
                </li>
            </template>
        </ul>
    </main>
    <footer></footer>
</body>
</html>