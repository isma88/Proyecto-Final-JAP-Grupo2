
let current_products = PRODUCTS_URL+'101'+EXT_TYPE

function productList(list) {
    let content = '';
    for (product of list ){

       content += ` <div class="image"> 
                    <img src="${product.image}" alt="">
                  <p>${product.name}</p>
                  <div class="price">Precio:<span class="precio">${product.currency} ${product.cost}</span></div>
                  
                <p2 class="vendidos">
                      ${product.soldCount}
                    </p2>

                     <p3 class= "p3">
                      ${product.description}
                    </p3>
            
                </div>`

                


    }

    document.getElementById('items').innerHTML = content

}

document.addEventListener("DOMContentLoaded", function(e){
   getJSONData(current_products).then(function(result){
        if (result.status === "ok"){
            let list = result.data.products
            
            
            productList(list)                
        }
    });


})