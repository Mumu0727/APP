import React from 'react'
import { Spin } from 'antd';
import './../assets/css/loading.css'

let Loading = ()=>{
    return (
        <div className="example">
            <Spin />
        </div>
    )
}
export default Loading