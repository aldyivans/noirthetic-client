import clsx from "clsx";
import React from "react";
import { toAbsoluteUrl } from "../../utils/helpers/pathHelper";
import CartCounter from "../CartCouter";
import styles from './header.module.scss'

const Header = ({ show, setShow, setCartShow, cartShow, onClick }) => {
  return (
    <div className={clsx(styles.header, "row align-items-center justify-content-center py-4")}>
      <div className={clsx(styles.logo, "col-6 col-md-4 d-block d-md-none")}>
        <a href="/">
          <img src={toAbsoluteUrl("/assets/logos/noir-logo.png")} alt="" />
        </a>
      </div>
      <div className={clsx(styles.icon, "d-none d-md-block col-6 col-md-12")}>
        <a href="/">
          <img src={toAbsoluteUrl("/assets/logos/noir-logo.png")} className="w-100" alt="" />
        </a>
      </div>
      <div className="d-flex d-md-none col-6 col-md-4 justify-content-end">
        <CartCounter cartShow={cartShow} setCartShow={setCartShow} className="mr-24" onClick={onClick} />
        <div className={clsx(styles.burgerMenu, "d-flex d-md-none flex-column align-items-end justify-content-center")} onClick={() => setShow(show ? false : true)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Header
