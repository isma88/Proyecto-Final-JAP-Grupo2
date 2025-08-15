
let current_products = PRODUCTS_URL+'101'+EXT_TYPE

function productList(list) {
    for (product of list ){
        console.log(product.name)
        console.log(product.description)
        console.log(product.cost)
        console.log(product.image)
        console.log(product.soldCount)
        console.log(product.currency)    
    }

}

document.addEventListener("DOMContentLoaded", function(e){
   getJSONData(current_products).then(function(result){
        if (result.status === "ok"){
            let list = result.data.products
            console.log(list)
            
            productList(list)                
        }
    });


})