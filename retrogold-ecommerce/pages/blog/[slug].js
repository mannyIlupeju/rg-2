import Head from 'next/head'
import Navigation from '@/components/Shared/Navigation'
import { sanityClient, urlFor} from '@/lib/dist/sanity.dev'
import PortableTextComponent from '@/components/Shared/PortableTextComponent'
import Footer from '@/components/Shared/Footer/footer'
import Breadcrumb from '/components/Shared/Breadcrumbs'





const blogImage = {
  width: '580px',
  height: '100px',
}

const blogPost = ({data}) => {
  const{blogDetail} = data

 


  return (
    <>
    <Head>
        <title>Retrogold Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navigation/>
    <Breadcrumb item={blogDetail}/>
    <main>
      <div className="text-zinc-100 md:px-60 bg-white pb-36 pt-12">
        <div className="text-zinc-700 mb-12">
        <h1 className="text-4xl font-semibold mb-2">{blogDetail.title}</h1>
        <span className="text-sm">Written by: {blogDetail.author.name}</span>
        </div>

        <div>
        <div className="float-left mx-8 mb-4">
        <figure className="mt-3" >
          <img src= {urlFor(blogDetail.main_image.asset._ref)} alt=" " className="image-Style"/>
        </figure>
        </div>

        <div>
        <article className="text-zinc-700 mt-4 leading-loose flex flex-col">
          <PortableTextComponent detail={blogDetail} />
        </article>
        </div>

        </div>
        <div>
          
        </div>

      </div>
    </main>
    <Footer/>
    </>
  )

}

export default blogPost

const paramQuery = `*[_type == "blog" && defined(slug.current)]{
  "params": {
    "slug": slug.current
  }
}`

const blogDetailQuery = `*[_type == 'blog' && slug.current == $slug][0] {
    title,
    main_image,
    tag, 
    author->, 
    description[],
    post,
    slug,
    _createdAt,
}`


export async function getStaticPaths() {
  const paths = await sanityClient.fetch(paramQuery)

   return {
    paths,
    fallback: false,
  }
 
}


export async function getStaticProps({params}) {
  const {slug} = params
  const blogDetail = await sanityClient.fetch(blogDetailQuery, {slug})


  return {
    props: {
      data: {blogDetail}
    }
  }
}