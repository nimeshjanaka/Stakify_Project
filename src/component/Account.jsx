import React from 'react'
import { Row, Col, Card } from "antd";
import {
  DollarOutlined,
  RedoOutlined,
  FieldTimeOutlined,
  BuildOutlined,
  MenuOutlined,
  PoundCircleOutlined,
  
} from "@ant-design/icons";
import CardComponent from "./CardComponent";

const Account = () => {


  
  return (
    <div>
        <Row gutter={[20, 12]}>
        <Col xs={24} sm={24} md={12} lg={6}>
          <CardComponent
            icon={
              <RedoOutlined
                style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
              />
            }
            value={"null $SIFY"}
            title={"Your Statify ($SIFY) Balance"}
          />
        </Col>

        <Col xs={24} sm={24} md={12} lg={6}>
          <CardComponent
            icon={
              <DollarOutlined
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
              <MenuOutlined
                style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
              />
            }
            value={"00:00:00"}
            title={"Next Rebase"}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <CardComponent
            icon={
              <PoundCircleOutlined 
                style={{ color: "#cd4fe5", fontSize: "25px", height: "10px" }}
              />
            }
            value={"0.000000"}
            title={"Stakify ($SIFY) Price"}
          />
        </Col>
      </Row>
          
      <Row gutter={[20, 12]}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Card
            style={{
              width: "100%",
              background: "#21222d",
              padding: "50px",
              borderRadius: "10px",
              marginTop: "30px",
              height :"270px",
              overflow : "auto",
            }}
          >
            
            <div
              className="value"
              style={{ color: "#fff", fontWeight: 600, marginTop: "10px"}}
            >
              Current $SIFY Price
            
            </div>
            <div
              className="name"
              style={{ color: "#fff", fontWeight: 600, marginTop: "10px" }}
            >
              Next Reward Amount
            </div>
          </Card>
        </Col>
      </Row>
      

    </div>
  )
}

export default Account