import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesCount = ({ count }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="">
        لديك {count} مواعيد اليوم
      </Col>
    </Row>
  );
};

export default DatesCount;
