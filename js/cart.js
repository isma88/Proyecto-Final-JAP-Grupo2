document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector("#container-carrito");
  const cartItems = [
    { nombre: "Computadora", img: 'img/prod40281_1.jpg',precio:'$1000'},
    { nombre: "Teclado", img: 'img/prod40281_2.jpg',precio:'$400'},
    { nombre: "Procesador", img: 'img/prod40281_3.jpg',precio:'$5000'},

  ];

  function desplegarCarrito(items) {
    if (items.length === 0) {
      container.innerHTML = `<p class="text-center">Tu carrito está vacío.</p>`;
      return;
    }
    container.innerHTML = `
      <div class="list-group">
        ${items.map((item) => 
          `<div class="list-group-item d-flex align-items-center">
             <img src="${item.img}" alt="${item.nombre}" class="me-3" style="width: 80px; height: 80px; object-fit: cover;">
            <div>
              <h5>${item.nombre}</h5>
              <p>${item.precio}</p>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }

  desplegarCarrito(cartItems);
});
