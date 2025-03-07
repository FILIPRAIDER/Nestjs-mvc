import { fetchCategories, addCategory, deleteCategory } from "./productservice.js";

async function renderCategories() {
    const categories = await fetchCategories();
    const categoryList = document.getElementById("categoryList");
    categoryList.innerHTML = "";

    categories.forEach(({ ID, Nombre }) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${Nombre}</span>
            <button class="delete-btn" onclick="deleteCategory(${ID})">❌</button>
        `;
        categoryList.appendChild(li);
    });
}

window.deleteCategory = async function (id) {
    await deleteCategory(id);
    renderCategories();
};

document.getElementById("categoryForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = document.getElementById("categoryName").value;

    if (!nombre) {
        alert("El nombre de la categoría es obligatorio");
        return;
    }

    await addCategory(nombre);
    document.getElementById("categoryForm").reset();
    renderCategories();
});

renderCategories();
