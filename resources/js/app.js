import {
    fetchData,
    addTask,
    deleteTask,
    doneTask,
    logout,
    fetchLogUser,
} from "./api.js";
import { renderData, renderLogUser } from "./dom.js";

const addForm = document.querySelector(".add-form");
const token = localStorage.getItem("myToken");

fetchAndRender();

async function fetchAndRender() {
    const data = await fetchData(token);
    const userData = await fetchLogUser(token);

    if (data && userData) {
        renderData(data);
        renderLogUser(userData);
        console.log(userData);
    }
}

// FORM REQUEST
addForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (await addTask(data, token)) {
        await fetchAndRender();
        addForm.reset();
    }
});

// TASK BUTTON EVENTLISTENERS
document
    .querySelector(".template-container")
    .addEventListener("click", async (e) => {
        const doneButton = e.target.closest(".done-button");
        const editLink = e.target.closest(".edit-link");
        const deleteButton = e.target.closest(".delete-button");

        if (doneButton) {
            const id = doneButton.dataset.id;
            if (await doneTask(id, token)) {
                await fetchAndRender();
            }
        }

        if (editLink) {
            const id = editLink.dataset.id;
            localStorage.setItem("editID", JSON.stringify(id));
        }

        if (deleteButton) {
            const id = deleteButton.dataset.id;
            if (await deleteTask(id, token)) {
                await fetchAndRender();
            }
        }
    });

document
    .querySelector(".logout-button")
    .addEventListener("click", async (event) => {
        await logout(token);
    });
