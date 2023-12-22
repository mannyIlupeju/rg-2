import Shopify from '@shopify/shopify-api';

export default async function handler(req, res) {
    if(req.method === 'POST'){
      try {
        const shopifyClient = new Shopify.Clients.Storefront(process.env.SHOPIFY_DOMAIN, process.env.SHOPIFY_PUB);
        const CREATE_CART_QUERY = `
            mutation {
            cartCreate(input: {}) {
                cart {
                id
                checkoutUrl
                }
            }
            }
        `;
          const response = await shopifyClient.query({
              data: CREATE_CART_QUERY,
              type: Shopify.Clients.GraphQL.ContentType.JSON,
          });

          // Send back the response (cart ID and checkout URL)
          res.status(200).json(response.body.data.cartCreate.cart);
      } catch(error){
          console.error(error);
          res.status(500).json({ error: 'Error creating cart' });
      }
    } else {
        // Handle any non-POST requests
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}