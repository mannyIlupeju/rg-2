import '@/styles/globals.css'
import AppContext from '@/ Context/context'


export default function App({ Component, pageProps }) {
  return (
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  
  ) 
}
