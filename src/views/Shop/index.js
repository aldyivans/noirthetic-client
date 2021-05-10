import React from "react";

const Shop = () => {
  return (
    <div class="container-fluid py-5 font-12">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3">
            <h5 class="font-weight-bolder">SHOP</h5>
            <hr />
            <ul class="list-group">
              <li>
                <a class="text-dark" href="/shop">ALL</a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-9 mt-3 m-md-0">
            <div class="row">
              {
                <div class="col-12 col-md-4 col-lg-3">
                  <div class="myCard">
                    <a href="detail.php?id=<?php echo $d['id'] ?>">
                      <div class="cover">
                        <img src="../admin/<?php echo $d['cover'] ?>" class="w-100" alt="" />
                      </div>
                    </a>
                    <div class="my-2 title">
                      <a class="text-light" href="detail.php?id=<?php echo $d['id'] ?>">
                        <p class="font-weight-bolder m-0"></p>
                      </a>
                      <p class="text-dark m-0">
                      </p>
                      <hr />
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
