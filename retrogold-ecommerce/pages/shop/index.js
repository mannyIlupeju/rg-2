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





const Shop = ({ shop }) => {
  const { isOpenMenu, isSignIn, isUserRegistered } = useGlobalContext();
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
        // ( ... )
      </Head>
      {isOpenMenu && <RespMenu />}
      <Navigation />
      {isSignIn && <Login />}
      {isUserRegistered && <Register />}

      <main className="section-background">
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {shop.map((shopItems) => {
            const { brandName, _id, slug, mainImage, mainImage2, productName, price, shortDescription } = shopItems;
            return (
              <Link href={`/shop/${slug.current}`} key={_id}>
                <div className="text-zinc-700 cursor-pointer">
                  <div onMouseEnter={() => handleMouseEnter(_id)} onMouseLeave={handleMouseLeave}>
                    <Image src={isHovered === _id ? mainImage2 : mainImage} width="200" height="200" alt="plant-pots" className="shopImage rounded transform transition hover:scale-105" />
                  </div>
                  <div className="mt-2">
                    <p className="text-sm">{brandName}</p>
                    <p className="text-md font-bold">{productName}</p>
                    <p className="text-zinc-800 font-bold">${price}</p>
                    <div className="line-clamp-4 mt-4">
                      <p className="text-md font-bold">
                        {shortDescription.map((x) => x.children[0].text)}
                      </p>
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



const shopQuery = `*[_type == "product"]{
  brandName, 
  _id,
  slug,
  images,
  "mainImage":mainImage.asset->url, 
  "mainImage2":mainImage2.asset->url,
  price, 
  productName,
  shortDescription,
  productDescription
}`

export async function getStaticProps() {
  const shop = await sanityClient.fetch(shopQuery)

  return {  
    props: {
      shop
    }
  }
}