import React, { useState } from 'react'
import CartCounter from './CartCouter';
import DropdownList from './DropdownList'
import DropdownSide from './DropdownSide';
import Footer from './Footer';
import Header from './Header'

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  const [cartShow, setCartShow] = useState(false)

  return (
    <>
      <div className="container">
        <Header show={show} setShow={setShow} cartShow={cartShow} setCartShow={setCartShow} onClick={() => setCartShow(cartShow ? false : true)} />
        <div className="d-md-flex d-none justify-content-between">
          <DropdownSide />
          <CartCounter cartShow={cartShow} setCartShow={setCartShow} onClick={() => setCartShow(cartShow ? false : true)} />
        </div>
        <DropdownList show={show} />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
