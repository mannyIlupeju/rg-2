
import { sanityClient } from '@/lib/dist/sanity.dev';



//Fetch Blog data from Sanity
export async function getAllProducts() {
  const productQuery = `*[_type == "product"]{  
    "slugCurrent":slug.current,
  }`
  const products = await sanityClient.fetch(productQuery)
  return products;
}

//Fetch Blog data from Sanity
export async function getAllBlogs() {
  const blogQuery = `*[_type == "blog"]{  
    "slugCurrent":slug.current,
  }`
  const blogs = await sanityClient.fetch(blogQuery)
  return blogs;
}



//Fetch Search Results from Sanity 
export async function searchSanity(query){
  let sanityQuery;

  if(query.toLowerCase() === "blog"){
    sanityQuery = `*[_type == "blog"]{
      title,
      slug,
      tag
    }`
  }else {
    sanityQuery = `*[_type == "blog" && title match "${query}*"]{
      title,
      slug,
      tag
    }`
  }

  const results = await sanityClient.fetch(sanityQuery);
  return results.map((post) => ({
    type: 'blogPost',
    ...post,
  }));

}



export async function searchShopify(query){
  console.log(query);
  const shopifyResponse = await fetch(`https://${process.env.SHOPIFY_DOMAIN}/api/2023-10/graphql.json`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_PUB
    },
    body: JSON.stringify({
      query: `
        {
          products(first:5, query:"title:'${query}'") {
            edges {
              node {
                id
                title
                handle
                vendor
                descriptionHtml
                images(first: 4) {
                edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
              }
            }
          }
        }
      `,
    }),
  });

  const {data} = await shopifyResponse.json();
  console.log(data)

  if (!data || !data.products) {
    console.error('No data returned from Shopify', data);
    return [];
  }

  return data.products.edges.map(({node}) => ({
    type: 'product',
    ...node,
  }))
  
}