import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import QueueAnim from 'rc-queue-anim';
import Cell from './../components/Cell/Cell';

class Follow extends Component {
    state={
        topdata:[],

    }
    componentWillMount(){
        window.axios({
            url:'/mumu/'+this.props.match.params.pathname,
            params:{_page:1,_limit:10}
        }).then(res=>{
            this.setState({topdata:res.data.data})
        })
    }
    render (){
        return (
            
                <div style={{marginTop:'49px'}}>
                <QueueAnim type='bottom' delay={100} duration={1000} forcedReplay={true}>

                    {
                        this.state.topdata.map((item,index)=>(
                            <Link to={'/detail/' + item.uniquekey } key={index} >
                                <Cell data={item} key={index} />
                            </Link>
                        ))
                    }
            </QueueAnim>
                </div>
            
        )
    }
}

export default Follow;