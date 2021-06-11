import clsx from "clsx";
import React, { useState } from "react";
import styles from './dropdownSide.module.scss'

const DropdownSide = () => {
  const [sideShow, setSideShow] = useState(false);

  return (
    <>
      <div className="d-flex">
        <div className="d-none d-md-block">
          <div className={clsx(styles.burgerMenu, "flex-column align-items-end justify-content-center")} onClick={() => setSideShow(sideShow ? false : true)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={clsx(styles.dropdownSide, sideShow ? styles.dropdownSize : null)}>
          <div className="mx-2">&#9656;</div>
          <div>
            <ul className="p-0">
              <a href="/">
                <li className="pt-0"><p>HOME</p></li>
              </a>
              <a href="/shop">
                <li><p>SHOP</p></li>
              </a>
              <a href="/about">
                <li><p>ABOUT</p></li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default DropdownSide
