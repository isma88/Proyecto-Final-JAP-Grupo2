const current_ItemId = localStorage.getItem('ItemId')
let current_products_info = PRODUCT_INFO_URL + current_ItemId + EXT_TYPE
console.log(current_products_info)
let list = []

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
   let name = list.catName;
   let productCategory = list.category;
   let productName = list.name;
   let productDescription = list.description;
   let productCost = list.cost;
   let productCurrency = list.currency;
   let productImg = list.img;
   let productsoldCount = list.soldCount;
   let productid = list.id
   let content =
   `<div class="col-md-6">
          <h1 class="mb-4 text-center mb-5"${productName}></h1><p class="ms-3 fw-normal precio-valor"strong>Precio:</strong> ${productCurrency} ${productCost}</p>
        <p class="ms-3 mt-5 fw-normal cat"strong>Categoría:</strong> ${productCategory}</p>
        <p class="ms-3 fw-normal cat"strong>Vendidos:</strong> ${productsoldCount}</p>
      </div>
      <div class="col-12 mt-3 fw-normal des">
        <p strong> Descripcion: </strong>${productDescription}</p>
      </div>
      </div>
    </div>
  </div>`

   console.log(list);
   console.log(name);
   console.log(productCost);
   document.getElementById("product-container").innerHTML = content;
     let carouselInner = document.querySelector("#carCarousel .carousel-inner");
  carouselInner.innerHTML = "";

  productImages.forEach((images, index) => {
    carouselInner.innerHTML += `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        <img src="${imgaes}" class="d-block w-100" alt="Imagen ${index + 1}">
      </div>
    `;
 });
};
//document.addEventListener("DOMContentLoaded", () => {
//  const URL = "https://japceibal.github.io/emercado-api/products/50922.json";

 // fetch(URL)
  //  .then(response => response.json())
 //   .then(data => {
   //   document.getElementById("product-name").textContent = data.name;
 //     document.getElementById("product-price").textContent = `${data.currency} ${data.cost}`;
   //   document.getElementById("product-category").textContent = data.category;
   //   document.getElementById("product-sold").textContent = data.soldCount;
//      document.getElementById("product-description").textContent = data.description;

    //  const carouselInner = document.querySelector("#carCarousel .carousel-inner");
    //  carouselInner.innerHTML = "";

    //  data.images.forEach((imgSrc, index) => {
     //   const item = document.createElement("div");
     //   item.classList.add("carousel-item");
     //   if (index === 0) item.classList.add("active");

      //  const img = document.createElement("img");
      //  img.src = imgSrc;
      //  img.classList.add("d-block", "w-100");
      //  img.alt = `Imagen ${index + 1}`;

      //  item.appendChild(img);
      //  carouselInner.appendChild(item);
     // });
  //  })
  //  .catch(err => console.error(err));
//});



//document.addEventListener("DOMContentLoaded", () => {
  //getJSONData(PRODUCTS_URL + itemId + EXT_TYPE).then((result) => {
   // if (result.status === "ok") {
    //  const lista = result.data.products;
    //  const producto = lista.find((p) => p.id == itemId);

     // if (producto) {
      //  mostrarProducto(producto);
      //}
    //}
 // });
//});

//function mostrarProducto(producto) {
  //const carouselInner = document.querySelector(".carousel-inner");
  //const nombreEl = document.querySelector("h2.card-text");
  //const precioEl = document.querySelector("p:nth-of-type(1)");
  //const categoriaEl = document.querySelector("p:nth-of-type(2)");
  //const vendidosEl = document.querySelector("p:nth-of-type(3)");
  //const descripcionEl = document.querySelector(".col-12 p");

  //nombreEl.textContent = producto.name;
  //precioEl.innerHTML = `<strong>Precio:</strong> ${producto.currency} ${producto.cost}`;
  //categoriaEl.innerHTML = `<strong>Categoría:</strong> ${
    //producto.category || "Autos"
  //}`;
  //vendidosEl.innerHTML = `<strong>Cantidad de vendidos:</strong> ${producto.soldCount}`;
  //descripcionEl.textContent = producto.description;

  //carouselInner.innerHTML = "";
  //producto.images.forEach((src, i) => {
    //const item = document.createElement("div");
    //item.className = `carousel-item ${i === 0 ? "active" : ""}`;
    //item.innerHTML = `<img src="${src}" class="d-block w-100">`;
    //carouselInner.appendChild(item);
  //});
//}
// let list = [];
// const current_catID = localStorage.getItem("catID");
// let current_products = PRODUCTS_URL + current_catID + EXT_TYPE;

// document.addEventListener("DOMContentLoaded", function (e) {
//   getJSONData(current_products).then(function (result) {
//     if (result.status === "ok") {
//       list = result.data;
//       console.log(list);
//       listElements();
//     }
//   });
// });

// const listElements = () => {
//   let name = list.catName;
//   let productName = list.product.name;
//   let productDescription = list.product.desription;
//   let productCost = list.product.cost;
//   let productCurrency = list.product.currency;
//   console.log(name);
//   console.log(productCost);
// };
