
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
  } else {
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

