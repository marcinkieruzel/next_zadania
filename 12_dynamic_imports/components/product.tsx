import React from 'react'

type Props = {
  prod: any
}

const Product: React.FC<Props> = ({ prod }): JSX.Element => {
  return (
    <article>
      <h2>{prod?.title}</h2>
    </article>
  )
}

export default Product
