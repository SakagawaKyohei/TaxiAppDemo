import { Col, Row } from "antd";
import logo from "../../assets/car2.png";

function Header() {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <img
        src="https://zrhhzqtaizoqtwmnzzbi.supabase.co/storage/v1/object/public/avt/car/banner%20(1).png"
        style={{ width: "100%" }}
      ></img>
      <div style={{ marginLeft: 35, marginRight: 35 }}>
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              paddingTop: 35,
              paddingBottom: 15,
              fontSize: 27,
              fontWeight: "bold",
            }}
          >
            {" "}
            Bảng giá cước TAXI ĐỒNG THÁP
          </h2>
          <p style={{ paddingBottom: 20, fontWeight: "bold" }}>
            Đội ngũ tài xế của chúng tôi đã sẵn sàn phục vụ bạn. Nhấn "Đặt xe"
            để chúng tôi đến đón bạn!
          </p>
          <table
            border={1}
            style={{
              height: 150,
              width: "100%",
              fontWeight: "bold",
              marginBottom: 50,
            }}
          >
            <tr style={{ backgroundColor: "#4b268f", color: "white" }}>
              <td>Loại xe</td>
              <td>Dưới 30km</td>
              <td>Trên 30km</td>
            </tr>
            <tr>
              <td>Taxi 4 chỗ</td>
              <td>14.000vnđ/ km</td>
              <td>13.000vnđ/ km</td>
            </tr>
            <tr>
              <td>Taxi 7 chỗ</td>
              <td>17.000vnđ/ km</td>
              <td>15.000vnđ/ km</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Header;
export {};
