
let current_products = PRODUCTS_URL + '101' + EXT_TYPE

function productList(list) {
  let content = '';
  for (product of list) {
    let image = product.image
    let name = product.name
    let currency = product.currency
    let cost = product.cost
    let soldCount = product.soldCount
    let description = product.description

    content +=
      `<div class="col">
          <div class="card shadow rounded-3 h-100 p-1">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column h-100">
              <h5 class="card-title">${name}</h5>
              <p  class="card-text" >${description}</p>
                <p class="mt-auto card-text text-end"><small class="text-muted ">vendidos ${soldCount}</small></p>
            </div>
            <div class='card-footer font-monospace text-center fs-4 fw-bold rounded shadow-sm'>
              <small class=''> ${currency}${cost} </small> 
            </div>
          </div>
        </div>`
  }

  document.getElementById('items').innerHTML = content

}

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(current_products).then(function (result) {
    if (result.status === "ok") {
      let list = result.data.products


      productList(list)
    }
  });


})