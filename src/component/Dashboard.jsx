import { Row, Col, Card } from "antd";
import React from "react";
import {
  DollarOutlined,
  RedoOutlined,
  FieldTimeOutlined,
  BuildOutlined,
} from "@ant-design/icons";
import CardComponent from "./CardComponent";

const Dashboard = () => {
  return (
    <div>
      <Row gutter={[20, 12]}>
        <Col xs={24} sm={24} md={12} lg={6}>
          <CardComponent
            icon={
              <DollarOutlined
                style={{
                  color: "#cd4fe5",
                  fontSize: "25px",
                  height: "10px",
                }}
              />
            }
            value={"0.0000000"}
            title={"Market Cap"}
          />
        </Col>

        <Col xs={24} sm={24} md={12} lg={6}>
          <CardComponent
            icon={
              <RedoOutlined
                style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
              />
            }
            value={"500,000"}
            title={"Circulating Supply"}
          />
        </Col>

        <Col xs={24} sm={24} md={12} lg={6}>
          <CardComponent
            icon={
              <FieldTimeOutlined
                style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
              />
            }
            value={"500,000"}
            title={"Total Supply"}
          />
        </Col>

        <Col xs={24} sm={24} md={12} lg={6}>
          <CardComponent
            icon={
              <BuildOutlined
                style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
              />
            }
            value={"0:0:0"}
            title={"Next Rebase"}
          />
        </Col>
      </Row>

      <Row gutter={[20, 12]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <CardComponent
            icon={
              <DollarOutlined
                style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
              />
            }
            value={"0.000000"}
            title={"Stakify ($SIFY) Price"}
          />
        </Col>

        <Col xs={24} sm={24} md={12} lg={8}>
          <CardComponent
            icon={
              <DollarOutlined
                style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
              />
            }
            value={"4.3857"}
            title={" Market Value of Treasury Asset"}
          />
        </Col>

        <Col xs={24} sm={24} md={12} lg={8}>
          <CardComponent
            icon={
              <FieldTimeOutlined
                style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
              />
            }
            value={"$ 0.000"}
            title={" Referral Pool Value"}
          />
        </Col>
      </Row>

      <Row gutter={[20, 12]}>
      <Col xs={24} sm={24} md={12} lg={8}>
          <CardComponent
            icon={
              <FieldTimeOutlined
                style={{ color: "#cd4fe5", fontSize: "25px", height: "5px" }}
              />
            }
            value={"20,364.13 $SIFY"}
            title={" # Value of"}
          />
        </Col>

        <Col xs={24} sm={24} md={12} lg={8}>
          <CardComponent
            icon={
              <FieldTimeOutlined
                style={{ color: "#cd4fe5", fontSize: "25px", height: "5px" }}
              />
            }
            value={"$30.77"}
            title={" $ Value of"}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <CardComponent
            icon={
              <FieldTimeOutlined
                style={{ color: "#cd4fe5", fontSize: "25px", height: "5px" }}
              />
            }
            value={"2.48%"}
            title={" % : Supply"}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
