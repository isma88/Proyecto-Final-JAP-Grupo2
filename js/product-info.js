let list = [];

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(current_products).then(function (result) {
    if (result.status === "ok") {
      list = result.data;
      filteredlist = list;
      productList(list);
    }
  });
});

let name = list.data.product.name;
let description = list.product.description;
let cost = list.product.cost;
let currency = list.product.currency;
let image = list.product.image;

console.log(name);
