import Head from 'next/head'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>TEST</div>
  </div>
)

export default Home

export async function getServerSideProps() {
  return {
    props: {
      data: '',
    },
  }
}
