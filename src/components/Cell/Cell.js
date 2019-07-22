import React,{Component} from 'react';
import './cell.css'
class Cell extends Component {
    
    render (){
        return (
            
            this.props.data ?

            
            <div className='cell' key='q'>

                <div className='cell-top'>
                    <div className='cell-top_left'>
                        {this.props.data.author_name}
                    </div>
                    <div className='cell-top_right'>
                    {this.props.data.category}
                    </div>
                </div>

                <div className='cell-centent'>
                    <div className='cell-centent_left'>    
                        <h3 className='cell-centent_title'>
                        {this.props.data.title}
                        </h3>
                    </div>
                    <div className='cell-centent_imgbox'>
                        <img src={this.props.data.thumbnail_pic_s} alt={this.props.data.title} />
                    </div>
                </div>
            </div> 
            : null
                
            
        )
    }
}

export default Cell