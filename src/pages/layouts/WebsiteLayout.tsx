import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { HomeOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const WebsiteLayout = () => {
  return (
    <Layout>
      <Header style={{ backgroundColor: '#f0f2f5' }}>
        <Menu
          theme='light'
          mode='horizontal'
          defaultSelectedKeys={['home']}
          style={{ float: 'right', lineHeight: '64px' }}
        >
          <Menu.Item key='home' icon={<HomeOutlined />}>
            <Link to={'/'}>Trang Chủ</Link>
          </Menu.Item>
          <Menu.Item key='about' icon={<UserOutlined />}>
            <Link to={'/products'}>Sản Phẩm</Link>
          </Menu.Item>
          <Menu.Item key='signup' icon={<PhoneOutlined />}>
            <Link to={'/signup'}>Đăng Ký</Link>
          </Menu.Item>
          <Menu.Item key='signin'>
            <Link to={'/signin'}>Đăng Nhập</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Outlet />
    </Layout>
  );
};

export default WebsiteLayout;
