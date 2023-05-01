import PortableTextComponent from '@/components/PortableTextComponent';
import { sanityClient } from '@/lib/dist/sanity.dev';
import React from 'react';

const About = ({about}) => {
  console.log(about)
  return (
    <div className="h-screen">
      <h1>About page</h1>
      <PortableTextComponent detail={about}/>
    </div>
  );
}

export default About;



const aboutInfo = `*[_type == 'about']`

export async function getStaticProps() {
  const about = await sanityClient.fetch(aboutInfo)

  return {
    props: {
      about
    }
  }
}

