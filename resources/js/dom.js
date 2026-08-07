// RENDER DATA
export function renderData(datas) {
    const templateContainer = document.querySelector(".template-container");
    templateContainer.innerHTML = "";
    const template = document.querySelector(".task-template");
    const fragment = document.createDocumentFragment();

    datas.forEach((data) => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".title").textContent = data.title;
        clone.querySelector(".status").textContent = data.status_label;
        clone.querySelector(".updated-at").textContent = data.updated_human;
        clone.querySelector(".created-at").textContent = data.created_at;

        clone.querySelector(".done-button").dataset.id = data.id;
        clone.querySelector(".edit-link").dataset.id = data.id;
        clone.querySelector(".delete-button").dataset.id = data.id;

        fragment.appendChild(clone);
    });

    templateContainer.appendChild(fragment);
}

export function renderEditForm(data) {
    document.querySelector("#edit-title").value = data.title;
}

export function renderAuthErrors(errors) {
    const templateContainer = document.querySelector(".template-container");
    templateContainer.innerHTML = "";
    const template = document.querySelector(".error-template");
    const fragment = document.createDocumentFragment();

    errors.forEach((error) => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".error").textContent = error;

        fragment.appendChild(clone);
    });

    templateContainer.appendChild(fragment);
}
