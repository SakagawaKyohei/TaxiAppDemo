import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  ConfigProvider,
  Button,
  Radio,
  DatePicker,
  Form,
  Input,
  Select,
  Row,
  Col,
  Card,
  Space,
  theme,
  TimePicker,
} from "antd";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
    .join(`&`);
}
function useBetterMediaQuery(mediaQueryString: string) {
  const [matches, setMatches] = useState<boolean>();

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);
    const listener = () => setMatches(!!mediaQueryList.matches);
    listener();
    mediaQueryList.addEventListener("change", listener); // updated from .addListener
    return () => mediaQueryList.removeEventListener("change", listener); // updated from .removeListener
  }, [mediaQueryString]);

  return matches;
}

const BookingForm: React.FC = () => {
  var darkMode = useBetterMediaQuery("(prefers-color-scheme:dark)");
  const formName = `contact`;

  const handleSubmit = (values) => {
    if (values[`bot-field`] === undefined) {
      delete values[`bot-field`];
    }

    fetch(`/`, {
      method: `POST`,
      headers: { "Content-Type": `application/x-www-form-urlencoded` },
      body: encode({
        "form-name": formName,
        ...values,
      }),
    })
      .then(() => showSuccess())
      .catch((error) => showError(error));
    alert("Chúng tôi đã nhận thông tin của bạn");
  };
  const showSuccess = () => {
    // TODO: Show a success message or navigate to a success page.
    console.log(`form submitted successfully`);
  };

  const showError = (error: any) => {
    // TODO: Show an error message to the user
    console.log(`There was an error submitting the form`);
    console.log(error);
  };
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.compactAlgorithm,
      }}
    >
      <div>
        <Space
          direction="vertical"
          size="middle"
          style={{ display: "flex", margin: 0 }}
        >
          <Card size="small" style={{ borderRadius: 0 }}>
            <Row justify="center">
              <h1
                style={{
                  color: "purple",
                  marginBottom: 10,
                }}
                className="h22"
              >
                Đặt xe ngay tại đây
              </h1>
            </Row>
            <form
              name={formName}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              hidden
            >
              <input type="text" name="Điểm đón" />
              <input type="text" name="Điểm đến" />
              <input type="radio" name="Chặn đường" />
              <input type="radio" name="Chặng đường" />
              <input type="text" name="Họ tên" />
              <input type="text" name="Số điện thoại" />
              <input type="text" name="Thời gian" />
              <input type="text" name="Địa chỉ" />
              <select name="Xe" />
            </form>
            <>
              <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                disabled={componentDisabled}
                size="large"
                name="cf"
                method="post"
                onFinish={handleSubmit}
              >
                <Form.Item
                  label="Don't fill this out"
                  className={`hidden`}
                  style={{ display: `none` }}
                  name="bot-field"
                >
                  <Input type={`hidden`} />
                </Form.Item>
                <Form.Item label="Điểm đón" name="Điểm đón">
                  <Input />
                </Form.Item>
                <Form.Item label="Điểm đến" name="Điểm đến">
                  <Input />
                </Form.Item>
                <Form.Item label="Chặng đường" name="Chặng đường">
                  <Radio.Group>
                    <Radio value="1 chiều"> 1 chiều </Radio>
                    <Radio value="2 chiều"> 2 chiều </Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="Họ và tên" name="Họ tên">
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Số điện thoại"
                  name="Số điện thoại"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập số điện thoại của bạn",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <div>
                  <Form.Item label="Ngày giờ đón" name="Thời gian">
                    <Input />
                  </Form.Item>
                </div>
                <Form.Item label="Địa chỉ đón" name="Địa chỉ">
                  <Input />
                </Form.Item>
                <Form.Item label="Tùy chọn xe" name="Xe">
                  <Select>
                    <Select.Option value="4 chỗ">Xe 4 chỗ</Select.Option>
                    <Select.Option value="5 chỗ">Xe 5 chỗ</Select.Option>{" "}
                    <Select.Option value="7 chỗ">Xe 7 chỗ</Select.Option>{" "}
                    <Select.Option value="9 chỗ">Xe 9 chỗ</Select.Option>{" "}
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Row justify="center">
                    <Button
                      htmlType="submit"
                      style={{
                        backgroundColor: "#1677ff",
                        color: "white",
                      }}
                    >
                      Submit
                    </Button>
                  </Row>
                </Form.Item>
              </Form>
            </>
          </Card>
        </Space>
      </div>
    </ConfigProvider>
  );
};

export default BookingForm;
