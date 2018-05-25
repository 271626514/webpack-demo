/**
 * Created by syzx9801@163.com on 2018/5/24.
 */
import * as React from 'react'
import { render } from 'react-dom'

import '../style/index.less'
import '../style/index.scss'
import '../style/index.css'

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class Main extends React.Component {
  render () {
    return  <div>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  }
}

render(<Main/>, window.document.getElementById('app'))
