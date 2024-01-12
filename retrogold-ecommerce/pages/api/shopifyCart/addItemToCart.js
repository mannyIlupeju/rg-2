import fetch from 'node-fetch';

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { cartId, lineItems } = req.body;
            const query = `
                mutation addCartLines($cartId: ID!, $lines: [CartLineInput!]!) {
                    cartLinesAdd(cartId: $cartId, lines: $lines) {
                        cart {
                            id
                            lines(first: 10) {
                                edges {
                                    node {
                                        id
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
                        userErrors {
                            field
                            message
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
                    variables: { cartId, lines: lineItems },
                    message : "item added to cart"
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

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error adding items to cart' })
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}