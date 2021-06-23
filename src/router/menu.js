import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
    FrownOutlined,
    FormatPainterOutlined,
    FireOutlined,
    IdcardOutlined
  } from '@ant-design/icons';
  
let menuList = [
    {
        path:"/admin/home",
        icon:<HomeOutlined/>,
        name:"首页"
    },
    {
        path:"/admin/produts",
        icon:<SettingFilled/>,
        name:"商品",
        children:[
            {
                path:"/admin/shop",
                icon:<SmileOutlined/>,
                name:"品类管理"
            },{
                path:"/admin/shopping",
                icon:<SyncOutlined/>,
                name:"商品管理"
            }
        ]
    },{
        path:"/admin/user",
        icon:<LoadingOutlined/>,
        name:"用户管理"
    },{
        path:"/admin/role",
        icon:<FrownOutlined />,
        name:"角色管理"
    },{
        path:"/admin/charts",
        icon:<FormatPainterOutlined />,
        name:"数据",
        children:[
            {
                path:"/admin/charts/bar",
                icon:<FireOutlined />,
                name:"圆柱体"
            },{
                path:"/admin/charts/pie",
                icon:<IdcardOutlined />,
                name:"折线图"
            }
        ]
    }
]
export default menuList