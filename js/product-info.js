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
            <div class="row me-3 align-items-end" style="height: 20vh;">
              <p class="ms-3 text-end fw-normal vendidos"strong>Vendidos:</strong> ${productsoldCount}</p>
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
