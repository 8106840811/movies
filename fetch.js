let products=[

]
fetch("https://fakestoreapi.com/products")
.then(function(res){
    return res.json()
}
)
.then(function(data){
    
    products.push(...data);
    displayProduct(products)
    return "hello"
})

function displayProduct(data){
    console.log(data)

    data.forEach(function(index){

        const productItem = document.createElement('li')
        productItem.classList.add('product')

       const productImg = document.createElement('img')
       productImg.src = index.image;
       productImg.alt = index.title;

       const productName = document.createElement('h2')
       productName.textContent = index.title;

       const productPrice = document.createElement('p')
       productPrice.textContent = index.price  

       
       productItem.appendChild(productImg)
       productItem.appendChild(productName)
       productItem.appendChild(productPrice)
       productlist.appendChild(productItem)

    });
}
displayProduct(products);