import '@/styles/globals.css'
import AppContext from '../ Context/context'
import {useRouter} from 'next/router'
import {useState, useEffect, StrictMode} from 'react'
import { Provider } from 'react-redux'
import store, { persistor } from '../store'
import Loading from '@/components/Loader/Loading'
import AuthenticationCheck from '../ Context/AuthenticationCheck'
import { PersistGate } from 'redux-persist/integration/react'


export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Simplify the event handlers to just toggle the loading state
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    // Listen for route changes to start and complete, to toggle loading state
    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end); // Also consider route change errors

    // Clean up event listeners on component unmount
    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
    };
  }, [router.events]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContext>
          <AuthenticationCheck>
            {/* Conditionally render the Loading component based on the loading state */}
            {loading && <Loading />}
            <Component {...pageProps} />
          </AuthenticationCheck>
        </AppContext>
      </PersistGate>
    </Provider>
  );
}
