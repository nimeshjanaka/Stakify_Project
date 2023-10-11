import React from "react";
import { Row, Col, Card } from "antd";
import {
  
  RedoOutlined,
  MenuOutlined,
  PayCircleOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { Slider } from "antd";
import CardComponent from "./CardComponent";

const formatter = (value) => `${value} Days`;

const Calculator = () => {
  return (
    <div>
      <h2
        style={{
          fontSize: "25px",
          color: "white",
        }}
      >
        Calculator
      </h2>
      <span
        style={{
          fontSize: "15px",
          color: "#fff",
        }}
      >
        Estimate your returns
      </span>

      <Row gutter={[20, 12]}>
      <Col xs={24} sm={24} md={12} lg={6}>
          <CardComponent
            icon={
              <MenuOutlined
                style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
              />
            }
            value={""}
            title={"Stakify ($SIFY) Price"}
          />
        </Col>

        <Col xs={24} sm={24} md={12} lg={6}>
          <CardComponent
            icon={
              <PayCircleOutlined 
                style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
              />
            }
            value={"648,000%"}
            title={"Current APY"}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <CardComponent
            icon={
              <ReloadOutlined 
                style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
              />
            }
            value={"null $SIFY"}
            title={"Your Stakify ($SIFY) Balance"}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <CardComponent
            icon={
              <RedoOutlined
                style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
              />
            }
            value={"$0.0015"}
            title={"Stakify ($SIFY) Price"}
          />
        </Col>
      </Row>

      <Row gutter={[20, 12]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <p
            style={{
              color: "white",
              fontSize: "12px",
              fontWeight: "400",
              marginTop : "50px",
            }}
          >
            Stakify ($SIFY) Amount
          </p>
          <Input
            placeholder="input"
            style={{
              background: "#2a2c34",
              color: "white",
            }}
          />
          ;
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <p
            style={{
              color: "white",
              fontSize: "12px",
              fontWeight: "400",
              marginTop : "50px",
            }}
          >
            APY (%)
          </p>
          <Input
            placeholder="input"
            style={{
              background: "#2a2c34",
              color: "white",
              
            }}
          />
          ;
        </Col>
      </Row>

      <Row gutter={[20, 12]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <p
            style={{
              color: "white",
              fontSize: "12px",
              fontWeight: "400",
            }}
          >
            Stakify ($SIFY) Amount
          </p>
          <Input
            placeholder="input"
            style={{
              background: "#2a2c34",
              color: "white",
            }}
          />
          ;
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <p
            style={{
              color: "white",
              fontSize: "12px",
              fontWeight: "400",
            }}
          >
            Future Stakify ($SIFY) market price ($)
          </p>
          <Input
            placeholder="input"
            style={{
              background: "#2a2c34",
              color: "white",
            }}
          />
          ;
        </Col>
      </Row>
      <Slider
        tooltip={{
          formatter,
        }}
      />
      <div></div>
    </div>
  );
};

export default Calculator;
