import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { sanityClient } from '/lib/sanity'
import Navigation from '@/components/Shared/Navigation'
import { urlFor } from '@/lib/sanity';
import Footer from '@/components/Shared/Footer/footer'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import Accordion from '@/components/Shared/Accordion'
import Relatedproducts from '@/components/Shared/RelatedProducts';
import { useGlobalContext } from '@/ Context/context';
import Breadcrumb from '/components/Shared/Breadcrumbs'
import RespMenu from '@/components/responsiveMenu/RespMenu'
import { FaMinus, FaPlus } from 'react-icons/fa';
import Cart from '@/components/Cart';








const productDetails = ({data}) => {

  const {productDetail} = data


  const {allProduct} = data
  
  
  const [quantity, setQuantity] = useState(1)
  const {isOpenMenu, totalQuantity, setTotalQuantities, totalPrice, setTotalPrice, setCartItems, cartItems, isItemChosen, openCartModal} = useGlobalContext()
  const [imageId, setImageId] = useState(null)
  const [stock, setStock] = useState(null)
  //this currentIndex is specifically for this component. 
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fetchInventory, setFetchInventory] = useState(null)
  

 
  console.log(fetchInventory)




  //product Detail destructure
  const desc = productDetail.productDescription.map((x)=> x.children[0].text)
 
  //shipping Info destructure
  const shipping = productDetail.shippingReturns[0].children
  const shippingInfo = shipping.map((x)=>{
    return (x.text)
  })

  // const {images} = productDetail
  const {imageUrls} = productDetail
  


  //Carousel Functions 
  const prevImage = () => { 
    let firstSlide = currentIndex === 0
    const newSlides = firstSlide ? imageUrls.length-1 : currentIndex - 1
    setCurrentIndex(newSlides)
  }
  const nextImage = () => {
    let lastSlide = currentIndex === imageUrls.length - 1
    const newSlide = lastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newSlide)
  }


  //Left arrow styling
  const leftArrow = {
    color: '#D5BDAF',
    transform: 'translate(0, -50%)',
    position: 'absolute',
    left: '8px',
    top:'50%',
    cursor: 'pointer',
  }

  //Right arrow styling
  const rightArrow = {
    color: '#D5BDAF',
    transform: 'translate(0, -50%)',
    position: 'absolute',
    top:'50%',
    right: '8px',
    cursor: 'pointer',
  }

  const selectImage = (index) => {
    setCurrentIndex(index)
  }

  
    //Increase and Decrease Amount funcitonality
  const increaseAmt = () => {
    setQuantity((prev)=> prev + 1)
  }

  const decreaseAmt = () => {
    if(quantity === 1){
      setQuantity((prev)=> prev)
    }
    else {
      setQuantity((prev)=> prev - 1)
    }
  }


  

  const apiUrl = `https://foypmm2m.api.sanity.io/v2021-03-25/data/query/production?query=*%5B_type%20%3D%3D%20'product'%5D%7B%0A%20%20inventory%2C%20_id%0A%7D`

  useEffect(()=> {
    const onAddToCart = async() => {
      try{
        const response = await fetch(apiUrl)
        const data = await response.json()
        setFetchInventory(data.result)
      } catch(error){
        console.log('Error fetching data', error)
      } 
    }
    onAddToCart()
  },[])



  const onAdd = async(product, quantity) => {
    //checking if item is already in cart, and if it is add an additional item, if it is not just add the item for the first time
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    const selectedInventory = fetchInventory.find((item) => item._id === product._id);

    if(selectedInventory) {
      const updatedInventory = fetchInventory.map((item)=>{
        const{stockQuantity} = item.inventory
        if(item._id === product._id){
          return { ...item, stockQuantity:stockQuantity - quantity }
        }
        return item;
      })
      setFetchInventory(updatedInventory)
      
      
      try {
        await fetch(apiUrl, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_SANITY_TOKEN}`
          },
          body: JSON.stringify(updatedInventory),
        })
        setFetchInventory(updatedInventory);
        
        
        if(checkProductInCart) {
          const updatedCartItems = cartItems.map((cartProduct) => {
            if(cartProduct.id === product.id) return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity,
              
            }
          })
          setCartItems(updatedCartItems);
        } else {
          const updatedProduct = {...product, quantity: quantity}
          setCartItems([...cartItems, updatedProduct]);
        }
      } catch(error) {
        console.log('Error updating inventory', error)
      }
      
    }
      setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    /////////////////////////////////////////////////////////////////////////////////

    openCartModal()
  } 

  return (
    <>
      <Head>
        <title>{productDetail.productName}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
       {isOpenMenu ? <RespMenu/> : ''}
      <Navigation/>
      
      <Breadcrumb/>

      
      {isItemChosen ? <Cart/> : '' }
      

      <main>
        <div className="bg-white productDetailFonts">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-16 justify-center py-16 px-16">
            <div className="flex flex-col flex-col-reverse md:flex-row justify-center md:gap-14 overflow-hidden">
              <div>
                <div className="flex md:flex-col flex-wrap items-center gap-4 col-start-1">
                    {imageUrls.map((x, index)=>{
                    return (
                      <div className="flex" key={index}>
                        <div className={`sideProductImage ${currentIndex === index ? 'active' : ''}`} onClick={()=> selectImage(index)} key={index}>
                          <Image src={x} alt={productDetail.productName} className="sideProductImage" width="200" height="200"/>
                        </div>
                      </div>
                      )
                    })}          
                  </div>
                  </div>
                <div>
                  
             
                {/* main image that has carousel function */}
                <div className="">
                   <Image src={imageUrls[currentIndex]} width="200" height="200" alt=" " className="mainProductImage" priority/>
                  <div className="flex justify-between p-2 relative bottom-44 cursor-pointer">
                    <FaChevronLeft size="1.3rem" onClick={prevImage} style={leftArrow} />
                    <FaChevronRight size="1.3rem" onClick={nextImage} style={rightArrow}/>
                  </div>
                </div> 
              </div>
            </div>

            
            <div className="container text-zinc-700 h-fit mt-4">
              <p className="font-bold text-sm">{productDetail.brandName}</p>
              <h1 className="font-semibold text-xl productName">{productDetail.productName}</h1>
              <p className="font-bold">CDN ${productDetail.price}</p>

              <div className="border-t-2 border-gray-300 w-fit">
                <div className="mt-4">
                  <p className="text-sm font-bold">Select Option</p>
                  
                  <div className="flex gap-5 w-fit  px-1 mt-2">
                      <FaMinus className="flex self-center" onClick={decreaseAmt}/>
                      <span className="font-bold text-lg">{quantity}</span>
                      <FaPlus className="flex self-center" onClick={increaseAmt}/>
                  </div>

                 
                  <div className="mt-8">
                    <button className="bg-black px-20 py-2 text-sm uppercase text-white" onClick={()=> onAdd(productDetail, quantity)}>Add to Cart</button>
                  </div>
                  
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 text-sm">
                <Accordion title="Product Description" content={desc} id="productDesc"/>
                <Accordion title="Shipping & Returns" content={shippingInfo} id="shippingInfo"/>
              </div>
            </div>



          </div>

          <Relatedproducts data={data}/>
          
        </div>
      </main>
      <Footer/>
    </>
  );
}


export default productDetails






const paramQuery = `*[_type == "product" && defined(slug.current)]{
  "params": {
    "slug": slug.current
  }
}`


export async function getStaticPaths() {
 const paths = await sanityClient.fetch(paramQuery)

  return {
    paths,
    fallback: false,
  }
 
}


const productDetailQuery = `*[_type == 'product' && slug.current == $slug][0]{
  "imageUrls": images[].asset->url,
  brandName,
  mainImage,
  productDescription,
  shippingReturns,
  productName,
  price, 
  slug,
  _id,
}`

const allProductsQuery = `*[_type == 'product']{
  productName,
  mainImage,
  brandName,
  price,
  slug,
  _id,
  shortDescription
}`

export async function getStaticProps({ params }) {
 const {slug} = params;
 const productDetail = await sanityClient.fetch(productDetailQuery, {slug})

 const allProduct = await sanityClient.fetch(allProductsQuery)




 return {
   props: {
     data: {productDetail, allProduct}
   }
 }
}



