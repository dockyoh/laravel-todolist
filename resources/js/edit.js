import { editTask, fetchEditData, logout } from "./api.js";
import { renderEditForm } from "./dom.js";

const id = JSON.parse(localStorage.getItem("editID"));

fetchEditAndRender();

async function fetchEditAndRender() {
    const data = await fetchEditData(id);
    if (data) {
        renderEditForm(data);
    }
}

document.querySelector(".edit-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const titleValue = document.querySelector("#edit-title").value;

    const formData = {
        title: titleValue,
    };

    if (editTask(id, formData)) {
        window.location.href = "/";
    }
});

document.querySelector(".logout-button").addEventListener("click", (event) => {
    logout();
});
