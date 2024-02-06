import React, {useState} from 'react';
import Head from 'next/head'
import Image from 'next/image';
import { sanityClient } from '/lib/sanity'
import {urlFor} from '/lib/sanity'
import Navigation from '@/components/Shared/Navigation'
import Login from '@/components/Authorization/Login'
import Register from '@/components/Authorization/Register'
import Footer from '@/components/Shared/Footer/footer'
import Link from 'next/link'
import { useGlobalContext } from '@/ Context/context'
import RespMenu from '@/components/responsiveMenu/RespMenu'
import client from '../../util/shopify/shopifyClient'





const Shop = ({ products }) => {
  const { isOpenMenu, isSignIn, isUserRegistered} = useGlobalContext();
  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (_id) => {
    setIsHovered(_id);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };


  return (
    <>
      <Head>
 
      </Head>
      {isOpenMenu && <RespMenu />}
      <Navigation />
      {isSignIn && <Login />}
      {isUserRegistered && <Register />}

      <main className="section-background">
        <div className="container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-12  w-fit">
          {products.map((shopItems) => {
            const { vendor, id, handle, images, title, priceRange, shortDescription } = shopItems;
            const str = id;
            const _id = str.match(/\d+/g).join('');

            return (
              <Link href={`/shop/${handle}`} key={_id}>
                    <div className="text-zinc-700 cursor-pointer w-fit">
                 <div onMouseEnter={() => handleMouseEnter(_id)} onMouseLeave={handleMouseLeave}>
                     {images.edges[0] && (
                         <Image 
                         key={_id}
                         src={isHovered === _id ? images.edges[1]?.node.originalSrc : images.edges[0]?.node.originalSrc} 
                         width={250} 
                         height={250} 
                         alt="Product Image"
                         className="shopImage rounded transform transition hover:scale-105 "
                         priority
                         />    
                    )}
                 </div>

                  <div className="mt-2">
                    <p className="text-sm">{vendor}</p>
                    <p className="text-md font-bold">{title}</p>
                    <p className="text-zinc-800 font-bold">${priceRange.minVariantPrice.amount}</p>
                    <div className="line-clamp-4 mt-4">
                    </div>
                  </div>
                </div>
             </Link> 
            
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Shop;



export async function getStaticProps() {
    const productQuery = `
    query {
      products(first: 10) {
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
    // GraphQL query to fetch products

    // Fetching products
    const response = await client.request(productQuery);
    const products = response.data.products.edges.map(edge => edge.node);

    return {
        props: { products }, // Passed to the page component as props
        revalidate: 60 // Optionally, set revalidation time in seconds
    };
}