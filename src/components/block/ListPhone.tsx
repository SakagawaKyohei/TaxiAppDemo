import { Row, Col, Divider } from "antd";
function ListPhone() {
  return (
    <div>
      <h3 className="h33">TỔNG ĐÀI TAXI</h3>
      <h2 className="h22">TAXI GIÁ RẺ ĐỒNG THÁP</h2>
      <Row
        justify={"space-evenly"}
        gutter={[0, 16]}
        style={{ textAlign: "center" }}
      >
        <Col span={11}>
          <p className="tieude">Đặt Xe Giảm Ngay 20%</p>
          <a>
            <div className="hotline">
              <img
                src="https://i.ibb.co/pn3yCXN/download.png"
                alt="download"
                width="20px"
                height="20px"
                style={{ marginRight: 6 }}
              />
              <p>PhoneNumber</p>
            </div>
          </a>
        </Col>
        <Col span={11}>
          <p className="tieude">Taxi Đồng Tháp</p>
          <a>
            <div className="hotline">
              <img
                src="https://i.ibb.co/pn3yCXN/download.png"
                alt="download"
                width="20px"
                height="20px"
                style={{ marginRight: 6 }}
              />
              <p>PhoneNumber</p>
            </div>
          </a>
        </Col>
        <Col span={11}>
          <p className="tieude">Taxi Tháp Mười</p>
          <a>
            <div className="hotline">
              <img
                src="https://i.ibb.co/pn3yCXN/download.png"
                alt="download"
                width="20px"
                height="20px"
                style={{ marginRight: 6 }}
              />
              <p>PhoneNumber</p>
            </div>
          </a>
        </Col>
        <Col span={11}>
          <p className="tieude">Taxi Thanh Bình</p>
          <a>
            <div className="hotline">
              <img
                src="https://i.ibb.co/pn3yCXN/download.png"
                alt="download"
                width="20px"
                height="20px"
                style={{ marginRight: 6 }}
              />
              <p>PhoneNumber</p>
            </div>
          </a>
        </Col>
        <Col span={11}>
          <p className="tieude">Taxi Lấp Vò</p>
          <a>
            <div className="hotline">
              <img
                src="https://i.ibb.co/pn3yCXN/download.png"
                alt="download"
                width="20px"
                height="20px"
                style={{ marginRight: 6 }}
              />
              <p>PhoneNumber</p>
            </div>
          </a>
        </Col>
        <Col span={11}>
          <p className="tieude">Taxi Cao Lãnh</p>
          <a>
            <div className="hotline">
              <img
                src="https://i.ibb.co/pn3yCXN/download.png"
                alt="download"
                width="20px"
                height="20px"
                style={{ marginRight: 6 }}
              />
              <p>PhoneNumber</p>
            </div>
          </a>
        </Col>
        <Col span={11}>
          <p className="tieude">Taxi Sa Đéc</p>
          <a>
            <div className="hotline">
              <img
                src="https://i.ibb.co/pn3yCXN/download.png"
                alt="download"
                width="20px"
                height="20px"
                style={{ marginRight: 6 }}
              />
              <p>PhoneNumber</p>
            </div>
          </a>
        </Col>
        <Col span={11}>
          <p className="tieude">Taxi Hồng Ngự</p>
          <a>
            <div className="hotline">
              <img
                src="https://i.ibb.co/pn3yCXN/download.png"
                alt="download"
                width="20px"
                height="20px"
                style={{ marginRight: 6 }}
              />
              <p>PhoneNumber</p>
            </div>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default ListPhone;
