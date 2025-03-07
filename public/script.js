import { fetchProducts, addProduct, deleteProduct, fetchCategories } from "./productservice.js";

window.deleteProduct = async function (id) {
    await deleteProduct(id);
    renderProducts();
};

async function renderProducts() {
    const products = await fetchProducts();
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    console.log("Productos obtenidos:", products);
    products.forEach(({ ID, Nombre, Precio, categoria }) => {
        const li = document.createElement("li");

        li.innerHTML = `
      <span class="name">${Nombre}  
        <span class="price"><small>💲</small>${Precio}</span>
      </span>
       <span class="category">©️ ${categoria?.Nombre || "Sin categoría"}</span>
      <button class="delete-btn" onclick="deleteProduct(${ID})">❌</button>
    `;
        productList.appendChild(li);
    });
}

// Cargar categorías en el select
async function loadCategories() {
    const categories = await fetchCategories();
    console.log("Categorías obtenidas:", categories); // 🛠️ Verifica los datos en la consola

    const categorySelect = document.getElementById("productCategory");

    if (!categories || categories.length === 0) {
        console.warn("No hay categorías disponibles.");
        return;
    }

    categories.forEach(({ ID, Nombre }) => {
        const option = document.createElement("option");
        option.value = ID;
        option.textContent = Nombre;
        categorySelect.appendChild(option);
    });
}


document.getElementById("productForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = document.getElementById("productName").value;
    const precio = document.getElementById("productPrice").value;
    const categoriaId = document.getElementById("productCategory").value;

    if (precio <= 0) {
        alert("El precio debe ser mayor a 0");
        return;
    }
    if (!nombre || !precio || !categoriaId) {
        alert("Todos los campos son obligatorios");
        return;
    }

    await addProduct(nombre, precio, categoriaId);
    document.getElementById("productForm").reset();
    renderProducts();
});

// Cargar datos
loadCategories();
renderProducts();
