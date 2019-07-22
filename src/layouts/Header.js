import React,{Component} from 'react';
import './../assets/css/header.css'
import QueueAnim from 'rc-queue-anim';
import {Link} from 'react-router-dom'



class Header extends Component {
    state = { visible: false }
    showDrawer = () => {
        this.setState({
          visible: !this.state.visible,
        });
      }

      logout = ()=>{
        window.axios({
          url:'/mumu/logout',
          method: 'PUT'
        }).then(res=>{
          if(res.data.err === 0){
            this.props.props.history.push('/home')
            console.log(this.props)
          }
        })
      }
      componentWillReceiveProps(){
        this.setState({
          visible: false,
        });
      }

    render (){
    console.log()
        return (
            <div className="header">
                <div className='header-box'>
                    <div className='header-go_back' onClick={()=>this.props.props.history.go(-1)} >
                        
                    </div>
                    <div className='header-title'>
                        {this.props.username}
                    </div>
                    <div className='header-menu' onClick={this.showDrawer}>
                        
                    </div>
                </div>
                {
                  this.state.visible && 
                  <QueueAnim type='right' delay={100} duration={1000} forcedReplay={true} >

                <div className='xiala' key='a'>
                    <Link to='/home' className='xiala-text' key='a'> 首页 </Link>
                    <Link to='/user' className='xiala-text' key='b'> 个人中心 </Link>
                    <Link to='/login' className='xiala-text' key='d'> 登录 </Link>
                    <p className='xiala-text' key='c' onClick={this.logout}> 注销 </p>
                </div>
                </QueueAnim>
              } 
            </div>
        )
    }
}

export default Header