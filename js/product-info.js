let list = [];
const current_catID = localStorage.getItem("catID");
let current_products = PRODUCTS_URL + current_catID + EXT_TYPE;

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(current_products).then(function (result) {
    if (result.status === "ok") {
      list = result.data;
      console.log(list);
      listElements();
    }
  });
});

const listElements = () => {
  let name = list.catName;
  let productName = list.product.name;
  let productDescription = list.product.desription;
  let productCost = list.product.cost;
  let productCurrency = list.product.currency;

  console.log(name);
  console.log(productCost);
};
