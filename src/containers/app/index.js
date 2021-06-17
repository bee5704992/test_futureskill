import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import RecordBook from '../record_book'
import ReadedBook from '../readed_book'

import { Layout, Menu } from 'antd';
const { Footer, Sider } = Layout;
const App = () => (
  <div>

    <div className="logo" />
    <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
    >
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px', height: '50vh' }}
      >
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/about-us">About Us</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/record-book">Record Book</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/readed-book">Readed Book</Link></Menu.Item>
      </Menu>
    </Sider>

    <main style={{marginLeft:'200px'}} >
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/record-book" component={RecordBook} />
      <Route exact path="/readed-book" component={ReadedBook} />
    </main>
    <Footer style={{ textAlign: 'center', marginLeft: '200px', background: 'linear-gradient(to  right , rgb(254, 0, 138), rgb(6, 0, 210))', color: 'white' }}>
      Interview ©2018 Created by Promphat
    </Footer>
  </div>
)

export default App
