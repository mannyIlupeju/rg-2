import React from 'react';
// import PortableText from 'react-portable-text'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import {getImageDimensions} from '@sanity/asset-utils'
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
    <img src= {urlFor(value).image(value).width(500).url()}
      alt=" "
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
    h1: ({children}) => <h1 className="text-4xl mb-8">{children}</h1>,
  

    // Ex. 2: rendering custom styles
    h3: ({children}) => (
      <h3 className="text-3xl text-primary text-zinc-700 text-center">{children}</h3>
    ),
    h2: ({children}) => (
      <h2 className="text-xl text-primary my-8 text-zinc-700">{children}</h2>
    ),
    p: ({children}) => {
      <p className="text-xl font-extrabold text-zinc-700">{children}</p>
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
  console.log(props)
  
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