import React from 'react';
import { urlFor } from '/lib/sanity';
import Link from 'next/link'

const Blog = ({blog}) => {
  console.log(blog[0].tag)

  const mainImageBlog = {
    width: '520px',
    height: 'auto',
    borderRadius: '0.5rem'
  }



  const smallImageBlog = {
    width: '340px',
    height: '250px',
    borderRadius: '0.5rem'
  }


 
  return (
    <div className="container mx-auto text-zinc-100 h-fit xl:px-60 md:px-2">
      <div className="flex justify-start items-center mt-32">
        <div>
          <h1 className="text-5xl">Latest Stories</h1>
          <p className="text-medium mt-4">Uplifting, motivating stories about the world today</p>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-12">
        <div className="col-span-3">

          
            <div className="flex md:flex-row flex-col bg-red-400 p-4 items-center rounded-xl">
              <div className="ml-4">
              <div className="bg-red-500 w-fit px-2 mb-4 rounded-lg">
                <span>{blog[0].tag}</span>
              </div>
                <img src={urlFor(blog[0].main_image.asset._ref)} style={mainImageBlog}/>
              </div>

              <div>
                <div className="text-xl font-light flex flex-col items-start p-12" >
                  <div>
                  {blog[0].description[0].children[0].text}
                  </div>
                  <div className="mt-24">
                  <p className="font-light">Read more</p>
                  </div>
                </div>  
              </div>
            </div>
         

        </div> 
      </div>
      
      <div className="flex flex-col items-center md:flex-row gap-6 mt-8">

        
         <div className="w-fit md:w-2/6 bg-orange-200 p-4 rounded-lg">
            <div className="mb-2  bg-red-500 w-fit px-2 mb-4 rounded-lg">
              <span className="text-sm">{blog[0].tag}</span>
            </div>
           <img src={urlFor(blog[1].main_image.asset._ref)} style={smallImageBlog}/>
            <div className="text-sm font-light flex items-start mt-4 px-2 text-zinc-700">
              {blog[1].description[0].children[0].text}
            </div>

             <div className="flex justify-center mt-10 text-zinc-700">
              <p className="font-light text-sm">Read more</p>
            </div>
         </div>
        
        
         
          <div className="w-fit md:w-2/6 bg-green-200 p-4  rounded-lg">
              <div className="mb-2 bg-red-500 w-fit px-2 rounded-lg">
                <span className="text-sm">{blog[0].tag}</span>
              </div>
            <img src={urlFor(blog[2].main_image.asset._ref)} style={smallImageBlog}/>
              <div className="text-sm font-light flex items-start mt-4 px-2 text-zinc-700">
                {blog[2].description[0].children[0].text}
              </div>

              <div className="flex justify-center mt-16 text-zinc-700">
                <button className="font-light text-sm">Read more</button>
              </div>
          </div>
      

         
          <div className="w-fit md:w-2/6 bg-pink-200 p-4  rounded-lg">
              <div className="mb-2 bg-red-500 w-fit px-2 rounded-lg">
                <span className="text-sm">{blog[0].tag}</span>
              </div>
            <img src={urlFor(blog[3].main_image.asset._ref)} style={smallImageBlog}/>
              <div className="text-sm font-light flex flex-col items-start mt-4 px-2 text-zinc-700">
                {blog[3].description[0].children[0].text}
              </div>

                <div className="flex justify-center mt-6 text-zinc-700">
                  <p className="font-light text-sm">Read more</p>
                </div>
          </div>
         
      </div>

      <div className="flex justify-center mt-12">
      <Link href='/blog'>View more Stories</Link>
      </div>

      
    </div>
  );
}

export default Blog;



