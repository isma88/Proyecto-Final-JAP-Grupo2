 document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector("#container-carrito");
  const cartItems = localStorage.getItem('cart')

  console.log(cartItems)

  function desplegarCarrito(items) {
    if (items.length === 0) {
      container.innerHTML = `<p class="text-center">Tu carrito está vacío.</p>`;
      return;
     }
     container.innerHTML = `
    <ul class="list-group mx-5">    
       
        ${items.map((item) => 
          
       `
         <li class="list-group-item">
        <div class="row align-items-center w-100 justify-content-center">
            <img src="${item.image}" alt="" class="prod-img">
            <div class="col">
              <div class="row text-center align-items-center">
                <div class="col-md my-2 fw-bold">${item.name}</div>
                <div class="col-md my-2 fst-italic">Precio: ${item.currency} ${(item.subtotal).toLocaleString('de-DE')}</div>
                <div class="col-md my-2 justify-content-center d-flex d-inline">

                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn ">-</button>
                    <input type="number" name="cant" value="${item.quantity}" min="1" max="69" step="1">
                    <button type="button" class="btn ">+</button>
                  </div>
                  
                </div>
                 <div class="col-md my-2 fst-italic">Subtotal: ${item.currency} ${(item.quantity * item.subtotal).toLocaleString('de-DE')}</div>
                <div class="col"> <div class="btn ms-3"><i class="bi bi-trash-fill"></i></div></div>
              </div>
            </div>
          </div>
           </li>
        `
        
     )
         .join("")}
     
      
   </ul> `;
   }

  desplegarCarrito(JSON.parse(cartItems));
}); 

const cant = document.querySelectorAll('[name="cant"]')
cant.value = 1

cant.forEach(element => {
  element.value = 1
  element.nextElementSibling.addEventListener('click', () => {
    if(element.value > 0 && element.value < 69) {
    element.value ++
    }
  })
   element.previousElementSibling.addEventListener('click', () => {
    if(element.value > 1 && element.value < 69) {
    element.value --
    }
  })
  
});