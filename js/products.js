
const current_catID = localStorage.getItem('catID')
let current_products = PRODUCTS_URL + current_catID + EXT_TYPE
console.log(current_products)
let list = []
let filteredlist = []

function compareSort(a, b) {
  return a.cost - b.cost

}


function sortListCostAsc() {
  filteredlist.sort(compareSort)
  
  productList(filteredlist)
}

function sortListCostDec() {

  filteredlist.sort(compareSort)
  filteredlist.reverse()
  productList(filteredlist)
}




function sortListCostRange() {
  let min = document.getElementById('min').value
  if (min == "") {
    min = 0
  }
  console.log(min)
  let max = document.getElementById('max').value
  if (max == "") {
    max = 999999999999999999999999999999
  }
  console.log(max)

  filteredlist = list.filter(a => a.cost > min && a.cost < max)
  productList(filteredlist)

}


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
      list = result.data.products
      filteredlist = list
      productList(list)

    }
  });
})


document.getElementById('sortListCostDec').addEventListener('click', sortListCostDec)
document.getElementById('sortListCostAsc').addEventListener('click', sortListCostAsc)

document.getElementById('rangeValue').addEventListener('click', sortListCostRange)