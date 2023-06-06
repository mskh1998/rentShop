export default function ContactUs() {
  return (
    <div>
      <div className="container">
        <div className="shadow-lg" style={{ marginTop: "10%" }}>
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex justify-content-center">
              <ul
                className="d-flex"
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  lineHeight: "2.5",
                }}
              >
                <li style={{ listStyleType: "none" }}>
                  <b style={{ color: "#37bfb8" }}>شماره موبایل :</b>09103434273
                </li>
                <li style={{ listStyleType: "none" }}>
                  <b style={{ color: "#37bfb8" }}>شماره ثابت :</b>021-41156378
                </li>
                <li style={{ listStyleType: "none" }}>
                  <b style={{ color: "#37bfb8" }}>ایمیل :</b>
                  mohammadMskh@gmail.com
                </li>
                <li style={{ listStyleType: "none" }}>
                  <b style={{ color: "#37bfb8" }}>اینستاگرام :</b>
                  mohammad.mskh76
                </li>
                <li style={{ listStyleType: "none" }}>
                  <b style={{ color: "#37bfb8" }}>فیسبوک :</b>
                  mohammad.mskh76.rent
                </li>
                <li style={{ listStyleType: "none" }}>
                  <b style={{ color: "#37bfb8" }}>آدرس :</b>جنت آباد شمالی
                  ،خیابان کشاورز، کوچه بنفشه چهار ، پلاک بیست
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12 d-flex justify-content-center">
              <img
                style={{ width: "500px" }}
                src="images/contactUs.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
