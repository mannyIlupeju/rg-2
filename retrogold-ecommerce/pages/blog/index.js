import React from 'react';
import Navigation from '@/components/Shared/Navigation'
import { sanityClient } from '@/lib/dist/sanity.dev';
import Head from 'next/head'
import Image from 'next/image'
import Footer from '@/components/Shared/Footer/footer';
import Link from 'next/link'
import RespMenu from '@/components/responsiveMenu/RespMenu'
import Login from '@/components/Authorization/Login'
import Register from '@/components/Authorization/Register'
import { useGlobalContext } from '@/ Context/context'


const Blog = ({blog}) => {
 const {isOpenMenu, isSignIn, isUserRegistered} = useGlobalContext()
  const {mainImages, slugCurrent} = blog





  return (
    <>
    <Head>
        <title>Retrogold Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    {isOpenMenu && <RespMenu/>}

    <Navigation/>
    {isSignIn && <Login/>}
     {isUserRegistered && <Register/>}

    <main className="section-background">
      <div className="container mx-auto text-zinc-100 xl:px-28 px-8 py-14">
        <div className="text-zinc-700">
          <h1 className="text-5xl font-bold">Latest Blog Posts</h1>
          <p className="text-xl mt-2">Uplifting, motivating stories about Wellness and the Home </p>
        </div>
      
      
        <div className="grid grid-cols-3 ">
          <div className="col-span-3">
              <Link href={`/blog/${blog[0].slugCurrent}`}>
                <div className="flex md:flex-row flex-col justify-center bg-red-400 md:p-4 items-center rounded-xl cursor-pointer p-2">
                  <div className="md:ml-4 ">
                    <div className="bg-red-500 w-fit px-2 mb-4 rounded-lg">
                      <span>{blog[0].tag}</span>
                    </div>
                    <Image src={blog[0].mainImage} width="200" height="200" alt="blog-image" className="smallImageBlog" priority={true}/>
                  </div>

                  <div className="h-fit">
                    <div className=" items-start font-light flex flex-col md:gap-10 gap-20 items-start p-4" >
                      <div className="text-2xl">
                      {blog[0].description[0].children[0].text}
                      </div>

                      <div className="flex justify-center mt-10 cursor-pointer">
                        <span className="font-light text-sm bg-orange-400 rounded-lg px-2 py-1">Read more</span>
                      </div>
                    </div>  
                  </div>
                </div>
              </Link>
          </div> 
        </div>
      
       
        <div className="flex flex-col lg:flex-nowrap md:flex-wrap items-center lg:flex-row md:flex-col gap-6 mt-8">
          <div className="w-fit lg:w-2/6 bg-orange-200 rounded-lg cursor-pointer p-2">
            <Link href={`/blog/${blog[1].slugCurrent}`}>
              <div className="mb-2  bg-red-500 w-fit px-2 rounded-lg">
                <span className="text-sm">{blog[1].tag}</span>
              </div>
              <div className="flex justify-center">
                <Image src={blog[1].mainImage} width="200" height="200" alt="blog-image" className="smallImageBlog" priority={true}/>
              </div>
              <div className="text-md font-light flex items-start mt-4 px-2 text-zinc-700">
                {blog[1].description[0].children[0].text}
              </div>

              <div className="flex justify-center mt-10 text-zinc-700 cursor-pointer ">
                <span className="font-light text-sm bg-orange-400 rounded-lg px-2 py-1">Read more</span>
              </div>
            </Link>
          </div>
       
       

          <div className="w-fit lg:w-2/6 bg-green-200 rounded-lg cursor-pointer p-2">
            <Link href={`/blog/${blog[2].slugCurrent}`}>
                <div className="mb-2 bg-red-500 w-fit px-2 rounded-lg">
                  <span className="text-sm">{blog[2].tag}</span>
                </div>
              <div className="flex justify-center">
              <Image src={blog[2].mainImage} width="200" height="200" alt="blog-image" className="smallImageBlog" priority={true}/>
              </div>
                <div className="text-md font-light flex items-start mt-4 px-2 text-zinc-700">
                  {blog[2].description[0].children[0].text}
                </div>

                <div className="flex justify-center mt-16 text-zinc-700">
                  <span className="font-light text-sm bg-orange-400 rounded-lg px-2 py-1">Read more</span>
                </div>
            </Link>
          </div>


          <div className="w-fit lg:w-2/6 bg-pink-200 rounded-lg cursor-pointer p-2">
            <Link href={`/blog/${blog[3].slugCurrent}`}>
                <div className="mb-2 bg-red-500 w-fit px-2 rounded-lg">
                  <span className="text-sm">{blog[3].tag}</span>
                </div>
              <div className="flex justify-center">
              <Image src={blog[3].mainImage} width="200" height="200" alt="blog-image" className="smallImageBlog" priority={true}/>
              </div>
                <div className="text-md font-light flex items-start mt-4 px-2 text-zinc-700">
                  {blog[3].description[0].children[0].text}
                </div>

                <div className="flex justify-center mt-16 text-zinc-700">
                  <span className="font-light text-sm bg-orange-400 rounded-lg px-2 py-1">Read more</span>
                </div>
            </Link>
          </div>
        </div>
     
    </div>
    </main>
   <Footer/>
    </>
  );
}

export default Blog;





//fetch the data using GROQ query
const blogQuery = `*[_type == "blog"]{
  "mainImage": main_image.asset->url,
  "slugCurrent":slug.current,
  description,
  tag,
}`

export async function getStaticProps() {
  const blog = await sanityClient.fetch(blogQuery)

  return {
    props: {
      blog
    }
  }
}