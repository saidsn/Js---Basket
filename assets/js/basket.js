let products = [];

if (localStorage.getItem("products") != null) {
    products = JSON.parse(localStorage.getItem("products"))
}

let tableBody = document.querySelector(".table .table-body");


for (const product of products) {
    tableBody.innerHTML += `<tr>
    <td><img src="${product.image}" height="100px" width="100px" class="card-img-top" alt="..."></td>
    <td>${product.name}</td>
    <td>${product.desc}</td>
    <td>${product.count}</td>
    <td><i class="fa-solid fa-circle-xmark" ></i></td>
  </tr>`
}


document.querySelector("sup").innerText = getProductsCount(products);

function getProductsCount(items){
    let resultCount = 0;
    for (const item of items) {
        resultCount += item.count
    }
    return resultCount;
}

let clickIcon = document.querySelector(".fa-solid");

let newProducts = [];

clickIcon.addEventListener("click",function(){
    
})