import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'
import Image from 'next/image'
import Cookies from 'js-cookie'
import Navigation from '@/components/Shared/Navigation/Navigation'
import Footer from '@/components/Shared/Footer/Footer'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import Accordion from '@/components/Shared/Accordion'
import Relatedproducts from '@/components/Shared/RelatedProducts';
import { useGlobalContext } from '../../ Context/context';
import Breadcrumb from '/components/Shared/Breadcrumbs'
import RespMenu from '@/components/responsiveMenu/RespMenu'
import WelcomeDrop from '@/components/Dropdown/WelcomeDrop'
import ProfileDrop from '@/components/Dropdown/ProfileDrop'
import Login from '@/components/Authorization/Login'
import Register from '@/components/Authorization/Register'
import { FaMinus, FaPlus } from 'react-icons/fa';
import Cart from '@/components/Cart';
import { addToCart } from '../../store'
import client from '../../util/shopify/shopifyClient'







const ProductDetails = ({ product, allProducts }) => {
  const { images, descriptionHtml, handle, priceRange, title, vendor, variants } = product
  const id = variants.edges[0].node.id;
  const quantityAvailable = variants.edges[0].node.quantityAvailable;
  const productImage = images.edges[0].node.originalSrc;
  const availableForSale = variants.edges[0].node.availableForSale;
  const price = priceRange.minVariantPrice.amount;



  const [quantity, setQuantity] = useState(1)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [inStockMessage, setInStockMessage] = useState(false)
  const dispatch = useDispatch()



  const {
    isOpenMenu,
    isItemChosen,
    openCartModal,
    setShopifyCartID,
    isSignIn,
    isUserRegistered,
    isHovered,
    isDropdownHovered,
    isProfileHovered,
    isProfileDropdownHovered

  } = useGlobalContext()





  // //Carousel Functions 
  const carouselContainer = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  };

  const prevImage = () => {
    let firstSlide = currentIndex === 0
    const newSlides = firstSlide ? images.edges.length - 1 : currentIndex - 1
    setCurrentIndex(newSlides)
  }
  const nextImage = () => {
    let lastSlide = currentIndex === images.edges.length - 1
    const newSlide = lastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newSlide)
  }


  // //Left arrow styling
  const leftArrow = {
    color: '#D5BDAF',
    transform: 'translate(0, -50%)',
    position: 'absolute',
    left: '8px',
    top: '50%',
    cursor: 'pointer',
  }

  // //Right arrow styling
  const rightArrow = {
    color: '#D5BDAF',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    top: '50%',
    right: '0',
    cursor: 'pointer',
  }

  const selectImage = (index) => {
    setCurrentIndex(index)
  }


  // //Increase and Decrease Amount funcitonality
  //add condition when quantityAvailable is less than 5
  const increaseAmt = () => {
    if (quantityAvailable > quantity && availableForSale) {
      setQuantity((prev) => prev + 1)
    } else {
      setInStockMessage(true)
      setTimeout(() => {
        setInStockMessage(false)
      }, 3000);
    }
  }

  const decreaseAmt = () => {
    if (quantity === 1) {
      setQuantity((prev) => prev)
    }
    else {
      setQuantity((prev) => prev - 1)
    }
  }




  //Submit function 
  async function onAdd(title, vendor, price, quantity, id, variants, productImage) {

    const productAdded = {
      title,
      vendor,
      price,
      quantity,
      id,
      variants,
      productImage
    }
    console.log(productAdded);


    try {
      let shopifyCartId = Cookies.get('cartId');

      if (!shopifyCartId) {
        const response = await fetch('/api/shopifyCart/createCart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(productAdded)
        });

        if (!response.ok) {
          throw new Error('Failed to add product to cart')
        }

        if (response.ok) {
          const cartData = await response.json();
          shopifyCartId = cartData.data.cartCreate.cart.id;

          Cookies.set('cartId', shopifyCartId, { expires: 7 });
        }

      }

      // Prepare line items for each variant
      const lineItems = variants.edges.map(edge => ({
        merchandiseId: edge.node.id,
        quantity: productAdded.quantity // Assuming each variant node has a quantity field
      }));



      await addItemToCart(shopifyCartId, lineItems);



      openCartModal();
      setQuantity(1);

    } catch (error) {
      console.error('Error creating to cart:', error);
      return null;
    }

    async function addItemToCart(cartId, lineItems) {

      if (cartId && lineItems.length > 0) {
        try {
          const response = await fetch('/api/shopifyCart/addItemToCart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cartId, lineItems })
          });

          if (!response.ok) {
            throw new Error('Failed to add item to cart');
          }

          const { data: { cartLinesAdd: { cart, userErrors } } } = await response.json();
          console.log(cart.lines.edges[0].node.id);
          setShopifyCartID(cart.id)

          dispatch(addToCart({
            title,
            vendor,
            price,
            quantity,
            id: cart.lines.edges[0].node.id,
            productImage,
          }));


          return cart, userErrors;

        } catch (error) {
          console.error('Error adding to cart:', error);
          throw error;
        }
      }

    }
  }



  function stripHtml(htmlString) {
    return htmlString.replace(/<[^>]*>/g, '');
  }

  const desc = stripHtml(descriptionHtml)

  const shouldShowDropdown = isHovered || isDropdownHovered
  const shouldProfileShowDropdown = isProfileHovered | isProfileDropdownHovered



  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      {isOpenMenu ? <RespMenu /> : ''}
      {isItemChosen && <Cart />}
      <Navigation />

      <Breadcrumb />

      {!!isOpenMenu && <RespMenu />}
      {!!isSignIn && <Login />}
      {!!isUserRegistered && <Register />}
      {!!shouldShowDropdown && <WelcomeDrop />}
      {!!shouldProfileShowDropdown && <ProfileDrop />}


      <main>
        <div className="bg-white productDetailFonts">
          <div className=" container mx-auto w-fit grid grid-cols-1 md:grid-cols-2 md:gap-16 justify-center py-16 px-16">
            <div className="flex flex-col justify-end md:gap-10 gap-4 overflow-hidden w-fit">

              <div>
                <div className="relative w-fit">
                  <Image
                    src={images.edges[currentIndex].node.originalSrc}
                    width="250"
                    height="200"
                    alt="main product image of the pot"
                    className="mainProductImage"
                    loading='lazy'
                    unoptimized
                  />
                  <div className="bottom-44 cursor-pointer">
                    <FaChevronLeft size="1.3rem" onClick={prevImage} style={leftArrow} />
                    <FaChevronRight size="1.3rem" onClick={nextImage} style={rightArrow} />
                  </div>
                </div>
              </div>


              <div>
                <div className="flex md:flex-row flex-wrap items-center gap-4 col-start-1">
                  {images.edges.map((image, index) => {
                    return (
                      <div className="flex" key={index}>
                        <div className={`sideProductImage ${currentIndex === index ? 'active' : ''}`} onClick={() => selectImage(index)} key={index}>
                          <Image
                            src={image.node.originalSrc}
                            alt="product image"
                            className="sideProductImage"
                            width={400}
                            height={200}
                            unoptimized
                            loading='lazy'
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>


            </div>


            <div className="container text-zinc-700 h-fit mt-4">
              <p className="font-bold text-sm">{vendor}</p>
              <h1 className="font-semibold text-xl productName">{title}</h1>
              <p className="font-bold">CDN ${price}</p>

              <div className="border-t-2 border-gray-300 w-fit">
                <div className="mt-4">
                  <p className="text-sm font-bold">Select Option</p>

                  <div className="flex gap-5 w-fit  px-1 mt-2">
                    <FaMinus className="flex self-center" onClick={decreaseAmt} />
                    <span className="font-bold text-lg">{quantity}</span>
                    <FaPlus className="flex self-center" onClick={increaseAmt} />
                  </div>
                  <div>{inStockMessage && <span>Item is not in stock</span>}</div>


                  <div className="mt-8">
                    <button className="bg-black px-20 py-2 text-sm uppercase text-white" onClick={() => onAdd(title, vendor, price, quantity, id, variants, productImage)}>Add to Cart</button>
                  </div>

                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 text-sm w-96">
                <Accordion title="Product Description" content={desc} id="productDesc" />

              </div>
            </div>



          </div>

          <div className="flex justify-center">
            <Relatedproducts currentProduct={product} allProducts={allProducts} />
          </div>


        </div>
      </main>
      <Footer />
    </>
  );

}
export default ProductDetails;






const paramQuery = `
query {
  products(first:10) {
    edges{
      node{
        handle
      }
    }
  }
}
`;

const productQuery = `
query getProductByHandle($handle: String!) {
  productByHandle(handle: $handle) {
    id
    title
    handle
    vendor
    descriptionHtml
    images(first: 5) {
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
    variants(first: 10) {
      edges {
        node {
          id
          title
          sku
          priceV2 {
            amount
            currencyCode
          }
          availableForSale
          quantityAvailable
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
}
`;

const allProductsQuery = `
  query {
     products(first: 10) {
    edges {
      node {
        id
        title
        handle
        vendor
        images(first: 5) {
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
        variants(first: 10) {
          edges {
            node {
              id
              title
              sku
              priceV2 {
                amount
                currencyCode
              }
              availableForSale
              quantityAvailable
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
  }
  }`;


export async function getStaticPaths() {
  const response = await client.request(paramQuery)
  const paths = response.data.products.edges.map(edge => ({
    params: { slug: edge.node.handle },
  }));

  return {
    paths,
    fallback: false,
  };
}



export async function getStaticProps({ params }) {
  const { slug } = params;

  const allProductsResponse = await client.request(allProductsQuery);
  const allProducts = allProductsResponse.data.products.edges.map(edge => edge.node);



  try {
    const response = await client.request(productQuery, { variables: { handle: slug } });
    if (response.data.productByHandle) {
      return {
        props: {
          product: response.data.productByHandle,
          allProducts
        },
        revalidate: 60 // or as needed
      };
    }
    return { notFound: true };
  } catch (error) {
    console.error('Error fetching product:', error);
    return { notFound: true };
  }
}
