import React,{Component} from "react"
import propType from 'prop-types';
import { Icon } from 'antd';
import {Link} from 'react-router-dom'

import './../assets/css/Nav.css'


class Drawer extends Component{
    static propType = {
        onClose: propType.func,
    }
    state={
        drawer:[
            {title:'国际',pathname:'guoji',type:'icon-guoji-copy'},
            {title:'头条',pathname:'top',type:'icon-toutiao_yixuan'},
            {title:'科技',pathname:'keji',type:'icon-keji1-copy'},
            {title:'国内',pathname:'guonei',type:'icon-xianluxuanxiangqiaguonei'},
            {title:'财经',pathname:'caijing',type:'icon-shangyecaijing'},
            {title:'娱乐',pathname:'yule',type:'icon-yule1'},
            {title:'体育',pathname:'tiyu',type:'icon-tubiao'},
            {title:'时尚',pathname:'shishang',type:'icon-shishang'},
            {title:'军事',pathname:'junshi',type:'icon-1122-v2-15'},
      
          ]
    }
    render() {
        const IconFont = Icon.createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_1298394_esv7vlrh8ul.js',
          });
        return (
                <div 
                className='drawer' key='a'
                
                >
                    <div className='drawer-end' onClick={this.props.onClose}>
                    <IconFont type="icon-guanbi"/>
                    </div>
                    <ul className='drawer-box'>
                        {
                            this.state.drawer.map((item,index)=>(
                                <li className='drawer-icon_box' key={index}>
                                    <Link to={{pathname:'/follow/' + item.pathname}} >
                                    <IconFont type={item.type} className='drawer-icon' />
                                    <span className='drawer-text'>{item.title}</span>
                                    </Link>
                                </li>
                            ))
                        }                  
                    </ul>
                </div>
        )
    }

}
// Drawer.defaultProps = {
// }
// Drawer.propType = {
//     onClose: propType.func
// }
export default Drawer

