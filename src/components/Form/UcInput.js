import React,{ Component } from "react";
import './reg.css'

class UcInput extends Component {
    render (){
        let {purpose,inputs,rememberme,login} = this.props.form
        return (
            <div className='reg'>
                <div className='reg-box'>
                    <h3 className='reg-box_top'>{purpose}</h3>
                    {
                        inputs.map((item,index)=>(
                            <input 
                                name={item.name}
                                onChange={item.changeIpt}
                                value={item.value}
                                type={item.type} 
                                className='form-input_txt' 
                                placeholder={item.placeholder} 
                                key={index} />
                        ))
                    }
                    {
                        rememberme ? 
                        <div className='rememberme'>
                            <input type='checkbox' id='brand' value/>
                            <label htmlFor='brand'>
                                <span></span>
                                记住我
                            </label>
                        </div> : null
                    }
                    
                    <div className='btn' onClick={login} >{purpose}</div>

                </div>
                
            </div>
        )
    }
}

export default UcInput;