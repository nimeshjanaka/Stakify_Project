import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Link } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';


import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DatabaseOutlined,
  AccountBookOutlined,
  CalculatorOutlined,
  UserAddOutlined,
  GitlabOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Button, theme } from "antd";
import Dashboard from "../component/Dashboard";
import Account from "../component/Account";
import Calculator from "../component/Calculator";
import Referral from "../component/Referral";
import logo from "../Images/desktop_logo.png";

const { Header, Sider, Content } = Layout;
const StatifyLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    localStorage.getItem("selectedMenuItem") || "1"
  );

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Save the selected menu item in local storage
    localStorage.setItem("selectedMenuItem", selectedMenuItem);
  }, [selectedMenuItem]);

  useEffect(() => {
    // Navigate to the correct route when the component mounts
    switch (selectedMenuItem) {
      case "1":
        navigate("/");
        break;
      case "2":
        navigate("/Account");
        break;
      case "3":
        navigate("/Calculator");
        break;
      case "4":
        navigate("/Referral");
        break;
      default:
        navigate("/");
    }
  }, [selectedMenuItem, navigate]);

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
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <img
            src={logo}
            alt="desktp_logo"
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
          defaultSelectedKeys={[selectedMenuItem]}
          selectedKeys={[selectedMenuItem]}
          onSelect={(item) => setSelectedMenuItem(item.key)}
        >
          <Menu.Item key="1" icon={<DatabaseOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<AccountBookOutlined />}>
            <Link to="/Account">Account</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<CalculatorOutlined />}>
            <Link to="/Calculator">Calculator</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserAddOutlined />}>
            <Link to="/Referral">Referral</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 15,
            padding: "0 20px",
            height: "60",
            background: "#21222d",
            borderRadius: "7px",
            marginTop : "25px",
            
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
          {/* <Button
            type="primary"
            shape="round"
            icon={<GitlabOutlined />}
            size="small"
          >
            Connect
          </Button> */}
          <ConnectButton />
        </Header>
        <Content
          style={{
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/Referral" element={<Referral />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default StatifyLayout;
