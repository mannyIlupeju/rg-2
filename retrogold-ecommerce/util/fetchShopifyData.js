



const SHOPIFY_STOREFRONT_ENDPOINT = 'quickstart-b83ae816.myshopify.com'
const STORFRONTACCESSTOKEN = '5431836f1c03b80506dabe8482a807f0'




export async function fetchShopifyData({query, variables}) {
    try{
        const res = await fetch(SHOPIFY_STOREFRONT_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': STORFRONTACCESSTOKEN,
            },
            body: { query, variables } && JSON.stringify({ query, variables })
        })
        const {data} = await res.json();
        return {
            data
        };
    } catch(error) {
        console.log('Error:', error);
        return {
            status: 500,
            error: 'Error receiving data'
        }
    }
}

export async function getAllProducts(){
return fetchShopifyData({
    query: `{
        products(first: 5) {
            edges {
                node {
                    id
                    title
                    handle
                    description
                    priceRange {
                        minVariantPrice {
                            amount
                            currencyCode
                        }
                    }
                    images(first: 5) {  
                        edges {
                            node {
                                src
                                altText
                            }
                        }
                    }
                }
            }
        }
    }`
});
}