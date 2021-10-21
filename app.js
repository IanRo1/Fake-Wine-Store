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
},
];

  for (let i=0; i < cart.length; i++){
     cart[i].addEventListener('click', () =>{
        cartNumbers();
     })
  }

  function onLoadCartNumbers(){
   let productNumbers = localStorage.getItem('cartNumbers');

   if(productNumbers) {
      document.querySelector('.cart span').textContent = productNumbers;
   }
  }

  function cartNumbers(){
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
  }
  onLoadCartNumbers();