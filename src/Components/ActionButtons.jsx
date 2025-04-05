import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const ActionButtons = ({ deleteData, showData }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between">
        <Button className="btn-style p-2" onClick={deleteData}>
          مسح الكل
        </Button>
        <Button className="btn-style p-2" onClick={showData}>
          عرض البيانات
        </Button>
      </Col>
    </Row>
  );
};

export default ActionButtons;
