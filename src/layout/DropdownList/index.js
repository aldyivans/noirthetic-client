import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './dropdownList.module.scss'

const routes = [
  {
    pathName: "HOME",
    url: "/"
  },
  {
    pathName: "SHOP",
    url: "/shop"
  },
  {
    pathName: "ABOUT",
    url: "/"
  }
]

const DropdownList = ({ show }) => {
  return (
    <div className={clsx(styles.dropdownList, show ? styles.dropdownHeight : null)}>
      <ul className={styles.dropdownGroup}>
        {routes.map((route, i) => (
          <Link to={route.url} key={i}>
            <li className="pt-0"><p>{route.pathName}</p></li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default DropdownList
