import fetch from 'node-fetch';

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { cartId, id, quantity } = req.body;
            console.log(quantity, id);

            const lineItems = [{
                merchandiseId: id,
                quantity: quantity
            }];

            const query = `
                mutation addCartLines($cartId: ID!, $lines: [CartLineInput!]!) {
                    cartLinesAdd(cartId: $cartId, lines: $lines) {
                        cart {
                            id
                            lines(first: 10) {
                                edges {
                                    node {
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
                    variables: { cartId, lines: lineItems }
                })
            })

            const data = await response.json();
            res.status(200).json(data)

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error adding items to cart' })
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}