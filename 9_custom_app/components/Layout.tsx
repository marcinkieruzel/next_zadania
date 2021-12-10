import React, { useContext } from 'react'
import { ShopContext } from '../pages/_app'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }): JSX.Element => {
  const context = useContext(ShopContext)
  return (
    <>
      <div>
        Header, w koszyku{' '}
        {context?.card?.map((x) => x.price).reduce((x, y) => Number(x) + Number(y), [])}
      </div>
      {children}
    </>
  )
}

export default Layout
