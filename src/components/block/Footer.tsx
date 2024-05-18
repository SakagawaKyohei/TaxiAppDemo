import { Col, Row } from "antd";
import logo from "../../assets/car2.png";
const text: React.CSSProperties = {
  marginTop: 50,
  marginBottom: 20,
  marginLeft: 50,
  fontSize: 30,
  fontWeight: "bold",
};
const text2: React.CSSProperties = {
  marginTop: 30,
  marginBottom: 30,
  marginLeft: 50,
  fontSize: 16,
};
const text3: React.CSSProperties = {
  marginTop: 20,
  marginBottom: 20,
  marginLeft: 50,
  fontSize: 16,
};
const text4: React.CSSProperties = {
  marginTop: 20,
  marginBottom: 50,
  marginLeft: 50,
  fontSize: 16,
};

const ptext: React.CSSProperties = {
  marginTop: 50,
  marginBottom: 20,

  fontSize: 30,
  fontWeight: "bold",
};
const ptext2: React.CSSProperties = {
  marginTop: 30,
  marginBottom: 30,

  fontSize: 16,
};
const ptext3: React.CSSProperties = {
  marginTop: 20,
  marginBottom: 20,

  fontSize: 16,
};
const ptext4: React.CSSProperties = {
  marginTop: 20,
  marginBottom: 50,
  marginLeft: 15,
  marginRight: 15,
  fontSize: 16,
};
function Footer() {
  return (
    <>
      <div
        className="hidden md:block"
        style={{
          width: "100%",
          backgroundColor: "#1f1f1f",
          color: "white",
        }}
      >
        <Row>
          <Col span={10}>
            <h1 style={text}>TDT</h1>
            <p style={text2}>DỊCH VỤ TAXI ĐỒNG THÁP</p>

            <p style={text3}>
              Hotline:
              <a href="" style={{ paddingLeft: 5 }} className="linkphone">
                PhoneNumber
              </a>
            </p>

            <p style={text3}>
              {" "}
              Email:
              <a href="" style={{ paddingLeft: 5 }} className="linkphone">
                EmailAddress
              </a>
            </p>
            <p style={text4}>Địa chỉ: Address</p>
          </Col>

          <Col
            span={14}
            className="hidden md:block"
            style={{
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://zrhhzqtaizoqtwmnzzbi.supabase.co/storage/v1/object/public/avt/car/car2%20(1).png"
              style={{
                width: "75%",
                margin: "0 auto",
                marginTop: 30,
              }}
            />
          </Col>
        </Row>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#1f1f1f",
          color: "white",
          textAlign: "center",
        }}
        className="md:hidden"
      >
        <Row>
          <Col span={24}>
            <h1 style={ptext}>TDT</h1>
            <p style={ptext2}>DỊCH VỤ TAXI ĐỒNG THÁP</p>

            <p style={ptext3}>
              Hotline:
              <a style={{ paddingLeft: 5 }} className="linkphone">
                PhoneNumber
              </a>
            </p>

            <p style={text3}>
              {" "}
              Email:
              <a
                href="mailto:nguyenlap191022021@gmail.com"
                style={{ paddingLeft: 5 }}
                className="linkphone"
              >
                nguyenlap191022021@gmail.com
              </a>
            </p>
            <p style={ptext4}>Địa chỉ: Mỹ Thọ, Cao Lãnh, Đồng Tháp</p>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Footer;
export {};
