import React from "react";
import BasicRating from "../common/BasicRating";

function MainInfo() {
  return (
    <div class="row">
      <div class="col-sm-12 col-md-5 border-left" id="el"></div>
      <div class="col-sm-12 col-md-7">
        <h1 class="product-page-title mt-4 d-flex justify-content-between">
          <span>هدست شیمائومی مدل b-53</span>
        </h1>
        <div class="offer-rating product-page-rate mt-4">
          <BasicRating data={2} />
        </div>

        <form action="">
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-1 col-form-label">
              تعداد
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                id="staticEmail"
                value="1"
              />
            </div>
            <div class="col-sm-2">
              <button type="submit" class="btn btn-success mb-2">
                افزدون به سبد خرید
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MainInfo;
