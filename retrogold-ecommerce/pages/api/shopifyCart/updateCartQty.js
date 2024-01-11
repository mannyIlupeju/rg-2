import fetch from 'node-fetch'

export default async function handler(req, res){
    if(req.method === "POST"){

        try {
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

        } catch(error){
            console.error('Error updating item quantity', error)
        }
    }

}