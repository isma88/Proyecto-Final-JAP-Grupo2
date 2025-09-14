const current_ItemId = localStorage.getItem('ItemId')
let current_products_info = PRODUCTS_INFO_URL + current_ItemId + EXT_TYPE
console.log(current_products_info)
let list = []
 
  fetch(PRODUCT_INFO_URL)
    .then(response => response.json())
    .then(data => {
     
      document.getElementById("product-name").textContent = data.name;
      document.getElementById("product-price").textContent = `${data.currency} ${data.cost}`;
      document.getElementById("product-category").textContent = data.category;
      document.getElementById("product-sold").textContent = data.soldCount;
      document.getElementById("product-description").textContent = data.description;

   
      const carouselInner = document.querySelector("#carCarousel .carousel-inner");
      carouselInner.innerHTML = ""; 

      data.images.forEach((imgSrc, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) item.classList.add("active");

        const img = document.createElement("img");
        img.src = imgSrc;
        img.classList.add("d-block", "w-100");
        img.alt = `Imagen ${index + 1}`;

        item.appendChild(img);
        carouselInner.appendChild(item);
      });
    })
    .catch(err => console.error(err));
//const itemId = localStorage.getItem("ItemId");

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