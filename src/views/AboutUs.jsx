import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "../assets/css/AboutPage.css";

function AboutUs() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scrollTo({ top: "0", behavior: "smooth" });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="aboutList col-md-12 shadow-lg" data-aos="fade-up">
          <div className="row">
            <div className="text col-xs-12">
              <h4>چشم انداز</h4>
              <p>
                شرکت پردازشگران هوشمند هورسا، با اتکا به خداوند متعال و در نظر
                گرفتن جایگاه ویژه و مطلق انسان و مشاركت ایشان در ساختن اندیشه
                های فردا در سایه بكارگیری فناوری اطلاعات به عنوان ابزار دسترسی
                به هدف با تكیه بر توان فنی و تجربه جمعی از کارشناسان و مدیران با
                تجربه، فعالیت خود را از سال 1398 آغاز نموده و در راستای اهداف و
                چشم اندازهای بلند مدت، دامنه‌ی فعالیتهای خود را به صورت جدی با
                تمرکز در ایجاد زیرساختهای نرم افزاری و ارائه سرویس به سازمانهای
                بزرگ در دولت الکترونیک نموده است.
              </p>
            </div>
            <div className="images col-xs-12">
              <img src="images/vision.png" alt="vision" title="vison" />
            </div>
          </div>
        </div>
        <div className="aboutList col-md-12 shadow-lg" data-aos="fade-up">
          <div className="row">
            <div className="images col-xs-12">
              <img src="images/mission.jpeg" alt="mission" title="mission" />
            </div>
            <div className="text col-xs-12">
              <h4>ماموریت</h4>
              <p>
                شرکت پردازشگران هوشمند هورسا، به عنوان یک شرکت نرم افزاری است و
                با هدف مشاوره در تولید، توسعه و پیشرفت در حوزه های فناوری مالی
                از قبیل : تعریف کیف پول، ارائه راه حلهای نوین در عرصه پرداخت
                الکترونیک و تولید سامانه های مقیاس پذیر برای سازمانها و شرکتها
                با نگاه به تولید نرم افزار بومی و ملی پا به عرصه رقابت نهاده
                است.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutList col-md-12 shadow-lg" data-aos="fade-up">
          <div className="row">
            <div className="text col-xs-12">
              <h4>اهداف</h4>
              <p>
                تیم هورسا با هدف کمک به مدیران ارشد در سازمانها به منظور پیاده
                سازی دولت الکترونیک ، کاهش هزینه ها و تسهیل در امور هموطنان از
                مزایای به روز خدمات قابل ارائه بصورت آنلاین در سامانه های تولید
                شده این شرکت میباشد.
              </p>
            </div>
            <div className="images col-xs-12">
              <img src="images/goals.jpg" alt="goals" title="goals" />
            </div>
          </div>
        </div>
        <div className="aboutList col-md-12 shadow-lg" data-aos="fade-up">
          <div className="row">
            <div className="images col-xs-12">
              <img
                src="images/qualityPolicy.png"
                alt="qualityPolicy"
                title="qualityPolicy"
              />
            </div>
            <div className="text col-xs-12">
              <h4>خط مشی کیفیت</h4>
              <p>
                <ul>
                  <li>
                    بهبود مستمر خدمات، محصولات و فرآیندهای شرکت از طریق
                    رویکردهای سیستم مدیریت کیفیت
                  </li>
                  <li>
                    تولید و ارائه مطلوب خدمات فناوری اطلاعات و ارتباطات از طریق
                    بکارگیری تکنولوژیهای روز
                  </li>
                  <li>
                    ارتقای سطح مهارتی کارکنان شرکت از طریق آموزش و کسب مهارتهای
                    تخصصی
                  </li>
                  <li>
                    بهبود سطح دسترسی به شبکه ارائه خدمات از طریق افزایش و توسعه
                    مراکز ارائه خدمات در سراسر کشور
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
