import Head from 'next/head';
import Image from 'next/image';
import Navigation from '@/components/Shared/Navigation/Navigation';
import { sanityClient } from '@/lib/sanity';
import PortableTextComponent from '@/components/Shared/PortableTextComponent';
import Footer from '@/components/Shared/Footer/Footer';
import Breadcrumb from '/components/Shared/Breadcrumbs';
import RespMenu from '@/components/responsiveMenu/RespMenu';
import { useGlobalContext } from '@/ Context/context';





const blogImage = {
  width: '580px',
  height: '100px',
}

const BlogPost = ({ data }) => {
  const { isOpenMenu } = useGlobalContext()
  const { blogDetail } = data
  console.log(blogDetail)

  return (
    <>
      <Head>
        <title>Retrogold Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isOpenMenu && <RespMenu />}
      <Navigation />
      <Breadcrumb item={blogDetail} />
      <main>
        <div className="text-zinc-100 md:px-60 bg-white pb-36 px-4 pt-12">
          <div className="text-zinc-700 mb-12">
            <h1 className="text-4xl font-semibold mb-2">{blogDetail.title}</h1>
            <span className="text-sm">Written by: {blogDetail.author.name}</span>
          </div>

          <div>
            <div className="flex flex-col md:float-left mx-8 mb-4">
              <figure className="mt-3" >
                <Image src={blogDetail.mainImage} alt={blogDetail.title} width="200" height="200" className="image-Style" loading='lazy' />
              </figure>
            </div>

            <div >
              <article className="text-zinc-700 mt-4 leading-loose flex flex-col">
                <PortableTextComponent detail={blogDetail} />
              </article>
            </div>

          </div>
          <div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  )

}

export default BlogPost

const paramQuery = `*[_type == "blog" && defined(slug.current)]{
  "params": {
    "slug": slug.current
  }
}`

const blogDetailQuery = `*[_type == 'blog' && slug.current == $slug][0] {
    title,
    "mainImage": main_image.asset->url,
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


export async function getStaticProps({ params }) {
  const { slug } = params
  const blogDetail = await sanityClient.fetch(blogDetailQuery, { slug })


  return {
    props: {
      data: { blogDetail }
    }
  }
}