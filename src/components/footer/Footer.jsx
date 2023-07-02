import React from "react";
import "../footer/footer.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <>
      <div className="footerBackground">
        <div className="footerBlurCover"></div>
        <div style={{ padding: "0px 30px" }}>
          <div className="row p-5">
            <div className="col-sm-2 footerZ-index">
              <ul>
                <li className="d-flex justify-content-start">
                  <h1 style={{ color: "#3b30fc0" }}>رنتو</h1>
                </li>
                <li className="d-flex justify-content-start">
                  <p className="text-white pSafeFont">با خیال راحت اجاره کن</p>
                </li>
                <li className="d-flex justify-content-start">
                  <ul style={{ display: "contents" }}>
                    <li>
                      <YouTubeIcon sx={{ color: "#3b30fc0" }} />
                    </li>
                    <li style={{ paddingRight: "8px" }}>
                      <TwitterIcon />
                    </li>
                    <li style={{ paddingRight: "8px" }}>
                      <LinkedInIcon />
                    </li>
                    <li style={{ paddingRight: "8px" }}>
                      <InstagramIcon />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-2 footerZ-index">
              <ul style={{ textAlign: "center" }}>
                <li className="pb-2">
                  <b className="text-white">لینک های کاربردی</b>
                </li>
                <li>
                  <p className="text-white pSafeFont2">خانه</p>
                </li>
                <li>
                  <p className="text-white pSafeFont2">پشتیبانی</p>
                </li>
                <li>
                  <p className="text-white pSafeFont2">درباره رنتو</p>
                </li>
                <li>
                  <p className="text-white pSafeFont2">حریم خصوصی</p>
                </li>
                <li>
                  <p className="text-white pSafeFont2">راهنما</p>
                </li>
              </ul>
            </div>
            <div className="col-sm-2 footerZ-index">
              <ul style={{ textAlign: "center" }}>
                <li className="pb-2">
                  <b className="text-white">حساب کاربری</b>
                </li>
                <li>
                  <p className="text-white pSafeFont2">پروفایل</p>
                </li>
                <li>
                  <p className="text-white pSafeFont2">خرید ها</p>
                </li>
                <li>
                  <p className="text-white pSafeFont2">تیکت ها</p>
                </li>
                <li>
                  <p className="text-white pSafeFont2">موارد مورد علاقه</p>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 footerZ-index">
              <ul style={{ textAlign: "center" }}>
                <li className="pb-2">
                  <b className="text-white">راهنمای اجاره در رنتو</b>
                </li>
                <li>
                  <p className="text-white pSafeFont2">نحوه ثبت سفارش</p>
                </li>
                <li>
                  <p className="text-white pSafeFont2">رویه ارسال سفارش</p>
                </li>
                <li>
                  <p className="text-white pSafeFont2">شیوه های پرداخت</p>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 footerZ-index">
              <ul>
                <li>
                  <p className="text-white" style={{ fontSize: "12px" }}>
                    با ثبت ایمیل از جدیدترین تخفیف کالاها باخبر شوید
                  </p>
                </li>
                <li>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="ایمیل شما"
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      // style={}
                    />
                    <button
                      class="btn btn-danger"
                      type="button"
                      id="button-addon1"
                    >
                      ثبت
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
