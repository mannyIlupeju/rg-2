import fetch from 'node-fetch';

export default async function handler (req, res){
    if(req.method === "POST"){
      const{cartId} = req.body
        try {
            
            const query = `
            query cartQuery($cartId: ID!) {
              cart(id: $cartId) {
                id
                createdAt
                updatedAt
                checkoutUrl
                lines(first: 10) {
                  edges {
                    node {
                      id
                      quantity
                      merchandise {
                        ... on ProductVariant {
                          id
                          image {
                            src
                            altText
                          }
                          priceV2 {
                            amount
                            currencyCode
                          }
                          product {
                            vendor
                            title
                            handle
                          }
                        }
                      }
                      attributes {
                        key
                        value
                      }
                    }
                  }
                }
                attributes {
                  key
                  value
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
                buyerIdentity {
                  email
                  phone
                  customer {
                    id
                  }
                  countryCode
                }
              }
            }
        `;
            // Replace 'your GraphQL query here' with your actual query.

            const response = await fetch(`https://${process.env.SHOPIFY_DOMAIN}/api/2023-10/graphql.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_PUB,
                },
                body: JSON.stringify({
                    query,
                    variables: { cartId },
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            res.status(200).json(data)
        } catch (error) {
            console.error('Error fetching cart data:', error);
            return { props: { cartData: null } };
        }
    }
}