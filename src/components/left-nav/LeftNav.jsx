/*
侧边导航
*/
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Menu } from 'antd'
//侧边导航
import routeList from '../../router/menu'
  const { SubMenu } = Menu
class LeftNav extends Component {
    //map方法 根据routeList生成对应的标签组件
    getMenuNodes_map = (routeList) => {
        // eslint-disable-next-line array-callback-return
        return routeList.map(item => {
            if(!item.children){
                return(
                    <Menu.Item key={item.path} icon={item.icon}>
                        <Link to={item.path}>
                            {item.name}
                        </Link>
                        
                    </Menu.Item>
                )
            }else{
                return(
                    <SubMenu key={item.name} icon={item.icon} title={item.name}>
                        {
                            this.getMenuNodes(item.children)
                        }
                    </SubMenu>
                )
                
            }
        })
    }
    //reduce方法 根据routeList生成对应的标签组件
    getMenuNodes = (routeList) => {
        return routeList.reduce((pre, item) => {
            if(!item.children) {
               pre.push((
                <Menu.Item key={item.path} icon={item.icon}>
                    <Link to={item.path}>
                        {item.name}
                    </Link>
                </Menu.Item>
               )) 
            }else{
                pre.push((
                    <SubMenu key={item.name} icon={item.icon} title={item.name}>
                        {
                            this.getMenuNodes(item.children)
                        }
                    </SubMenu> 
                )) 
            }
            return pre
        },[])
    }
    render() {
        return (
            <div>
                <div className="top">
                    头部
                </div>
                <Menu
                // defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                >

                { 
                   this.getMenuNodes(routeList)
                }


                </Menu>
                LeftNav
            </div>
        );
    }
}

export default LeftNav;