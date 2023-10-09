import { Row, Col, Card } from "antd";
import React from "react";
import { DollarOutlined ,RedoOutlined ,FieldTimeOutlined ,BuildOutlined} from "@ant-design/icons";

const Dashboard = () => {
  return (
    <div>
      <Row gutter={[20, 12]}>
        <Col xs={24} sm={24} md={12} lg={6}>
          <Card
            style={{
              width: "100%",
              background: "#21222d",
              padding: "20px",
              borderRadius: "10px",
              
            }}
          >
            <div className="icon">
              <DollarOutlined
                style={{
                  color: "#cd4fe5",
                  fontSize: "25px",
                  height: "10px",
                }}
              />
            </div>
            <div
              className="value"
              style={{ color: "#fff", fontWeight: 600, marginTop: "10px" }}
            >
              0.000000
            </div>
            <div
              className="name"
              style={{ color: "#87888c", marginTop: "5px", fontSize: "12px" }}
            >
              Market Cap
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6}>
          <Card
            style={{
              width: "100%",
              background: "#21222d",
              padding: "17px",
              borderRadius: "10px",
            }}
          >
            <div className="icon">
              <RedoOutlined
                style={{
                  color: "#cd4fe5",
                  fontSize: "25px",
                  height: "10px",
                }}
              />
            </div>
            <div
              className="value"
              style={{ color: "#fff", fontWeight: 600, marginTop: "10px" }}
            >
              500,000
            </div>
            <div
              className="name"
              style={{ color: "#87888c", marginTop: "5px", fontSize: "12px" }}
            >
              Circulating Supply
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <Card
            style={{
              width: "100%",
              background: "#21222d",
              padding: "17px",
              borderRadius: "10px",
            }}
          >
            <div className="icon">
            <FieldTimeOutlined 
                style={{
                  color: "#cd4fe5",
                  fontSize: "25px",
                  height: "10px",
                }}
              />
            </div>
            <div
              className="value"
              style={{ color: "#fff", fontWeight: 600, marginTop: "10px" }}
            >
              500,000
            </div>
            <div
              className="name"
              style={{ color: "#87888c", marginTop: "5px", fontSize: "12px" }}
            >
              Total Supply
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <Card
            style={{
              width: "100%",
              background: "#21222d",
              padding: "17px",
              borderRadius: "10px",
            }}
          >
            <div className="icon">
            <BuildOutlined  
                style={{
                  color: "#cd4fe5",
                  fontSize: "25px",
                  height: "10px",
                }}
              />
            </div>
            <div
              className="value"
              style={{ color: "#fff", fontWeight: 600, marginTop: "10px" }}
            >
              0:0:0
            </div>
            <div
              className="name"
              style={{ color: "#87888c", marginTop: "5px", fontSize: "12px" }}
            >
              Next Rebase
            </div>
          </Card>
        </Col>
      </Row>


      <Row gutter={[20, 12]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Card
            style={{
              width: "100%",
              background: "#21222d",
              padding: "20px",
              borderRadius: "10px",
              marginTop: "30px",
              
            }}
          >
            <div className="icon">
              <DollarOutlined
                style={{
                  color: "#cd4fe5",
                  fontSize: "25px",
                  height: "10px",
                  
                }}
              />
            </div>
            <div
              className="value"
              style={{ color: "#fff", fontWeight: 600, marginTop: "10px" }}
            >
              0.000000
            </div>
            <div
              className="name"
              style={{ color: "#87888c", marginTop: "5px", fontSize: "12px" }}
            >
              Stakify ($SIFY) Price
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8}>
          <Card
            style={{
              width: "100%",
              background: "#21222d",
              padding: "17px",
              borderRadius: "10px",
              marginTop: "30px",
            }}
          >
            <div className="icon">
              <DollarOutlined
                style={{
                  color: "#cd4fe5",
                  fontSize: "25px",
                  height: "30px",
                }}
              />
            </div>
            <div
              className="value"
              style={{ color: "#fff", fontWeight: 600, marginTop: "10px" }}
            >
              $ 0.000
            </div>
            <div
              className="name"
              style={{ color: "#87888c", marginTop: "5px", fontSize: "12px" }}
            >
              Market Value of Treasury Asset
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Card
            style={{
              width: "100%",
              background: "#21222d",
              padding: "17px",
              borderRadius: "10px",
              marginTop: "30px",
            }}
          >
            <div className="icon">
            <FieldTimeOutlined 
                style={{
                  color: "#cd4fe5",
                  fontSize: "25px",
                  height: "10px",
                }}
              />
            </div>
            <div
              className="value"
              style={{ color: "#fff", fontWeight: 600, marginTop: "10px" }}
            >
              $ 0.000
            </div>
            <div
              className="name"
              style={{ color: "#87888c", marginTop: "5px", fontSize: "12px" }}
            >
             Referral Pool Value
            </div>
          </Card>
        </Col>
      </Row>


      <Row gutter={[20, 12]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Card
            style={{
              width: "100%",
              background: "#21222d",
              padding: "20px",
              borderRadius: "10px",
              marginTop: "30px",
              
            }}
          >
            
            <div
              className="value"
              style={{ color: "#fff", fontWeight: 600, marginTop: "10px" }}
            >
              20,364.13 $SIFY
            </div>
            <div
              className="name"
              style={{ color: "#87888c", marginTop: "5px", fontSize: "12px" }}
            >
             # Value of
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8}>
          <Card
            style={{
              width: "100%",
              background: "#21222d",
              padding: "17px",
              borderRadius: "10px",
              marginTop: "30px",
            }}
          >
            
            <div
              className="value"
              style={{ color: "#fff", fontWeight: 600, marginTop: "10px" }}
            >
              $30.77
            </div>
            <div
              className="name"
              style={{ color: "#87888c", marginTop: "5px", fontSize: "12px" }}
            >
              $ Value of
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Card
            style={{
              width: "100%",
              background: "#21222d",
              padding: "17px",
              borderRadius: "10px",
              marginTop: "30px",
            }}
          >
        
            <div
              className="value"
              style={{ color: "#fff", fontWeight: 600, marginTop: "10px" }}
            >
              500,000
            </div>
            <div
              className="name"
              style={{ color: "#87888c", marginTop: "5px", fontSize: "12px" }}
            >
              Total Supply
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
