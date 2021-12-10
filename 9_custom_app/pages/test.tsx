import React, { useContext } from 'react'
import { ShopContext } from './_app'

type Props = {
  test: string
}

const test: React.FC<Props> = ({ test }): JSX.Element => {
  const context = useContext(ShopContext)
  return (
    <h1>
      {test}{' '}
      {context?.card
        ?.map((x) => x.price)
        .reduce((x, y) => Number(x) + Number(y), [])}
    </h1>
  )
}

export default test
export async function getServerSideProps() {
  return {
    props: {
      test: 'test',
    },
  }
}
