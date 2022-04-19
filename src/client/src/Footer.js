import { Avatar, Button } from "antd";
import React from "react";
import Container from "./Container";
import './footer.css';
export default function Footer({count, showModal}) {
  return (
    <div className="footer">
      <Container>
          <Avatar style={{marginRight: '1em', backgroundColor:'orange'}} shape="circle" size="large">{count}</Avatar>
        <Button onClick={showModal} type="primary"> Add new student +</Button>
      </Container>
    </div>
  );
}
