import React from "react";
import { Form, Input, Upload } from "antd";


import "./JobPost.css"; // import CSS ปกติ




const JobPost: React.FC = () => {
  return (
    <div style={{ paddingTop: 32, display: "flex", flexDirection: "column", alignItems: "center" }}>
    
      <Form layout="vertical" style={{ width: "100%", maxWidth: 800 }} autoComplete="off">
        <Form.Item
          label={<span className="label">ชื่องาน</span>}
          name="fullName"
          rules={[{ required: true,  message: "กรุณากรอกชื่องาน" }]}
        >
          <Input
            placeholder="กรอกชื่องาน"
            size="large"
            className="custom-input::placeholder"
          />
        </Form.Item>


        
      </Form>
    </div>
  );
};

export default JobPost;
