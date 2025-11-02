document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector("#container-carrito");


  function desplegarCarrito() {
    items = JSON.parse(localStorage.getItem('cart'))
    covnert(items)


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
        <div class="row text-center align-items-center" id="dataCart">
          <div class="col-md my-2 fw-bold" id='name'>${item.name}</div>
          <div class="col-md my-2 fst-italic" id='precio'>Precio: ${item.currency}
            ${(item.cost).toLocaleString('de-DE')}</div>
          <div class="col-md my-2 justify-content-center d-flex d-inline">

            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn ">-</button>
              <input class=' text-center w-50' id='${item.id}' type="number" name="cant"
                value="${item.quantity}" min="1" max="69" step="1">
              <button type="button" class="btn ">+</button>
            </div>

          </div>
          <div class="col-md my-2 fst-italic">Subtotal: <span id='prodSubtotal'>${item.currency} ${(item.quantity *
              item.cost).toLocaleString('de-DE')}</span></div>
          <div class="col">
            <div class="btn ms-3 eliminar"><i id='${item.id}' class="bi bi-trash-fill"></i></div>
          </div>
        </div>
      </div>
    </div>
  </li>
        `

    )
        .join("")}
     
      
   </ul> `;
    eliminar();
    amountControl()
    updateCartDropdown()
  }

  desplegarCarrito();
  


  function amountControl() {
    const cant = document.querySelectorAll('[name="cant"]')
    let subtototalitems = 0;
    cant.forEach(element => {

        element.addEventListener('input',() => {
        if (element.value > 0 && element.value < 100) {
          
          calcSubtotal(element.id, element.value)

         // console.log(subtototalitems)
          
          desplegarCarrito()
        }

      }); 

      element.nextElementSibling.addEventListener('click', () => {
        if (element.value > 0 && element.value < 100) {
          element.value++
          calcSubtotal(element.id, element.value)

         // console.log(subtototalitems)
          
          desplegarCarrito()
        }

      })
      element.previousElementSibling.addEventListener('click', () => {
        if (element.value > 1 && element.value < 100) {
          element.value--
          calcSubtotal(element.id, element.value)

        //  console.log(subtototalitems)
         
          desplegarCarrito()
        }

      })


      function calcSubtotal(idCarrito) {


        let items = JSON.parse(localStorage.getItem('cart'));
        covnert(items)
        let newCart = []
        items.forEach(cartItems => {

          var newItems = {
            id: cartItems.id,
            name: cartItems.name,
            cost: cartItems.cost,
            currency: cartItems.currency,
            image: cartItems.image,
            quantity: cartItems.quantity,
          }
          if (cartItems.id == idCarrito) {
            subtototalitems = element.value * cartItems.cost

            console.log(cartItems.quantity, element.value)
            newItems.quantity = parseInt(element.value)
          }

          newCart.push(newItems)
          
          localStorage.setItem('cart', JSON.stringify(newCart))
        });
          console.log(newCart)
      }

    });
  }

  document.querySelectorAll('input[name="moneyRadio"]').forEach(element => {
    element.addEventListener('click', desplegarCarrito)
  });

  function covnert() {
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

  function eliminar() {
    document.querySelectorAll('.eliminar').forEach((e) => {
      e.addEventListener('click', (e) => {
        e.stopImmediatePropagation()
        id = e.currentTarget.children[0].id

        removeProductdeCart(id)
        desplegarCarrito()
      })
    })
  }


})




