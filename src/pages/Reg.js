import React,{Component} from 'react';
import UcInput from '../components/Form/UcInput'
import { Link } from 'react-router-dom'


class Reg extends Component {
    state={
        user:'',
        password:'',
        tel:''
    }
    changeIpt = (ev)=>{
        this.setState({[ev.target.name]:ev.target.value})
    }
    reg = ()=>{
        window.axios({
            url:'/mumu/reg',
            data:{username:this.state.user,password:this.state.password,save:true},
            method:'POST'
        }).then(res=>{
            console.log(res)

            if(res.data.err === 0){
                this.props.history.push('/')
            }else{
                alert('注册失败')
            }
        })
    }
    render (){
        return (
            <div>
                <UcInput 
                form={
                    {purpose:'注册',
                    login:this.reg,
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
                            },{
                                name:'tel',
                                type:'tel',
                                placeholder:'手机号',
                                value:this.state.tel,
                                changeIpt:this.changeIpt
                            }]}}
                />
                <div className='router-btn'><Link to='/login' >登录</Link></div>
            </div>
        )
    }
}

export default Reg;