import Head from 'next/head'
import PortableTextComponent from '@/components/Shared/PortableTextComponent';
import Navigation from '@/components/Shared/Navigation/Navigation'
import Footer from '@/components/Shared/Footer/Footer'
import { sanityClient } from '/lib/sanity'

const Privacy = ({ data }) => {
  const { privacy } = data
  const [privacyPolicy] = privacy


  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <main className="bg-white">
        <div className="container mx-auto p-12">
          <article className=" leading-loose text-lg w-fit items-center text-zinc-700">
            <PortableTextComponent detail={privacyPolicy} />
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}

//fetch the data using GROQ query
const privacyQuery = `*[_type == "privacy"]`

export async function getStaticProps() {
  const privacy = await sanityClient.fetch(privacyQuery)

  return {
    props: {
      data: { privacy }
    }
  }
}

export default Privacy;