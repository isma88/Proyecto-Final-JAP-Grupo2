const current_ItemId = localStorage.getItem("ItemId");
let current_products_info = PRODUCT_INFO_URL + current_ItemId + EXT_TYPE;
//console.log(current_products_info);
let list = [];

document.addEventListener("DOMContentLoaded", function () {
  getJSONData(current_products_info).then(function (result) {
    if (result.status === "ok") {
      list = result.data;
    //  console.log(list);
      listElements();
      checkImg();
    }
  });
});

const listElements = () => {
  let name = list.name;
  let productCategory = list.category;
  let productDescription = list.description;
  let productCost = list.cost;
  let productCurrency = list.currency;
  let productImages = list.images;
  let productsoldCount = list.soldCount;
  let productid = list.id;

   cost = new Intl.NumberFormat('en-US',
    { 
        style: 'currency', 
        currency: productCurrency  
    }).format(productCost)
  
  document.getElementById('title').innerHTML = name
  document.getElementById('desc').innerHTML = productDescription
  document.getElementById('cat').innerHTML = productCategory
  document.getElementById('price').innerHTML = cost
  document.getElementById('sold').innerHTML = productsoldCount

  console.log(productImages)
    let counter = -1 ;

  for (img of productImages) {
    counter++ 
    
    
     document.getElementById("carousel-inner").innerHTML +=
      ` <div class="carousel-item" id="carousel${counter}">
            <img src="${img}" class="d-block w-100" alt="...">
        </div>`

    document.getElementById("imgSelectorsPlacer").innerHTML +=
      `<img src="${img}" type="radio" name="imgSelectors" id="img${counter}" role="button" style="width: 15rem;" data-bs-target="#imgcar" data-bs-slide-to="${counter}" 
                  aria-current="true" aria-label="Slide ${counter}" class="img-thumbnail" alt="..."  >`

   

  }
  document.getElementById("carousel0").classList.add("active")




 /* let content = `<div class="col-ml-6 ">
                 <p class=" mt-3 ms-3 text-end fw-normal cat"strong>Categoría:</strong> ${productCategory}</p>
                  <div class="row shadow card m-2"> 
                      <h2 class="deco text-center  fw-bolder">${name}</h1>
                       
                  </div>
                  <p class="ms-5 fw-normal precio-valor"strong>${productCurrency} </strong> ${productCost}</p>
        
          
            
            </div>
            <div class="row align-items-end" style="height: 20vh;">
              <p class="me-3 text-end fw-normal vendidos"strong>Vendidos:</strong> ${productsoldCount}</p>
           <div class="row " >
              <button id="buy" class="inset-shadow mx-auto btn btn-primary btn-lg ">Comprar</button>
              <button  id="save" class="inset-shadow btn btn-primary btn-lg "><i class="bi bi-bookmarks-fill"></i></button>
              </div>
            </div>
                       
      
    </div>
            `; */

 // console.log(list);
  //console.log(name);
 // console.log(productCost);
 /* document.getElementById('desc').innerHTML =  `<p strong class='mt-2 des border-top'> </strong>${productDescription}</p>`

  document.getElementById("product-container").innerHTML = content;
  let carouselInner = document.querySelector("#carCarousel .carousel-inner");
  carouselInner.innerHTML = "";

  productImages.forEach((images, index) => {
    carouselInner.innerHTML += `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        <img src="${images}" class="d-inline w-100" alt="Imagen ${index + 1}">
      </div>
    `;
  }); */



 let relatedHTML = "";
  list.relatedProducts.forEach(rel => {
    console.log(list);
    relatedHTML += `
         <div id="${rel.id}" role="button" class="col grow col-md-3 col-6 col-sm-6">
      <div class="card h-100 shadow-lg">
        <img src="${rel.image}" class="card-img-top" alt="${rel.name}">
        <div class="card-body card">
          <h5 class="card-text fs-6 fs-md-5 fs-lg-4">${rel.name}</h5>
        </div>
      </div>
    </div>
    `;
  });
  document.getElementById("items").innerHTML = relatedHTML;
};

  itemSet('items', '.col')




function addComment(mensaje, user, dateTime, score ) {


  document.getElementById('mensajes').innerHTML +=
      `<div class="card mb-4 mt-1 h-100 shadow-md card-coment">
          <div class="row g-4">
              <div class="col-md-2">
                  <div class="card-body">
                      <img src="img/img_perfil.png" class="img-fluid start" alt="comentarios" style="max-width: 80px;">
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="card-body">
                      <h5 class="card-title">${user}</h5>
                      <p class="card-text">${mensaje}</p>
                      <p class="card-text"><small class="text-muted">${dateTime}</small></p>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card-body text-end">
                      ${starCalculator(score)}
                  </div>
              </div>
          </div>
      </div>`
}


function starCalculator(score){
  let stars_list = [`
             
                <label for="star-1" class="bi bi-star-fill"></label>`,
             
                `<label for="star-2" class="bi bi-star-fill"></label>`,
          
               `<label for="star-3" class="bi bi-star-fill"></label>`,
             
                `<label for="star-4" class="bi bi-star-fill"></label>`,
            
                `<label for="star-5" class="bi bi-star-fill"></label>
               `] ;

      for (let i = 0; i <= score -1 ; i++){ 
        stars_list[i] =   `<label for="star-1" class="bi bi-star-fill checked"></label>`
      }

      return stars_list.join("")


}



document.getElementById('sendCom').addEventListener('click', () => {
    let mensaje = document.getElementById('textarea').value
    //console.log(mensaje) 
    
    
    //console.log(user)

  
    let date = new Date();

    let fullyear = date.getFullYear(); 
    let month = date.getMonth() + 1;
    let day = date.getDate(); 
    let hour = date.getHours() ; 
    let min = date.getMinutes();
    let seconds = date.getSeconds(); 


   var fulldate = fullyear + '-' + month + '-' + day +  ' ' + hour + ':' + min + ':' + seconds;

  
   
   
   // console.log(fulldate); 
   
    
    addComment(mensaje, logedName(), fulldate, paintStar())
   

})
  

stars =  document.querySelectorAll('.bi')
for(star of stars) { 
    star.addEventListener("mouseover", addStars)
     star.addEventListener("mouseout", removeaddStars)
    
  }

function addStars(e){
  let labelStar = e.currentTarget.getAttribute('for')
  let currentStar = document.getElementById(labelStar).value

  for (let i = 1; i <= currentStar; i++){
      document.querySelector(`label[for="star-${i}"]`).classList.add('hover-star')

  }
  
  paintStar()
}

function removeaddStars() { 

  for (star of stars) { 
   
    star.classList.remove('hover-star');
  }
    paintStar()
}

 function paintStar(){ 
let stars = document.querySelectorAll('[name="star"]')
let value
  for(star of stars){
  
    if(star.checked) {
      for(let i=1; i<=star.value ; i++){
        
      labelfor = `label[for="star-${i}"]`
      
      document.querySelector(labelfor).classList.add('hover-star')
      }
      value = star.value 
    

    }

}
return value
}

document.addEventListener("DOMContentLoaded", function () {
    let commentsUrl = PRODUCT_INFO_COMMENTS_URL + current_ItemId + EXT_TYPE;

    getJSONData(commentsUrl).then(function (result) {
        if (result.status === "ok") {
            let comments = result.data;
            comments.forEach(comment => {
                addComment(
                    comment.description,   // texto del comentario
                    comment.user,          // usuario
                    comment.dateTime,      // fecha
                    comment.score          // calificación (1-5)
                );
            });
        }
    });
});

function checkImg(){
  let first = "true"
  let imgSelectors = document.querySelectorAll('[name="imgSelectors"]')
  imgSelectors.forEach((imgSelectors) => {
    if(first) {
      imgSelectors.classList.add("check")
    }
    first = false
    imgSelectors.addEventListener('click', choseImg)
  })

}

function choseImg(e) {

  for (imgs of imgSelectors) {
    if(imgs === e.currentTarget) {
      imgs.classList.add("check")
    }else{
      imgs.classList.remove("check")
    }

  }

}

document.addEventListener("DOMContentLoaded", function () {
 
  getJSONData(current_products_info).then(function (result) {
    if (result.status === "ok") {
      list = result.data;
      
      botonañadircar(); 
    }
  });
});

function botonañadircar() {
  const addbtn = document.querySelector("#save button");
  const amountInput = document.getElementById("amountInput");

  addbtn.addEventListener("click", () => {
    const quantity = parseInt(amountInput.value);
    if (!quantity || quantity <= 0) {
      return;
    }

    const product = {
      id: list.id,
      name: list.name,
      cost: list.cost,
      currency: list.currency,
      image: list.images[0],
      quantity: quantity,
      subtotal: list.cost * quantity,
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Si el producto ya está en el carrito, solo aumenta la cantidad
    const existe = cart.find(item => item.id === product.id);
    if (existe) {
      existe.quantity += quantity;
      existe.subtotal = existe.quantity * existe.cost;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    if (typeof updateCartDropdown === "function") {
      updateCartDropdown();
    }

    amountInput.value = ""; // limpia el campo
  });

}
