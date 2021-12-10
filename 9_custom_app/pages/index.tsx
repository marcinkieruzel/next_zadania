import { useContext } from 'react'
import { ShopContext } from './_app'
import Link from 'next/link'

export const Home = ({ data }): JSX.Element => {
  const context = useContext(ShopContext)

  return (
    <div className="container">
      <a href={'/test'}>TEST</a>
      <br />
      <Link href="/test">
        <a>TEST with Link</a>
      </Link>
      <ul>
        {data?.map((x, i) => {
          return (
            <li key={i}>
              <div>{x.title}</div>
              <p>Price: {x.price}</p>
              <button
                onClick={() => {
                  context.setCard([
                    ...context.card,
                    { name: x.title, price: x.price },
                  ])
                }}
              >
                Kup
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const res = await fetch('http://localhost:4000/products')
  const json = await res.json()

  return {
    props: {
      data: json,
    },
    revalidate: 10,
  }
}
