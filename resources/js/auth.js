import { login, register } from "./api.js";
import { renderAuthErrors } from "./dom.js";

const registerForm = document.querySelector(".register-form");
const loginForm = document.querySelector(".login-form");

// if (registerForm) {
registerForm?.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formdata = new FormData(event.target);

    const data = Object.fromEntries(formdata);

    const isSuccess = await register(data);

    if (isSuccess) {
        window.location.href = "/Users/login";
        return;
    } else {
        const errors = JSON.parse(localStorage.getItem("registerErrors"));
        renderAuthErrors(errors);
    }
});
// }

// if (loginForm) {
loginForm?.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = Object.fromEntries(formData);

    const isSuccess = await login(data);

    if (isSuccess) {
        window.location.href = "/";
        return;
    } else {
        const error = JSON.parse(localStorage.getItem("loginError"));
        renderAuthErrors(error);
    }
});
// }
