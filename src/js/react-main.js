/**
 * Created by syzx9801@163.com on 2018/5/24.
 */
import * as React from 'react'
import { render } from 'react-dom'
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {getServiceDate} from '../service/api'

import ImageUpload from '../page/ImageUpload'
import CdnCache from '../page/CdnCache'

import '../style/layout.less'

const { Header, Footer, Sider, Content } = Layout;

class Main extends React.Component {
  state = {
    collapsed: false,
  }
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  componentDidMount () {
    // console.log(this.props)

  }
  render () {
    return  <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo"></div>
            <Menu defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <span><Link to="/" />CDN工具</span>
              </Menu.Item>
              <Menu.Item key="2">
                <span><Link to="/imgupload" />提交图片</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header />
            <Content style={{ margin: '0 16px' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Route exact path='/' component={CdnCache}/>
                <Route path='/imgupload' component={ImageUpload}/>
              </div>
            </Content>
            <Footer>
              mall.autohome.com.cn
            </Footer>
          </Layout>
        </Layout>
      </Router>
  }
}

render(<Main />, window.document.getElementById('app'))
