import '@/styles/globals.css'
import AppContext from '@/ Context/context'
import Router from 'next/router'
import {useState} from 'react'
import Loading from '@/components/Loader/Loading'

export default function App({ Component, pageProps }) {
  const [isLoading, setLoading] = useState(false)

  setTimeout(()=>{
    Router.events.on('routeChangeStart', (url)=>{
      setLoading(true)
    }, 8000)
  })

  Router.events.on('routeChangeComplete', (url)=>{
    console.log('Route change is complete..')
    setLoading(false)
  })


  return (
    <>
    <AppContext>
    {isLoading && <Loading/>}
      <Component {...pageProps} />
    </AppContext>
    </>
  
  ) 
}
