import React from 'react'
import Product from '../components/Product'

const sampleProduct = {
  title: 'LAMY safari all black ncode xxx',
  purpose: [
    {
      name: 'digital pen',
      slug: 'digital-pen',
    },
  ],
  colors: [
    {
      name: 'czarny',
      slug: 'czarny',
    },
  ],
  product_cat: ['pisanie-digitalowe', 'dlugopisy-multisystem'],
  price: 665,
  sale_price: 0,
  slug: 'smartpen-lamy-safari-all-black-ncode',
  thumb:
    'https://lamyonline.pl/app/uploads/2021/10/lamy_safari_x_neolab_shop_d.png',
  variations: [],
  specials: ['Nowość'],
}

export const Home = (): JSX.Element => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          {/* Sample product */}
          <Product product={sampleProduct} />
        </div>
      </div>
    </div>
  )
}

export default Home
