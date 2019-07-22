import React,{ Component } from 'react';
import { Link } from 'react-router-dom'
import { Icon } from 'antd';
import Drawer from './Drawer';
import './../assets/css/Nav.css'

import QueueAnim from 'rc-queue-anim';
class Nav extends Component {
  state = {
    visible: false,
    nav:[
      {title:'国际',pathname:'guoji',type:'icon-guoji'},
      {title:'头条',pathname:'top',type:'icon-toutiao_yixuan'},
      {title:'科技',pathname:'keji',type:'icon-keji1'},
      {title:'国内',pathname:'guonei',type:'icon-xianluxuanxiangqiaguonei'},
      {title:'财经',pathname:'caijing',type:'icon-shangyecaijing'},
      {title:'娱乐',pathname:'yule',type:'icon-yule1'},
      {title:'体育',pathname:'tiyu',type:'icon-tubiao'}
    ]
    
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  
    render(){
        const IconFont = Icon.createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_1298394_d4opjpb989k.js',
          });
          return (
          <div>
             <div className="icons-list">
              <ul className='list-box'>
              
                  {
                    this.state.nav.map((item,index)=>(
                      <li className='icon-box' key={index} > 
                        <Link to={{pathname:'/follow/' + item.pathname}} >
                          <IconFont type={item.type} className='icon' />
                          <span className='list-text'>{item.title}</span>
                        </Link>
                      </li>
                    ))
                  }
                  
                  <li className='icon-box' onClick={this.showDrawer}>
                    <IconFont type="icon-toutiao1" className='icon' />
                      
                    <span className='list-text'>更多</span>  
                  </li>
                  
              </ul>
              
            </div>

            {
              this.state.visible ? 
              <QueueAnim type='bottom' delay={100} duration={1000} forcedReplay={true}>
              <Drawer onClose={this.onClose} key='q'/> 
              </QueueAnim>  

              : null
            }
           
          </div>
          )
    }
}
export default Nav