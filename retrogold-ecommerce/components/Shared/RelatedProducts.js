import React from 'react';
import { sanityClient } from '/lib/sanity'
import { urlFor } from '@/lib/sanity';
import Link from 'next/link'

const Relatedproducts = ({data}) => {
  const {productDetail} = data
  const {allProduct} = data
 



  const filterProducts = allProduct.filter((x)=>{
    return x.productName !== productDetail.productName
  })



  return (
    <div className="container mx-auto p-12 mb-4">
      <div className="">
      <h2 className="text-zinc-800">Related Products</h2>
      </div>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-10">
          {filterProducts.map((x)=>{
            const{mainImage, price, productName, brandName, shortDescription, slug, _id} = x
        
            
            return (
              <Link href={`/shop/${slug.current}`} key={_id}>
                <div className="relatedProductBlock">
                  <div className="my-2">
                  <img src={urlFor(mainImage.asset._ref)} alt="" className="relatedProductImage"/>
                  </div>
                  <div className="text-zinc-700 mb-4">
                    <p className="text-sm">{brandName}</p>
                    <p className="font-semibold">{productName}</p>
                    <p>${price}</p>
                  </div>
          
                  <p className="text-zinc-500 text-xs">{shortDescription[0].children[0].text}</p>
                </div>
              </Link>
              
            )
          })}
        </div>
      
      
    </div>
  );
}

export default Relatedproducts;


const shopQuery = `*[_type == "product"]{
  _id,
  mainImage, 
  price, 
  productName,
  brandName,
  slug
  shortDescription
}`

export async function getStaticProps() {
  const shop = await sanityClient.fetch(shopQuery)

  return {  
    props: {
      shop
    }
  }
}

