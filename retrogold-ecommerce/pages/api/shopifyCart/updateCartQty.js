import fetch from 'node-fetch'

export default async function handler(req, res){
    if(req.method === "POST"){
        try {
          const {cartId, id, quantity} = req.body;
         
            
          const lines = [{
             id:id,
             quantity:quantity
            }]

            const query = `
              mutation updateCartLines($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
                cartLinesUpdate(cartId: $cartId, lines: $lines) {
                    cart {
                    id
                    lines(first: 10) {
                        edges {
                        node {
                            id
                            quantity
                            merchandise {
                            ... on ProductVariant {
                                id
                            }
                            }
                        }
                        }
                    }
                    cost {
                        totalAmount {
                        amount
                        currencyCode
                        }
                        subtotalAmount {
                        amount
                        currencyCode
                        }
                        totalTaxAmount {
                        amount
                        currencyCode
                        }
                        totalDutyAmount {
                        amount
                        currencyCode
                        }
                    }
                    }
                }
            }
            `;
             const response = await fetch(`https://${process.env.SHOPIFY_DOMAIN}/api/2023-10/graphql.json`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_PUB
                },
                body: JSON.stringify({
                    query,
                    variables: { cartId, lines:lines}
                })
            })

            const data = await response.json();
            res.status(200).json(data)

            // Check if cartLinesAdd is available and has userErrors
            if (data.data && data.data.cartLinesAdd && data.data.cartLinesAdd.userErrors) {
                if (data.data.cartLinesAdd.userErrors.length > 0) {
                    console.error('User errors:', data.data.cartLinesAdd.userErrors);
                }
            } else {
                console.error('Unexpected response structure:', data);
            }

        } catch(error){
            console.error('Error updating item quantity', error)
        }
    }

}