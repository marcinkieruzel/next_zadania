import Head from 'next/head'
import Image from 'next/image'
import { Suspense, useEffect, useState } from 'react'
const data = require('../__snapshot__/products.json')

import dynamic from 'next/dynamic'

const DynamicProduct = dynamic(() => import('../components/product'), {
  // loading: () => <p>Loading ....</p>,
  // suspense: true,
})

export const Home = (): JSX.Element => {
  console.log(data)
  const [products, setProducts] = useState<any>([])

  useEffect(() => {
    ;(async () => {
      const d = await import('../__snapshot__/products.json')
      setProducts(d)
    })()
  }, [])

  return (
    <div className="container">
      {products?.products?.map((x, i) => {
        return (
          <li key={i}>
            <Suspense fallback={'loading'}>
              <DynamicProduct prod={x} />
            </Suspense>
          </li>
        )
      })}
    </div>
  )
}

export default Home
