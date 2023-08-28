import { createClient} from "next-sanity"


// // Retrieve a product with its inventory data
  sanityClient
  .fetch('*[_type == "product"]{_id, inventory}')
  .then((products) => {
    console.log(products)
    //product Id
    const productId = products.map((item) => item._id)
    console.log('productId:', productId);

    //Products - Inventory and Stock
    const productInfo = products.map((item) => item);
    const product = (productInfo.map((items)=> items.inventory))
    console.log(product)

    //Inventory stock
    const stock = product.map((x)=> x.stockQuantity)
    console.log('Stock Quantity:', stock);

    //In stock information
    const inStock = product.map((x)=> x.inStock)
    console.log('In Stock:', inStock);
  })
  .catch((error) => {
    console.error('Error retrieving product:', error);
  });
