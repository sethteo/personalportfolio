import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiJava,
  DiJavascript1,
  DiPython,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiGit,
  DiPostgresql,
} from "react-icons/di";
import { VscAzure } from "react-icons/vsc";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "0px", paddingTop: "15px" }}>
      <Col xs={3} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <VscAzure />
      </Col>
    </Row>
  );
}

export default Techstack