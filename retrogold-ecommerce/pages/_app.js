import '@/styles/globals.css'
import AppContext from '@/ Context/context'
import {useRouter} from 'next/router'
import {useState, useEffect, StrictMode} from 'react'
import { Provider } from 'react-redux'
import store, { persistor } from '../store'
import Loading from '@/components/Loader/Loading'
import AuthenticationCheck from '../ Context/AuthenticationCheck'
import { PersistGate } from 'redux-persist/integration/react'


export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log('route change complete')
      setLoading(true)
    }

    const handleRouteChangeComplete = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router.events])

  return (
    <>      
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppContext>
            <AuthenticationCheck>
              <Component {...pageProps} />
            </AuthenticationCheck>
          </AppContext>
        </PersistGate>
      
      </Provider>
    </>
  ) 
}
