let productList = [];
let myHttp = new XMLHttpRequest();
myHttp.open('GET', 'https://fakestoreapi.com/products');
myHttp.send();

myHttp.addEventListener('readystatechange', function(){
    if(myHttp.readyState === 4)
    {
        
        productList = JSON.parse(myHttp.response);
        displayProducts(productList);
        console.log(productList);
    }
});

function displayProducts(arr){
    let products = '';
    for(let i = 0; i < arr.length; i++)
    {
        products += `<div class="card m-5" style="width: 18rem;">
        <img src="${arr[i].image}" class="card-img-top ">
        <div class="card-body">
          <h2 class="card-title">${arr[i].title}</h2>
          <p class="card-text">description: ${arr[i].description}</p>
          <h2 class="card-title"> ${arr[i].price}$</h2>
          <p class="card-text">Rating: ${arr[i].rating.rate}</p>
          <p class="card-text">Number of Sales: ${arr[i].rating.count}</p>
          <h2 class="card-title"> ${arr[i].category}</h2>

          <a href="#" class="btn btn-outline-primary">Buy</a>
          <a href="#" class="btn btn-outline-info">Add To Cart</a>
        </div>
      </div>`
    }
    document.querySelector('#productContainer').innerHTML = products;

}