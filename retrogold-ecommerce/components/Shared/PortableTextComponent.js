import React from 'react';
// import PortableText from 'react-portable-text'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import {getImageDimensions} from '@sanity/asset-utils'
import Image from 'next/image'
// import urlBuilder from '@sanity/image-url';






const builder = imageUrlBuilder({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2022-12-22',
  useCdn: false,
})


function urlFor(source) {
  return builder.image(source)
}







//Rendering the Image blocks
const SampleImageComponent = ({value, isInline}) => {
  const {width, height} = getImageDimensions(value)
  return (
    <div className="">
    <Image src= {urlFor(value).image(value).width(500).url()}
      alt="Founder of Retrogold, Bimbo Afolabi "
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
    </div>
  )
}

const components = {
  block: {
    // Ex. 1: customizing common block types
    p: ({children}) => <p className="text-4xl mb-8">{children}</p>,
  

    // Ex. 2: rendering custom styles
    p: ({children}) => (
      <p className="text-4xl text-zinc-700 text-center">{children}</p>
    ),
    p: ({children}) => (
      <p className="text-4xl my-8 text-zinc-700">{children}</p>
    ),
    p: ({children}) => {
      <p className="text-4xl font-extrabold text-zinc-700 leading-loose">{children}</p>
    }
  },

  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({children}) => <li style={{listStyle: 'inside'}}>{children}</li>,
  },

   types: {
    image: SampleImageComponent
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
}





const PortableTextComponent = (props) => {
  
  return (
    <>
    <PortableText 
    value={props.detail.post}
    components={components}     
    />

    </>


  )
    
}



export default PortableTextComponent;