import { createClient} from "next-sanity"
import imageUrlBuilder from '@sanity/image-url'




const config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2022-12-22',
  useCdn: true,
  token: process.env.NEXT_INVENTORY_TOKEN,
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
}

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/

  



const builder = imageUrlBuilder(config)

export const urlFor = (source) => builder.image(source)


// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

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

  

  