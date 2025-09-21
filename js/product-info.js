const current_ItemId = localStorage.getItem("ItemId");
let current_products_info = PRODUCT_INFO_URL + current_ItemId + EXT_TYPE;
console.log(current_products_info);
let list = [];

document.addEventListener("DOMContentLoaded", function () {
  getJSONData(current_products_info).then(function (result) {
    if (result.status === "ok") {
      list = result.data;
      console.log(list);
      listElements();
    }
  });
});

const listElements = () => {
  let name = list.name;
  let productCategory = list.category;
  let productName = list.name;
  let productDescription = list.description;
  let productCost = list.cost;
  let productCurrency = list.currency;
  let productImages = list.images;
  let productsoldCount = list.soldCount;
  let productid = list.id;

  let content = `<div class="col-ml-6 ">
                 <p class=" mt-3 ms-3 text-end fw-normal cat"strong>Categoría:</strong> ${productCategory}</p>
                  <div class="row shadow card m-2"> 
                      <h2 class="deco text-center  fw-bolder">${name}</h1>
                       
                  </div>
                  <p class="ms-5 fw-normal precio-valor"strong>${productCurrency} </strong> ${productCost}</p>
        
          
            
            </div>
            <div class="row align-items-end" style="height: 20vh;">
              <p class="me-3 text-end fw-normal vendidos"strong>Vendidos:</strong> ${productsoldCount}</p>
              <button class="inset-shadow btn btn-primary btn-lg ">Comprar</button>
            </div>
                       
      
    </div>
            `;

  console.log(list);
  console.log(name);
  console.log(productCost);
document.getElementById('desc').innerHTML =  `<div class="mt-2 des">
        <p strong> Descripcion: </strong>${productDescription}</p>
      </div>`

  document.getElementById("product-container").innerHTML = content;
  let carouselInner = document.querySelector("#carCarousel .carousel-inner");
  carouselInner.innerHTML = "";

  productImages.forEach((images, index) => {
    carouselInner.innerHTML += `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        <img src="${images}" class="d-inline w-100" alt="Imagen ${index + 1}">
      </div>
    `;
  });
};


function addComment(mensaje, user, score, dateTime) {
  
 
  document.getElementById('mensajes').innerHTML += 
 `<div class="card mb-4 mt-1 h-100 shadow-sm">
  <div class="row g-4 ">
    <div class="col-md-2">
      <div class="card-body ">
      <img src="img/img_perfil.png" class="img-fluid start" alt="comentarios" style="max-width: 80px;">
      </div>
    </div>
    <div class="col-md-6 ">
      <div class="card-body ">
        <h5 class="card-title"> ${user}</h5>
        <p id="msg" class="card-text">${mensaje}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card-body text-end"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
</svg>  
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
</svg> 
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
</svg> 
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
</svg>  
    </div>
  </div>
    </div>
    </div>`


}


document.getElementById('sendCom').addEventListener('click', () => {
    let mensaje = document.getElementById('textarea').value
    console.log(mensaje)
    
    let user = localStorage.getItem('usuario');
    console.log(user)
    addComment(mensaje, user)

})



