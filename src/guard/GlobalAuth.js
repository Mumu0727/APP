import React from "react";
import axios from "axios";
import {Redirect,Route} from 'react-router-dom';

//全局介权
class GlobalAuth extends React.Component{
  constructor(){
    super();

    this.state={
      hasAuth:false,//是否发送过授权请求
      auth:false,//授权结果
      data:{}
    };

    //axios
    axios({
      url:'/data/user.json'
    }).then(
      res=>this.setState({hasAuth:true,auth:res.data.auth,data:res.data.data})
    )
  }
  render(){
    if (!this.state.hasAuth) return null;

    let {component:Component, ...rest} = this.props;

    return <Route {...rest} render={(rest)=>(
      this.state.auth ? <Component {...rest} data={this.state.data} /> : <Redirect to="/login"/>
    )} />

  }
}

export default  GlobalAuth;