document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector("#container-carrito");
  let cartItems = localStorage.getItem('cart');

  function desplegarCarrito() {
    items = JSON.parse(localStorage.getItem('cart'))
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
        <div class="col-md my-2 fw-bold" id='name' >${item.name}</div>
        <div class="col-md my-2 fst-italic" id='precio' >Precio: ${item.currency} ${(item.cost).toLocaleString('de-DE')}</div>
        <div class="col-md my-2 justify-content-center d-flex d-inline">

          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn ">-</button>
            <input type="number" id='${item.id}' name="cant" value="${item.quantity}" min="1" max="69" step="1">
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
  }

  desplegarCarrito();
  eliminar();

  const cant = document.querySelectorAll('[name="cant"]')
    let subtototalitems = 0;
  cant.forEach(element => {

    element.nextElementSibling.addEventListener('click', () => {
      if (element.value > 0 && element.value < 69) {
        element.value++
         calcSubtotal(element.id)
        console.log(subtototalitems)
        console.log(element.closest('#dataCart').getElementsByTagName('span')[0].innerHTML = subtototalitems)
      }
    })
    element.previousElementSibling.addEventListener('click', () => {
      if (element.value > 1 && element.value < 69) {
        element.value--
        calcSubtotal(element.id)
        console.log(subtototalitems)
        console.log(element.closest('#dataCart').getElementsByTagName('span')[0].innerHTML = subtototalitems)
      }
    })

    
    function calcSubtotal(idCarrito) {


      let items = JSON.parse(localStorage.getItem('cart'));

      items.forEach(cartItems => {
        if (cartItems.id == idCarrito) {
          subtototalitems = element.value * cartItems.cost }
        
        /*totalCarrito = .reduce((acumulador, subtotal) => {
        return acumulador + subtotal;
        }, 0);
        console.log(totalCarrito)*/

      });

    }
   

   

  });


   document.querySelectorAll('input[name="moneyRadio"]').forEach(element => {
      element.addEventListener('click', covnert)
    });

 function covnert(moneda, precio, monDeseada) { 
         monDeseada =  document.querySelector('input[name="moneyRadio"]:checked').value
         moneda/precio =  document.getElementById('Precio');
         
        


              
         /*const valor = [ {
          id: 1, currency: UYU, amount:1,
          id: 1, currency: USD, amount: 40,
         }];
         
         const moneydata = JSON.stringify(valor);
         localStorage.setItem('money', moneydata);

         let monedasvalor = JSON.parse(localStorage.getItem('money'));

         const amount = monedasvalor.filter(amount => amount && currency == monDeseada);
         */


         
          if (moneda != monDeseada || item.currency/precio != monDeseada) { valor/monedasvalor * item.cost/precio
          }
    } 

 covnert()


  function eliminar() {
    document.querySelectorAll('.eliminar').forEach((e) => {
      e.addEventListener('click', (e) => {
        e.stopImmediatePropagation()
        //  console.log(e.currentTarget.children[0].id)
        id = e.currentTarget.children[0].id

        removeProductdeCart(id)
        desplegarCarrito()
      })
    })
  }


})


/*if (cartItems.length > 0) {
   { for ( const items of cartItems) {
 const subtototalitems = id.price * cant.value; }
  
  subtotalinput.innerHTML = subtototalitems.value

   /*let total = 0;
   
  for (let i = 0; i < cartItems.length; i++) {
  total += cartItems[i].subtototalitem;
  } }

 totalinput.innerHTML = (total).value */




