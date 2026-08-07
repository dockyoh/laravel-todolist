import { fetchData, addTask, deleteTask, doneTask, logout } from "./api.js";
import { renderData } from "./dom.js";

const addForm = document.querySelector(".add-form");

fetchAndRender();

async function fetchAndRender() {
    const data = await fetchData();
    if (data) {
        renderData(data);
    }
}

// FORM REQUEST
addForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (await addTask(data)) {
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
            if (await doneTask(id)) {
                await fetchAndRender();
            }
        }

        if (editLink) {
            const id = editLink.dataset.id;
            localStorage.setItem("editID", JSON.stringify(id));
        }

        if (deleteButton) {
            const id = deleteButton.dataset.id;
            if (await deleteTask(id)) {
                await fetchAndRender();
            }
        }
    });

document
    .querySelector(".logout-button")
    .addEventListener("click", async (event) => {
        await logout();
    });
