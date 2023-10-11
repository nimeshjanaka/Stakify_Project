import React from "react";
import "./referral.css";
import { Input } from "antd";
import { Row, Col, Card } from "antd";
import { Button, Space } from "antd";
import { Row as Rowstrap, Col as Coltrap } from "reactstrap";
// import { Table } from 'antd';

// const columns = [
//   {
//     title: 'Wallet Address',
//     dataIndex: 'WalletAddress',
//   },

//   {
//     title: 'Amount',
//     dataIndex: 'Amount',
//   },
// ];
// const data = [
//   {
//     key: '1',
//     WalletAddress: '',
//     address: '',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//   },
// ];

const Referral = () => {
  return (
    <div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <span
          style={{
            color: "blue",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          REFERRAL
        </span>
        <span className="mx-3">REWARDS</span>
      </div>

      <div className="d-flex justify-content-center">
        <span
          style={{
            lineHeight: "18.86px",
            fontSize: "12px",
            fontWeight: "500",
            color: "rgb(113,116,127)",
            textTransform: "uppercase",
            justifyContent: "center",
            display: "flex",
            marginBottom: "40px",
          }}
        >
          RECEIVE UP TO 3% BONUS ON THE REFEREE'S TOTAL EARNINGS.
        </span>
      </div>

      <Rowstrap>
        <Coltrap sm={12} md={12} lg={3}>
          <div
            style={{
              color: "white",
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            Your personal referral link:
          </div>
        </Coltrap>
        <Coltrap sm={12} md={12} lg={6}>
          <div>
            <Input placeholder="input" />
          </div>
        </Coltrap>
        <Coltrap
          sm={12}
          md={12}
          lg={3}
          className="d-flex align-items-center justify-content-center"
        >
          <Button type="primary" shape="round" size="Larger">
            Copy Link
          </Button>
        </Coltrap>
      </Rowstrap>

      <Row gutter={[20, 12]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Card
            style={{
              width: "100%",
              background: "#21222d",
              padding: "20px",
              borderRadius: "10px",
              marginTop: "40px",
            }}
          >
            <div
              className="value"
              style={{ color: "#fff", fontWeight: 600, marginTop: "10px" }}
            >
              $100
            </div>
            <div
              className="name"
              style={{ color: "#87888c", marginTop: "5px", fontSize: "12px" }}
            >
              Your total rewards from referrals
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12}>
          <Card
            style={{
              width: "100%",
              background: "#21222d",
              padding: "17px",
              borderRadius: "10px",
              marginTop: "40px",
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
      </Row>
      <h3
        style={{
          color: "white",
          justifyContent: "center",
          display: "flex",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        Connect Your Wallet !
      </h3>

      {/* <Table columns={columns} dataSource={data} size="middle" /> */}
    </div>
  );
};

export default Referral;
