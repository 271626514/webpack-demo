/**
 * Created by syzx9801@163.com on 2018/5/24.
 */
import * as React from 'react'
import { render } from 'react-dom'
import {getV2exList} from '../service/api'
import '../style/layout.less'

import { Layout, Menu } from 'antd';
import { Router, Route, Link } from 'react-router'
const { Header, Footer, Sider, Content } = Layout;

const App = React.createReactClass({
  render () {
    return (
      <div>
        <h1>APP</h1>
        <ul>
          <li><Link to="/opting1" />option1</li>
          <li><Link to="/opting2" />option2</li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})


class Main extends React.Component {
  state = {
    collapsed: false,
  }
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  componentDidMount () {
    getV2exList().then(res => {
      console.log(JSON.stringify(res))
    }).catch(err => {
      console.log(err)
    })
  }
  render () {
    return  <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo"></div>
        <Menu defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="9">
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}></div>
        </Content>
        <Footer>
          mall.autohome.com.cn
        </Footer>
      </Layout>
    </Layout>
  }
}

render(<Main/>, window.document.getElementById('app'))
