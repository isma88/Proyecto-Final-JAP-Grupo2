document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector("#container-carrito");

  // Mostrar el carrito
  function desplegarCarrito() {
    let items = JSON.parse(localStorage.getItem('cart')) || [];
    convert(items);

    if (items.length === 0) {
      container.innerHTML = `<p class="text-center">Tu carrito está vacío.</p>`;
      return;
    }

    container.innerHTML = `
      <ul class="list-group mx-5">
        ${items.map(item => `
          <li class="list-group-item">
            <div class="row align-items-center w-100 justify-content-center">
              <img src="${item.image}" alt="" class="prod-img">
              <div class="col">
                <div class="row text-center align-items-center" id="dataCart">
                  <div class="col-md my-2 fw-bold">${item.name}</div>
                  <div class="col-md my-2 fst-italic">
                    Precio: ${item.currency} ${(item.cost).toLocaleString('de-DE')}
                  </div>
                  <div class="col-md my-2 justify-content-center d-flex">
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-outline-secondary" data-action="decrement">-</button>
                      <input class="text-center w-50" id="${item.id}" name="cant"
                        type="number" value="${item.quantity}" min="1" max="69">
                      <button type="button" class="btn btn-outline-secondary" data-action="increment">+</button>
                    </div>
                  </div>
                  <div class="col-md my-2 fst-italic">
                    Subtotal:
                    <span>${item.currency} ${(item.quantity * item.cost).toLocaleString('de-DE')}</span>
                  </div>
                  <div class="col">
                    <button class="btn btn-danger eliminar" data-id="${item.id}">
                      <i class="bi bi-trash-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        `).join("")}
      </ul>
    `;

    // funciones auxiliares
    amountControl();
    eliminar();
    updateCartDropdown();
  }

  desplegarCarrito();

  // Control de cantidad
 function amountControl() {
  const inputs = document.querySelectorAll('input[name="cant"]');

  inputs.forEach(element => {
    element.addEventListener('input', () => {
      if (element.value > 0 && element.value < 100) {
        actualizarCantidad(element.id, element.value);
        desplegarCarrito();
      }
    });

    
    element.nextElementSibling.addEventListener('click', () => {
      if (element.value > 0 && element.value < 100) {
        element.value++;
        actualizarCantidad(element.id, element.value);
        desplegarCarrito();
      }
    });

    
    element.previousElementSibling.addEventListener('click', () => {
      if (element.value > 1 && element.value < 100) { 
        element.value--;
        actualizarCantidad(element.id, element.value);
        desplegarCarrito();
      }
    });
  });
}

  //  Actualiza cantidad en el carrito
  function actualizarCantidad(idCarrito, nuevaCantidad) {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    const nuevoCarrito = items.map(item =>
      item.id == idCarrito ? { ...item, quantity: parseInt(nuevaCantidad) } : item
    );
    localStorage.setItem('cart', JSON.stringify(nuevoCarrito));
  }

  // Conversión de moneda
  function convert(items) {
    monDeseada = document.querySelector('input[name="moneyRadio"]:checked').value
    items.forEach(element => {
      console.log(element.name, element.currency, element.cost, monDeseada == element.currency)
      if (element.currency !== monDeseada && monDeseada == "UYU") {
        element.cost = element.cost * 40
        console.log(element.cost)
        element.currency = "UYU"
      } else if (element.currency !== monDeseada && monDeseada == "USD") {
        element.cost = element.cost / 40
        console.log(element.cost)
        element.currency = "USD"
      }

    });

  }

  // Eliminar productos
  function eliminar() {
    document.querySelectorAll('.eliminar').forEach(btn => {
      btn.addEventListener('click', e => {
        const id = e.currentTarget.dataset.id;
        removeProductdeCart(id);
        desplegarCarrito();
      });
    });
  }

  document.querySelectorAll('input[name="moneyRadio"]').forEach(radio => {
    radio.addEventListener('click', desplegarCarrito);
  });
});

