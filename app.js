   cart = document.querySelectorAll(".cartbtn");

   var products = [
      {
      name: 'Bordeux',
      tag: 'Bordeux',
      price: 19.99 ,
      inCart: 0
   },
   {
      name: 'Montepulciano',
      tag: 'Montepulciano',
      price: 19.99 ,
      inCart: 0
},
{
   name: 'Rose',
   tag: 'Rose',
   price: 19.99 ,
   inCart: 0
},
{
   name: 'Cabernet',
   tag: 'Cabernet',
   price: 19.99 ,
   inCart: 0
},
{
   name: 'Zinfindel',
   tag: 'Zinfindel',
   price: 19.99 ,
   inCart: 0
},
{
   name: 'Merlot',
   tag: 'Merlot',
   price: 19.99 ,
   inCart: 0
},
{
   name: 'Tempranillo',
   tag: 'Tempranillo',
   price: 19.99 ,
   inCart: 0
},
{
   name: 'Primitivo',
   tag: 'Primitivo',
   price: 19.99 ,
   inCart: 0
},
{
   name: 'Barbera',
   tag: 'Barbera',
   price: 19.99 ,
   inCart: 0
},
{
   name: 'Nebbiolo',
   tag: 'Nebbiolo',
   price: 19.99 ,
   inCart: 0
}
];

  for (let i=0; i < cart.length; i++){
     cart[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        totalCost(products[i]);
        displayCart(products[i]);
     })
  }

  function onLoadCartNumbers(){
   let productNumbers = localStorage.getItem('cartNumbers');

   if(productNumbers) {
      document.querySelector('.cart span').textContent = productNumbers;
   }
  }

  function cartNumbers(product){
     let productNumbers = localStorage.getItem('cartNumbers');
     productNumbers = parseInt(productNumbers);

     if ( productNumbers ){
      localStorage.setItem('cartNumbers', productNumbers + 1);
      document.querySelector('.cart span').textContent = productNumbers + 1;
     }
     else{
      localStorage.setItem('cartNumbers', 1);
      document.querySelector('.cart span').textContent = 1;
     }
     setItems(product);
  }

   function setItems(product){
     let cartItems =localStorage.getItem('ProductsInCart');
     cartItems = JSON.parse(cartItems);

     if(cartItems != null){
      if(cartItems[product.tag] == undefined){
         cartItems = {
            ...cartItems,
            [product.tag]:product
         }
      }
        cartItems[product.tag].inCart += 1;
     } else {
        product.inCart = 1;
        cartItems = {
       [product.tag]:product}
     }
     localStorage.setItem("ProductsInCart", JSON.stringify(cartItems));
  }

  function totalCost(product) {
     let cartCost = localStorage.getItem('totalCost');

   if (cartCost != null){
      cartCost = parseInt(cartCost);
   localStorage.setItem("totalCost", cartCost + product.price);
   } else{
      localStorage.setItem("totalCost", product.price);
   }
  }

  function displayCart(product){
   let cartCost = localStorage.getItem('totalCost');
   


      if (cartCost != null){
         cartCost = (cartCost *1).toFixed(2);
      document.querySelector('.sp2').textContent = '$' + cartCost;
   }
     else {
      document.querySelector('.sp2').textContent = 0;
     }

}


  onLoadCartNumbers();
  displayCart();