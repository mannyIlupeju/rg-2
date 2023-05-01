import React from 'react';
import { sanityClient } from '/lib/sanity'
import { urlFor } from '@/lib/sanity';
import Link from 'next/link'

const Relatedproducts = ({data}) => {
  const {productDetail} = data
  const {allProduct} = data
  console.log(productDetail.slug)



  const filterProducts = allProduct.filter((x)=>{
    return x.productName !== productDetail.productName
  })

  console.log(filterProducts)

  return (
    <div>
      <div className="mb-4">
      <h2 className="text-zinc-800">Related Products</h2>
      </div>
      <div className="container">
        <div className="flex gap-10">
          {filterProducts.map((x)=>{
            const{mainImage, price, productName, brandName, shortDescription, slug, _id} = x
          console.log(slug)
            
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
        
                <p className="text-zinc-500 text-sm">{shortDescription[0].children[0].text}</p>
              </div>
              </Link>
              
            )
          })}
        </div>
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

