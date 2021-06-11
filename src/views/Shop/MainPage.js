import React from "react";
import { Link } from "react-router-dom";

const number = Intl.NumberFormat('id-ID', { minimumFractionDigits: 0 });
const dummy = [
  {
    _id: 1,
    cover: "https://wastedarchive.com/admin/uploads/shop/cover/DISPLAY._1.jpg",
    productCategory: "",
    productType: "PURCHASE",
    productName: "Tengkorak",
    productDesc: "Tengkorak merupakan salah satu tulang yang penting dalam tubuh manusia. Tengkorak berfungsi melindungi organ penting di kepala, yaitu otak – yang memberikan perintah ke seluruh anggota dan organ tubuh. Tapi tahukah Anda bahwa sebenarnya tengkorak manusia tersusun dari beberapa tulang.",
    price: 1000000
  }
]

const MainPage = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-3">
          <h5 className="font-weight-bolder">SHOP</h5>
          <hr />
          <ul className="list-group">
            <li>
              <a className="text-dark" href="/shop">ALL</a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-9 mt-3 m-md-0">
          <div className="row">
            {dummy.map((v, i) => (
              <div className="col-12 col-md-4 col-lg-3" key={i}>
                <div className="myCard">
                  <Link to={{ pathname: "/shop/detail", id: v._id }} >
                    <div className="cover">
                      <img src={v.cover} className="w-100" alt="" />
                    </div>
                  </Link>
                  <div className="my-2 title">
                    <Link to={{ pathname: "/shop/detail", id: v._id }} >
                      <p className="font-weight-bolder m-0">{v.productName}</p>
                    </Link>
                    <p className="text-muted m-0">
                      {
                        v.productType === "PURCHASE" ? `IDR ${number.format(v.price)}` :
                          v.productType === "DOWNLOAD" ? "FREE" : null
                      }
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
