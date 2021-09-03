   addtoCart = document.querySelectorAll('.crtbtn')

   addtoCart.forEach((cart) => {cart.addEventListener('click', () => {
       updateCartTotal();
   })
})
    
   function updateCartTotal(){
   
   let priceStr = document.querySelectorAll('.imgprice');
    let quantity = document.querySelectorAll('.number');
    let total = 0;

    priceStr.forEach((price) => {parseFloat(price.innertext.replace('$', ''),
    quantity.forEach((quant) => quant.value), total = total + (price * quant), 
    document.querySelector('.cart-total').innertext = '$' + total
     );
     
});

}
