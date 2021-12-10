import Head from 'next/head'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Home = ({ properties }): JSX.Element => {
  const router = useRouter()

  console.log('router', router)

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <ul>
        {router?.locales?.length > 0 &&
          router?.locales?.map((x) => {
            return (
              <li key={x}>
                <Link href={router.asPath} locale={x}>
                  <a>{x}</a>
                </Link>
              </li>
            )
          })}
      </ul>

      <ul>
        {properties?.map((x, i) => {
          return <li key={i}>{x?.title}</li>
        })}
      </ul>
    </div>
  )
}

export default Home

export async function getServerSideProps({ locales, locale }) {
  console.log(locale, locales)

  const data: any = await fs.promises.readFile(
    path.join(process.cwd(), `/__snapshot__/${locale}.json`),
    'utf8'
  )

  console.log('Data', data)

  return {
    props: {
      properties: JSON.parse(data)?.properties,
    },
  }
}
