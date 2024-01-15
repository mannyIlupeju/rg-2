import fetch from 'node-fetch'

export default async function handler(req,res){
    if(req.method === "POST"){
        try{
            const{ cartId } = req.body
            
            const query = `
            query checkoutURL($cartId: ID!) {
                cart(id: $cartId) {
                    checkoutUrl
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
                    variables: {cartId}
                })
            })

            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            res.status(200).json(data);
           


        } catch(error){
            console.error('Error getting to checkout:', error);
        }
    } else {
        res.setHeader('Allow', ['POST']); 
        res.status(405).end(`Method ${req.method} Not Allowed);`)
    }
}