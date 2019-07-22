import React,{Component} from 'react';
import './../assets/css/banner.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
class Banner extends Component {
    
    render (){
        var settings = {   
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
          };
        return (
        <div style={{minHeight:'270px',background:'#999'}}>
            <Slider {...settings} >
                {
                    this.props.banner.map((item,index)=>(
                        <div className='banner-box' key={item.uniquekey}>
                            <img src={item.thumbnail_pic_s} alt={item.title} />
                            <h3>{item.title}</h3>
                        </div>
                    ))
                }
            </Slider>
        </div>
        )
    }
}

export default Banner