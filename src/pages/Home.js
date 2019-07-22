import React,{Component} from 'react';
import Banner from './../components/Banner'
import Nav from './../components/Nav'
import Cell from './../components/Cell/Cell'
import {Link} from 'react-router-dom'

class Home extends Component {
    state={
        banner:[],
        home:[],
    }
    componentDidMount(){
        
        window.axios({
            url:'/mumu/home'
        }).then(res=>{
            let { banner,home } = res.data.data[0]
            this.setState({
                banner,home
            })
        })
    }

    render (){
        return (
            <div className='home' style={{background:"#ececec"}}>
                    <Banner banner={this.state.banner} />
                    <Nav />
                    {
                        this.state.home.map((item,index)=>(
                            <Link to={'/detail/' + item.uniquekey } key={index} >
                                <Cell data={item} key={index} />
                            </Link>
                        ))
                    }
                    
            </div>
        )
    }
}

export default Home