// import Head from 'next/head'
// import Navigation from '@/components/Shared/Navigation'
// import Footer from '@/components/Shared/Footer/footer'
// import { sanityClient } from '/lib/sanity'
// import PortableTextComponent from '@/components/Shared/PortableTextComponent'
// const Privacy = ({privacy}) => {
//   return (
//     <>
//       <Head>
//         <title>Privacy Policy</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Navigation/>
//       <main>
//         <div>
//           <PortableTextComponent/>
//         </div>
//       </main>
//       <Footer/>
//     </>
//   )
// }
// //fetch the data using GROQ query
// const privacyQuery = `*[_type == "privacy"]`
// export async function getStaticProps() {
//   const privacy = await sanityClient.fetch(privacyQuery)
//   return {
//     props: {
//       privacy
//     }
//   }
// }
// export default Privacy;
"use strict";
//# sourceMappingURL=index.dev.js.map