import fetch from 'node-fetch'

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { productAdded } = req.body; // `variants` is an array of variant IDs
            
            // Construct line items using the same quantity for each variant
            const lineItems = ({
                merchandiseId: id,
                quantity: quantity // Using the same quantity for each variant
            });

            const query = `
                mutation createCart($cartInput: CartInput) {
                cartCreate(input: $cartInput) {
                    cart {
                    id
                    createdAt
                    updatedAt
                    checkoutUrl
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
                    variables: { cartInput: { lines: lineItems } }
                })
            })

            const data = await response.json();
            res.status(200).json(data)
            console.log(data);

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error creating cart' })
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}        