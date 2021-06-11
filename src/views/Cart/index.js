import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([])

  const getCart = () => {
    const cartItems = localStorage.getItem("cart");
    if (cartItems) {
      setCart(JSON.parse(cartItems))
    }
  }

  useEffect(() => {
    getCart()
  }, [])

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((row, idx) => (
            <tr>
              <td>
                <div className="myCard" style={{ width: 100 }}>
                  <Link to={{ pathname: "/shop/detail", id: row._id }} >
                    <div className="cover">
                      <img src={row.cover} className="w-100" alt="" />
                    </div>
                  </Link>
                  <div className="my-2 title">
                    <Link to={{ pathname: "/shop/detail", id: row._id }} >
                      <p className="font-weight-bolder m-0">{row.productName}</p>
                    </Link>
                  </div>
                </div>
              </td>
              <td>{row.price}</td>
              <td>
                <input type="number" value={row.price} />
              </td>
              <td>Total</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  )
}

export default Cart
