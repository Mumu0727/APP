import React, {Component} from 'react';
import './../assets/css/detail.css'

class Detail extends Component {
    state = {
        __html:''
    }
    componentDidMount(){
        // console.log(this.props.match.url)
        window.axios({
            url:"/mumu"+this.props.match.url
        }).then(res=>this.setState({__html:res.data.data.content}))
    }

    render (){
        return (
            <div className='detail' dangerouslySetInnerHTML={this.state} ket='a'>
  
            </div>
        )
    }
}

export default Detail