import React from 'react';
import { urlFor} from '/lib/sanity';
import Link from 'next/link'
import { useGlobalContext } from '@/ Context/context';


const Blog = ({blog}) => {
  
  
  const mainImageBlog = {
    width: '520px',
    height: 'auto',
    borderRadius: '0.5rem'
  }



  const smallImageBlog = {
    width: '340px',
    height: '250px',
    borderRadius: '0.5rem',
    objectFit: 'cover'
  }


 
  return (
  
    
    <div className="container mx-auto text-zinc-100 h-fit mt-32 xl:px-28 md:px-2 p-12">
      <div className="flex justify-start items-center ">
        <div className="text-zinc-800">
          <h1 className="text-5xl">Latest Stories</h1>
          <p className="text-medium mt-4">Uplifting, motivating stories about the world today</p>
        </div>
      </div>
      

      <div className="grid grid-cols-3 mt-12">
        <div className="col-span-3">          
            <div className="flex md:flex-row flex-col bg-red-400 p-4 items-start rounded-xl">
              <div className="mx-auto">
                <div className="bg-red-500 w-fit px-2 mb-4 rounded-lg">
                  <span>{blog[0].tag}</span>
                </div>
                <img src={urlFor(blog[0].main_image.asset._ref)} style={mainImageBlog}/>
              </div>

              <div>
                <div className="text-xl font-light flex flex-col items-start lg:p-8 p-3 lg:p-12" >
                  <div>
                  {blog[0].description[0].children[0].text}
                  </div>
                  <div className="lg:mt-24 flex justify-center mt-10 text-zinc-700">
                  <Link href={`/blog/${blog[0].slug.current}`} className="font-light text-sm bg-red-200 p-2 rounded-lg">Read more</Link>
                  </div>
                </div>  
              </div>
            </div>
        </div> 
      </div>
      
      <div className="flex flex-col items-center md:flex-row gap-6 mt-8">
         <div className="w-fit md:w-2/6 bg-orange-200 rounded-lg py-4">
            <div className="ml-2 mb-4 bg-red-500 w-fit px-2 rounded-lg">
              <span className="text-sm">{blog[1].tag}</span>
            </div>
           <div className="flex justify-center">
           <img src={urlFor(blog[1].main_image.asset._ref)} className="smallImageBlog"/>
           </div>
            <div className="text-sm font-light flex items-start mt-4 lg:px-2 md:px-4 px-8 text-zinc-700">
              {blog[1].description[0].children[0].text}
            </div>

             <div className="flex justify-center mt-10 text-zinc-700">
              <Link href={`/blog/${blog[1].slug.current}`} className="font-light text-sm bg-red-200 p-2 rounded-lg">Read more</Link>
            </div>
         </div>
        
        
         
          <div className="w-fit md:w-2/6 bg-green-200 rounded-lg py-4">
              <div className="ml-2 mb-4 bg-red-500 w-fit px-2 rounded-lg">
                <span className="text-sm">{blog[2].tag}</span>
              </div>
              <div className="flex justify-center">
                <img src={urlFor(blog[2].main_image.asset._ref)} className="smallImageBlog"/>
              </div>
              <div className="text-sm font-light flex justify-center items-start mt-4 lg:px-2 md:px-4 px-8 text-zinc-700">
                {blog[2].description[0].children[0].text}
              </div>

              <div className="flex justify-center mt-16 text-zinc-700">
                <Link href={`/blog/${blog[2].slug.current}`} className="font-light text-sm bg-red-200 p-2 rounded-lg">Read more</Link>
              </div>
          </div>

          <div className="w-fit md:w-2/6 bg-pink-200 rounded-lg py-4">
              <div className="ml-2 mb-4 bg-red-500 w-fit px-2 rounded-lg">
                <span className="text-sm">{blog[3].tag}</span>
              </div>
              <div className="flex justify-center">
                <img src={urlFor(blog[3].main_image.asset._ref)} className="smallImageBlog"/>
              </div>
              <div className="text-sm font-light flex justify-center items-start mt-4 lg:px-2 md:px-4 px-8 text-zinc-700">
                {blog[3].description[0].children[0].text}
              </div>

              <div className="flex justify-center mt-16 text-zinc-700">
                <Link href={`/blog/${blog[3].slug.current}`} className="font-light text-sm bg-red-300 p-2 rounded-lg">Read more</Link>
              </div>
          </div>
      

         
          
         
      </div>

      <div className="cursor-pointer flex justify-center mt-12">
      <Link href='/blog' className=" bg-black p-3 rounded-2xl">View more Stories</Link>
      </div>

      
    </div>
 
  );
}

export default Blog;


