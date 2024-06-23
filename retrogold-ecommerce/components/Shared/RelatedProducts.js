import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

const Relatedproducts = ({ currentProduct, allProducts }) => {

  const filterProducts = allProducts.filter((product)=>{
    return product.id !== currentProduct.id
  })


  return (
    <div className="container w-full overflow-x-auto mx-auto relative mb-4 bg-white">
      <div className="">
      <h2 className="text-zinc-800">Related Products</h2>
      </div>
        
          <div className="flex flex-col md:flex-row gap-10 ">
            {filterProducts.map((items)=>{
              const{images, priceRange, title, vendor, handle, id} = items
              return (
                <Link href={`/shop/${handle}`} key={id}>
                  <div className="relatedProductBlock">
                    <div className="my-2 h-auto">
                    <Image src={images.edges[0].node.originalSrc} alt="" className="relatedProductImage" width="250" height="250"/>
                    </div>
                    <div className="text-zinc-700 mb-4">
                      <p className="text-sm">{vendor}</p>
                      <p className="font-semibold">{title}</p>
                      <p>${priceRange.minVariantPrice.amount}</p>
                    </div>
                  </div>
                </Link>
                
              )
            })}
          </div>

      
      
    </div>
  );
}

export default Relatedproducts;


export async function getStaticProps(){
  const productQuery = `
  query {
    products(first: 5) {
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
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
  `;
  
  const response = await client.request(productQuery);
  const products = response.data.products.edges.map(edge => edge.node);
  
  return {
    props: { 
      products 
    }, // Passed to the page component as props
    revalidate: 60 // Optionally, set revalidation time in seconds
  };
}

