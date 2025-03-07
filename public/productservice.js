const API_URL = "https://nestjs-mvc.onrender.com";


export async function fetchProducts() {
    try {
        const response = await fetch(`${API_URL}/productos`);
        return await response.json();
    } catch (error) {
        console.error("Error obteniendo productos:", error);
    }
}

// Agregar producto
export async function addProduct(Nombre, Precio, categoriaId) {
    try {
        const response = await fetch(`${API_URL}/productos`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ Nombre, Precio: Number(Precio), categoriaId: Number(categoriaId) }),
        });
        return await response.json();
    } catch (error) {
        console.error("Error agregando producto:", error);
    }
}

export async function deleteProduct(id) {
    try {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    } catch (error) {
        console.error("Error eliminando producto:", error);
    }
}

// Obtener categorías
export async function fetchCategories() {
    try {
        const response = await fetch(`${API_URL}/categorias`);
        return await response.json();
    } catch (error) {
        console.error("Error obteniendo categorías:", error);
    }
}

// Agregar categoría
export async function addCategory(Nombre) {
    try {
        const response = await fetch(`${API_URL}/categorias`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ Nombre }),
        });
        return await response.json();
    } catch (error) {
        console.error("Error agregando categoría:", error);
    }
}

export async function deleteCategory(id) {
    try {
        await fetch(`${API_URL}/categorias/${id}`, { method: "DELETE" });
    } catch (error) {
        console.error("Error eliminando categoría:", error);
    }
}
