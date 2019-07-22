import React,{Component} from 'react';
import UcInput from '../components/Form/UcInput'
import { Link } from 'react-router-dom'



class Reg extends Component {
    state={
        user:'',
        password:'',
        data:{}
    }
    changeIpt = (ev)=>{
        this.setState({[ev.target.name]:ev.target.value})
    }
    login = ()=>{
        window.axios({
            url:'/mumu/login',
            data:{username:this.state.user,password:this.state.password,save:true},
            method:'POST'
        }).then(res=>{
            console.log(res)

            if(res.data.err === 0){
                this.props.history.push('/user')
            }else{
                alert('登录失败')
            }
        })
    }
    render (){
        return (
            <div>
                <UcInput 
                form={
                    {purpose:'登录',
                    login:this.login,
                    rememberme:true,
                    inputs:[
                            {
                                name:'user',
                                type:'text',
                                placeholder:'用户名',
                                value:this.state.user,
                                changeIpt:this.changeIpt
                            },{
                                name:'password',
                                type:'password',
                                placeholder:'密 码',
                                value:this.state.password,
                                changeIpt:this.changeIpt
                            }]}}
                />
                <div className='router-btn'  >
                    <Link to='/reg' >注册</Link>
                
                </div>
            
            </div>
        )
    }
}

export default Reg;