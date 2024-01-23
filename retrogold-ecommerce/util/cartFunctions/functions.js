 export async function handleRemove(id, cartId, quantity, onRemoveCallback) {
    try {  
        const response = await fetch('/api/shopifyCart/removeCart', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ 
            cartId, 
            id,
            quantity
          })
        })

        if(response.ok && onRemoveCallback){
          onRemoveCallback(id) 
        }

    } catch (error){
      console.error('Error sending info to shopify to remove item:', error)
    }
  }




  export async function handleToggle(itemData, id, value, quantity, onToggleCallback, cartId) { 
    console.log('clicked'); 
  const cartItems = itemData
    const currentItem = cartItems.find((item) => item.id === id);
    if(!currentItem){
      console.error('Item not found in cart');
      return;
    }

    let newQuantity = Number(currentItem.quantity);
    if(value === 'inc'){
      newQuantity++;
    } else if(value === 'dec' && newQuantity > 1) {
      newQuantity--;
    }


    try {
      const response = await fetch('/api/shopifyCart/updateCartQty', {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({
          cartId,
          id, 
          quantity: newQuantity
        })
      })

      const data = await response.json();
     

      if(response.ok && onToggleCallback){
        onToggleCallback(id, value)
      } else {
        console.error('Error updating quanityt in the cart:', data);
      } 
    } catch(error){
        console.error('Error updating quantity in the cart:', error)
    }
  } 


  export async function handleCheckOut(cartId){
    if(cartId){
      const response = await fetch('/api/checkout/checkout', {
         method: "POST",
         headers: {
          'Content-Type': 'application/json'
         },
         body: JSON.stringify({cartId})
      })

      const data = await response.json();
      const fetchedData = data;
      if(fetchedData.data.cart){
        window.location.href = fetchedData.data.cart.checkoutUrl
      }
    
      
    }
  }


