// Função para carregar pratos do localStorage
function loadDishes() {
    const dishes = JSON.parse(localStorage.getItem('dishes')) || [];
    dishes.forEach(dish => addDishToTable(dish.name, dish.price, dish.rating));
}

// Adiciona prato à tabela e ao localStorage
function addDishToTable(name, price, rating) {
    const tableBody = document.getElementById('dishTable').querySelector('tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${name}</td>
        <td>R$ ${parseFloat(price).toFixed(2)}</td>
        <td>${rating}</td>
    `;

    tableBody.appendChild(row);

    // Salva prato no localStorage
    saveDishToLocalStorage(name, price, rating);
}

// Salva prato no localStorage
function saveDishToLocalStorage(name, price, rating) {
    const dishes = JSON.parse(localStorage.getItem('dishes')) || [];
    dishes.push({ name, price, rating });
    localStorage.setItem('dishes', JSON.stringify(dishes));
}

// Limpa o localStorage
function clearLocalStorage() {
    localStorage.removeItem('dishes');
}

document.getElementById('dishForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('dishName').value;
    const price = document.getElementById('dishPrice').value;
    const rating = document.getElementById('dishRating').value;

    addDishToTable(name, price, rating);

    // Limpa os campos do formulário
    document.getElementById('dishForm').reset();
});

// Carrega os pratos quando a página é carregada
window.onload = loadDishes;
