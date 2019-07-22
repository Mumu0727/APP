
import {observable,action} from 'mobx';
import Axios from 'axios';



class Getdata {
    constructor(){
        
    }

    @observable data = {};

    @action getdata = (url) => {
        Axios({
            url:url,
        }).then(res=>{console.log()})
    }
}
export default Getdata