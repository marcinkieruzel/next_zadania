import React from 'react'
import { Product } from '../interfaces/Product'

type Props = {
  product: Product
}

const Prod: React.FC<Props> = ({ product }): JSX.Element => {
  return (
    <div className="card">
      <img src={product.thumb} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p>{product.price}</p>
        <a href="#" className="btn btn-primary">
          Kup
        </a>
      </div>
    </div>
  )
}

export default Prod
