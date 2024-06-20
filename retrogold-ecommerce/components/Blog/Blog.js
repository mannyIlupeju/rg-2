import React from 'react';
import Image from 'next/image'
import Link from 'next/link'




const Blog = ({ blog }) => {
    const mainImageBlog = {
        width: '50rem',
        height: 'auto',
        borderRadius: '0.5rem'
    }



    const smallImageBlog = {
        width: '34rem',
        height: '25rem',
        borderRadius: '0.5rem',
        objectFit: 'cover'
    }



    return (
        <div className="mx-auto bg-white text-zinc-100 xl:px-28 md:px-2 px-5 pt-48">
            
            <div className="flex justify-start items-center ">
                <div className="text-zinc-800">
                    <h1 className="md:text-5xl text-4xl">Latest Blog Posts</h1>
                    <p className="text-medium">Uplifting, motivating stories about the world today</p>
                </div>
            </div>


            <div className="grid grid-cols-3 mt-12">
                <div className="col-span-3">
                    <div className="flex md:flex-row flex-col bg-red-400 p-4 items-start rounded-xl">
                        <div className="mx-auto">
                            <div className="bg-red-500 w-fit px-2 mb-4 rounded-lg">
                                <span>{blog[0].tag}</span>
                            </div>
                            <Image src={blog[0].mainImage} alt="Intro to candle magic" style={mainImageBlog} width={400} height={400} />
                        </div>

                        <div>
                            <div className="text-xl font-light flex flex-col items-start p-3 lg:p-12" >
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
                {['bg-orange-200', 'bg-green-200', 'bg-pink-200'].map((bgColor, i) => (
                    <div key={i} className={`w-full md:w-2/6 ${bgColor} rounded-lg py-4 flex flex-col`}>
                        <div className="mb-4 bg-red-500 w-fit self-start px-2 rounded-lg ml-4">
                            <span className="text-sm">{blog[i + 1].tag}</span>
                        </div>
                        <div className="flex-grow flex flex-col justify-center items-center">
                            <Image
                                src={blog[i + 1].mainImage}
                                alt='Intro to candle magic'
                                className="smallImageBlog w-full h-auto md:w-auto"
                                width={400}
                                height={400}
                                loading='lazy'
                            />
                            <div className="text-sm font-light mt-4 lg:px-2 md:px-4 px-8 text-zinc-700">
                                {blog[i + 1].description[0].children[0].text}
                            </div>
                        </div>
                        <div className="flex justify-center mt-4 text-zinc-700">
                            <Link href={`/blog/${blog[i + 1].slug.current}`} className="font-light text-sm bg-red-200 p-2 rounded-lg">Read more</Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cursor-pointer flex justify-center mt-12">
                <Link href='/blog' className="bg-black p-3 rounded-2xl">View more Stories</Link>
            </div>

            
        </div>

    );
}

export default Blog;

