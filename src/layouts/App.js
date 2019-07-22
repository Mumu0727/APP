import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import AuthUser from './../guard/AuthUser'

import './../library/font'
import './../assets/css/base.css'

import Header from './Header'
// import Loading from './../components/Loading'
import Fooder from './Fooder'
import Reg from './../pages/Reg'
import Detail from './../pages/Detail'
import User from './../pages/User'
import Follow from '../pages/Follow'
import Home from './../pages/Home'
import Login from './../pages/Login'




class App extends Component {
    state={
        bHeader:false,
        title:'',
        loading:true
    }
    
    checkpath(path){
        if(/home/.test(path)){this.setState({bHeader:false})}
        if(/follow|detail|user|login|reg/.test(path)){this.setState({bHeader:true})}
    }

    componentWillReceiveProps(nextProps){
        let path = nextProps.location.pathname
        this.checkpath(path)
    }
    componentWillMount(){
        let path = this.props.location.pathname
        this.checkpath(path)
    }
    
    render(){
        return (
            <div className="App" key='a'>
                
                {
                    this.state.bHeader && <Header props={this.props} kry='b' />
                }
                    <Switch key='a'>
                        <Route path="/home" component={Home} />
                        {/* <Route path="/user" component={User} /> */}
                        <AuthUser path="/user" component={User} />
                        <Route path="/login" component={Login} />
                        <Route path="/reg" component={Reg} />
                        <Route path="/detail/:id" component={Detail} />
                        <Route path={'/follow/:pathname'} component={Follow} />
                        <Redirect exact from="/" to="/home" />
                        {/* <Route component={ErrorPage}/> */}
                    </Switch>
                <Fooder key='c' />
            </div>

        )
    }
}

export default App