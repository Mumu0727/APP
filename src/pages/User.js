import React, {Component} from 'react';
import './../assets/css/user.css'

class User extends Component {
    state={
        data:{}
    }
    // componentWillMount(){
    //     window.axios({
    //         url:'/mumu/user'
    //     }).then(res=>{console.log(res.data.data)
    //         this.setState({data:res.data.data})
    //     })
    // }
    render (){
        let { fans,follow,icon,nikename } = this.props.data
        return (
            <div className='user'>
                <div className='user-box'>
                    <div className='user-icon-box' ><img alt='头像' className='user-icon' src={ 'http://localhost:3000' + icon}/></div>
                    <div className='user-name'>{ nikename }</div>
                    <div className='user-signature'>
                        我坐在水屋下边的平台看着大海，吹着海风，真的是太喜欢了。夜晚有好多小白鲨鱼，好多种鱼。
                    </div>
                    <ul className='pet-grzx'>
                        <li className='pet-grzx_box'>
                            {fans}
                            <span className='pet-grzx_num'>喜欢</span>
                        </li>
                        <li className='pet-grzx_box'>
                            {follow}
                            <span className='pet-grzx_num'>关注</span>
                        </li>
                        <li className='pet-grzx_box'>
                            4
                            <span className='pet-grzx_num'>文章</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default User