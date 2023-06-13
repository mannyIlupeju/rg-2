import Head from 'next/head'
import { sanityClient } from '/lib/sanity'
import Hero from '@/components/Landing/Hero/Hero'
import Landing from '/components/Landing/Landing'
import Quotes from '/components/Quotes/Quotes'
import Experience from '/components/Experience/experience'
import Blog from '/components/Blog/blog'
import Footer from '@/components/Shared/Footer/footer'
import Navigation from '@/components/Shared/Navigation'
import Calltoaction from '@/components/CallToAction/calltoaction'
import { useGlobalContext } from '@/ Context/context'
import RespMenu from '@/components/responsiveMenu/RespMenu'
import Cart from '@/components/Cart'



export default function Home({hero, quote, blog, calltoAction}) {
    const {isOpenMenu} = useGlobalContext()
    
  return (
    <>
      <Head>
        <title>Retrogold</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen">
          <Navigation/>
          <Landing hero={hero}/>  
          <Quotes quote={quote}/>
          <Experience/>
          <Blog blog={blog}/> 
          <Calltoaction calltoAction={calltoAction}/>
          {isOpenMenu ? <RespMenu/> : ''}
          
      </main>
      <Footer/> 
    </>
  )
}

//fetch the data using GROQ query
const blogQuery = `*[_type == "blog"]{
  description, main_image, tag, slug
}`
const heroQuery = `*[_type == 'hero']`
const quoteQuery = `*[_type == 'quote']`
const calltoActionQuery = `*[_type ==  'callToAction']`


// getStaticProps works when rendering from a headless CMS
export async function getStaticProps() {
  const blog = await sanityClient.fetch(blogQuery)
  const hero = await sanityClient.fetch(heroQuery)
  const quote = await sanityClient.fetch(quoteQuery)
  const calltoAction = await sanityClient.fetch(calltoActionQuery)

  return {
    props: {
      hero,
      quote,
      blog,
      calltoAction,
    }
  }
}