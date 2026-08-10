import { editTask, fetchEditData, fetchLogUser, logout } from "./api.js";
import { renderEditForm } from "./dom.js";

const id = JSON.parse(localStorage.getItem("editID"));
const token = localStorage.getItem("myToken");

fetchEditAndRender();

async function fetchEditAndRender() {
    const data = await fetchEditData(id, token);
    const username = await fetchLogUser(token);
    if (data && username) {
        renderEditForm(data, username);
    }
}

document.querySelector(".edit-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const titleValue = document.querySelector("#edit-title").value;

    const formData = {
        title: titleValue,
    };

    if (await editTask(id, formData, token)) {
        window.location.href = "/";
    }
});

document
    .querySelector(".logout-button")
    .addEventListener("click", async (event) => {
        await logout(token);
    });
