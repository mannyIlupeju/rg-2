
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




//Extract the user input and check if it matches with the filterBlog slug
export async function getFilteredProducts(userSearch) {
  const slugifiedSearch = userSearch.toLowerCase().replaceAll(' ', '-')
  const productSearch = await getAllProducts();
  const filteredProduct = productSearch.filter((product) => slugifiedSearch === product.slugCurrent)

  return filteredProduct;
}

//api endpoint to fetch the filteredBlog Array 
export async function getFilteredBlogs(userSearch) {
  const slugifiedSearch = userSearch.toLowerCase().replaceAll(' ', '-')
  const blogSearch = await getAllBlogs();
  

  const filteredBlog= blogSearch.filter((blog) => slugifiedSearch === blog.slugCurrent)
  return filteredBlog;
}