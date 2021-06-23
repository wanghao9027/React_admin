/*
    后台管理页面
*/
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import LeftNav from '../../components/left-nav/LeftNav'
import NewHeader from '../../components/header/Heade'

import Home from '../home/Home'
import Shop from '../shop/Shop'
import Shopping from '../shop/Shopping'
import User from '../user/User'
import Role from '../role/Role'
import ChartsBar from '../charts/bar'
import ChartsPie from '../charts/pie'
import './admin.css'
const { Header, Footer, Sider, Content } = Layout
class Admin extends Component {

    componentDidMount() {
        console.log(this.props.match.path)
    }
    render() {
        return (
            <div className="app">
                <Layout style={{ height: '100%' }}>
                    <Sider>
                        <LeftNav />
                    </Sider>
                    <Layout>
                        <Header style={{backgroundColor:"#ccc"}}>
                            <NewHeader />
                        </Header>
                        <Content style={{ backgroundColor: "#fff" }}>
                            <Switch>
                                <Route path='/admin/home' component={Home} />
                                <Route path='/admin/shop' component={Shop} />
                                <Route path='/admin/shopping' component={Shopping} />
                                <Route path='/admin/user' component={User} />
                                <Route path='/admin/role' component={Role} />
                                <Route path='/admin/charts/bar' component={ChartsBar} />
                                <Route path='/admin/charts/pie' component={ChartsPie} />
                                <Redirect to='/admin/home'/>
                            </Switch>
                        </Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default Admin;

// eslint-disable-next-line no-lone-blocks
{/*  */ }