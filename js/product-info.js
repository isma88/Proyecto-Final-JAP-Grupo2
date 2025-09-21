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

 let relatedHTML = "";
  list.relatedProducts.forEach(rel => {
    console.log(list);
    relatedHTML += `
         <div class="col-md-3 col-6 col-sm-6">
      <div onclick="setProductID(${rel.id})" class="card h-100 shadow-lg">
        <img src="${rel.image}" class="card-img-top" alt="${rel.name}">
        <div class="card-body card">
          <h5 class="card-text fs-6 fs-md-5 fs-lg-4">${rel.name}</h5>
          <p class="card-text fs-6 fs-md-5 fs-lg-4">${rel.description}</p>
        </div>
      </div>
    </div>
    `;
  });
  document.getElementById("related-products").innerHTML = relatedHTML;
};
function setProductID(id) {
  localStorage.setItem("ItemId", id);
  window.location = "product-info.html";
}

