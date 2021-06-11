import React, { useCallback, useEffect, useState } from "react";

const number = Intl.NumberFormat('id-ID', { minimumFractionDigits: 0 });
const detail = {
  _id: 3,
  cover: "https://wastedarchive.com/admin/uploads/shop/cover/DISPLAY._1.jpg",
  productCategory: "",
  productType: "PURCHASE",
  productName: "Tengkorak",
  productDesc: "Tengkorak merupakan salah satu tulang yang penting dalam tubuh manusia. Tengkorak berfungsi melindungi organ penting di kepala, yaitu otak – yang memberikan perintah ke seluruh anggota dan organ tubuh. Tapi tahukah Anda bahwa sebenarnya tengkorak manusia tersusun dari beberapa tulang.",
  price: 1000000
}

const cartFromLs = JSON.parse(localStorage.getItem("cart") || "[]")

const DetailPage = () => {
  const [cart, setCart] = useState(cartFromLs)

  const addToCart = useCallback(() => {
    const exist = cart.find((x) => x._id === detail._id);

    if (exist) {
      setCart(cart.map((x) =>
        x._id === detail._id ? { ...exist, qty: exist.qty + 1 } : x))
    } else {
      setCart([...cart, { ...detail, qty: 1 }]);
    }
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <div className="container mb-5">
      <div className="row pt-3">
        <div className="col-12 col-md-5">
          <img src={detail.cover} className="w-100" alt="" />
        </div>
        <div className="col-12 col-md-4 my-3">
          <div className="mb-2">
            <p className="m-0 font-weight-bold">{detail.productName}</p>
            <small className="text-dark">{detail.productCategory}</small>
            <p className="m-0">
              {
                detail.productType === "PURCHASE" ? `IDR ${number.format(detail.price)}` :
                  detail.productType === "DOWNLOAD" ? "FREE" : null
              }
            </p>
            <hr />
            <p className="text-dark m-0">{detail.productDesc}</p>
          </div>
          <hr />
          {
            detail.productType === "PURCHASE" ?
              <div className="add-cart-btn">
                <button onClick={addToCart}>Add to cart</button>
              </div> :
              detail.productType === "DOWNLOAD" ?
                <a href="<?php echo $link ?>" className="bg-666 btn w-100 text-white font-weight-bold">DOWNLOAD</a> : null
          }
          {/* <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default DetailPage
