import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  const toolIcons = [
    SiMacos,
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolIcons.map((Icon, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
