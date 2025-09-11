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

const itemId = localStorage.getItem("ItemId");

document.addEventListener("DOMContentLoaded", () => {
  getJSONData(PRODUCTS_URL + itemId + EXT_TYPE).then((result) => {
    if (result.status === "ok") {
      const lista = result.data.products;
      const producto = lista.find((p) => p.id == itemId);

      if (producto) {
        mostrarProducto(producto);
      }
    }
  });
});

function mostrarProducto(producto) {
  const carouselInner = document.querySelector(".carousel-inner");
  const nombreEl = document.querySelector("h2.card-text");
  const precioEl = document.querySelector("p:nth-of-type(1)");
  const categoriaEl = document.querySelector("p:nth-of-type(2)");
  const vendidosEl = document.querySelector("p:nth-of-type(3)");
  const descripcionEl = document.querySelector(".col-12 p");

  nombreEl.textContent = producto.name;
  precioEl.innerHTML = `<strong>Precio:</strong> ${producto.currency} ${producto.cost}`;
  categoriaEl.innerHTML = `<strong>Categoría:</strong> ${
    producto.category || "Autos"
  }`;
  vendidosEl.innerHTML = `<strong>Cantidad de vendidos:</strong> ${producto.soldCount}`;
  descripcionEl.textContent = producto.description;

  carouselInner.innerHTML = "";
  producto.images.forEach((src, i) => {
    const item = document.createElement("div");
    item.className = `carousel-item ${i === 0 ? "active" : ""}`;
    item.innerHTML = `<img src="${src}" class="d-block w-100">`;
    carouselInner.appendChild(item);
  });
}
