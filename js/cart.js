document.addEventListener('DOMContentLoaded', function () {
  let elSubtotal = document.getElementById('subtotal')
  let elTotal = document.getElementById('total')

  const container = document.querySelector("#container-carrito");
  document.querySelectorAll('input[name="envio"]').forEach(element => {
    console.log(element)
    
    element.addEventListener("click", () => showSubtotal(calcularSubtotal()))
  });
  
  // Mostrar el carrito
  function desplegarCarrito() {
    let items = extractCart() || []; //descarga el carrito
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
    console.log(calcularSubtotal())
    showSubtotal(calcularSubtotal())
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
      localStorage.setItem("cart", JSON.stringify(items))
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


 function calcularSubtotal(){  
  carrito = extractCart()
  let opSelected = document.querySelector('input[name="envio"]:checked')
  let rawSubtotal = 0;
  let taxTotal = 0 ;

  
      carrito.forEach(item => {
        rawSubtotal += item.cost * item.quantity
      })
    
    //agrega subtotal sin convertir al elemento subtotal

    switch (opSelected.value) {
      case "Standard":

          console.log(`estandar selecccionado `)
          taxTotal = rawSubtotal * 1.05
          return  {taxTotal:taxTotal, rawSubtotal:rawSubtotal}
        break;
      
      case "Express":
          console.log("express")
          taxTotal = rawSubtotal * 1.07  
          console.log(taxTotal)
          return  {taxTotal:taxTotal, rawSubtotal:rawSubtotal};
        break;
    
      case "Premium":
        console.log("premium ")
        taxTotal = rawSubtotal * 1.15
        console.log(taxTotal)
          return  {taxTotal:taxTotal, rawSubtotal:rawSubtotal}
        break;

      default:
        taxTotal = rawSubtotal * 1.05
          return {taxTotal:taxTotal, rawSubtotal:rawSubtotal}
        break; 


    }

  

    
    
 }


 function showSubtotal(totals) {
  let selCurr = document.querySelector('input[name="moneyRadio"]:checked').value || [] 
  console.log(selCurr)
  elTotal.innerHTML = selCurr + totals.taxTotal.toLocaleString('de-DE')
  elSubtotal.innerHTML = selCurr + totals.rawSubtotal.toLocaleString('de-DE')

  
}
 
});



function validarDireccion() {
  const departamento = document.getElementById('departamento').value.trim();
  const localidad = document.getElementById('localidad').value.trim();
  const calle = document.getElementById('calle').value.trim();
  const numero = document.getElementById('numero').value.trim();
  const esquina = document.getElementById('esquina').value.trim();

  let valid = true;

  // validar cada campo por separado y aplicar/remover la clase is-invalid
  if (departamento === '') {
    document.getElementById('departamento').classList.add('is-invalid');
    valid = false;
  } else {
    document.getElementById('departamento').classList.remove('is-invalid');
  }

  if (localidad === '') {
    document.getElementById('localidad').classList.add('is-invalid');
    valid = false;
  } else {
    document.getElementById('localidad').classList.remove('is-invalid');
  }

  if (calle === '') {
    document.getElementById('calle').classList.add('is-invalid');
    valid = false;
  } else {
    document.getElementById('calle').classList.remove('is-invalid');
  }

  if (numero === '') {
    document.getElementById('numero').classList.add('is-invalid');
    valid = false;
  } else {
    document.getElementById('numero').classList.remove('is-invalid');
  }

  if (esquina === '') {
    document.getElementById('esquina').classList.add('is-invalid');
    valid = false;
  } else {
    document.getElementById('esquina').classList.remove('is-invalid');
  }
  if (!valid) {
    document.getElementById('collapseDireccion').classList.remove('collapse')
  }

  return valid;
}


function validarTipoEnvio() {
  const radio = document.querySelector('input[name="envio"]:checked');

  if (!radio) {
    collapseEnvio.classList.remove('collapse')
    alert('Seleccione un tipo de envío');
    return false;
  }
  return true;
}

function validarCantidad() {
  const items = JSON.parse(localStorage.getItem('cart')) || [];

  if (items.length === 0) {
 //   alert('El carrito está vacío');
    return false;
  }

  return true;
}


function validarFormaPago() {
  const formaPagoSeleccionada = document.querySelector('input[name="pago"]:checked');
  let tarjeta = document.getElementById('pago1')
  let transferencia = document.getElementById('pago2')
  let collapsePago =  document.getElementById('collapsePago')
  if (!formaPagoSeleccionada) {
 //   alert('Seleccione una forma de pago');
    collapsePago.classList.remove('collapse')
    tarjeta.classList.add('is-invalid')
    transferencia.classList.add('is-invalid')
    return false;
  }
  tarjeta.classList.remove ('is-invalid')
    transferencia.classList.remove ('is-invalid')
  return true;
}



document.querySelector('#buyBtn').addEventListener('click', (e) => {
  var myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
     validarFormaPago()
      validarDireccion()
      validarTipoEnvio()
       validarCantidad()
       
  if (validarDireccion() &&
      validarTipoEnvio() &&
      validarCantidad() &&
      validarFormaPago()) {

  //  alert('¡Compra finalizada con éxito!');

  myModal.show();

  }
});
