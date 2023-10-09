import React, { useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DatabaseOutlined,
  AccountBookOutlined,
  CalculatorOutlined,
  UserAddOutlined,
  GitlabOutlined
} from "@ant-design/icons";

import { Layout, Menu, Button, theme } from "antd";
import Dashboard from "../component/Dashboard";
import logo from "../Images/desktop_logo.png"
const { Header, Sider, Content } = Layout;
const StatifyLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth="0"
        onBreakpoint={(broken) => {
            console.log(broken);
        }}
        style={{ background: "#171821", borderRight: "1px solid #343844" }}
      >
        <div className="demo-logo-vertical" />

        <div 
        className="sidebar-header"
        style={{display:"flex", justifyContent: "center", padding : "20px"}}
        
        >
       <img src={logo} alt="desktp_logo"
       style={{ height: "45px", width: "130px" }}
       />
        </div>
        <Menu 
          style={{
            background: "#171821",
            color: "#fff",
            border: "none",
          }}
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "Dashboard",
              icon: <DatabaseOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <AccountBookOutlined />,
              label: "Account",
            },
            {
              key: "3",
              icon: <CalculatorOutlined />,
              label: "Calculator",
            },
            {
              key: "4",
              icon: <UserAddOutlined />,
              label: "Referral",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            display:"flex",
            alignItems: "center",
            justifyContent:"space-between",
            margin:15,
            padding:"0 20px",
            height:"60",
            background:"#21222d",
            borderRadius: "7px"
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "#fff",
            }}
          />
          <Button
           type="primary"
           shape="round"
           icon={<GitlabOutlined />}
           size="small"
           
           >Connect</Button>
        </Header>
        <Content
          style={{
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <Dashboard />
        </Content>
      </Layout>
    </Layout>
  );
};
export default StatifyLayout;
