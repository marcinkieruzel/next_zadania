// import App from "next/app";
import type { AppProps, AppContext } from 'next/app'
import { createContext, useContext, useState } from 'react'
import Layout from '../components/Layout'
import App from 'next/app'

export const ShopContext = createContext<{
  card: any[]
  setCard: any
}>({
  card: [],
  setCard: () => [],
})

function MyApp({ Component, pageProps }: AppProps) {
  const context = useContext(ShopContext)
  const [card, setCard] = useState([])

  return (
    <ShopContext.Provider value={{ card, setCard }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShopContext.Provider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps, hello: "hello" }
}

export default MyApp
