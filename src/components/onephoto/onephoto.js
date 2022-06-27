import React , { Component } from 'react';//importer 
import './onephoto.css';


class Onephoto extends Component{
    constructor(props){
        super(props);
        //attributs
        this.state = {
            url:""
        };
    }

    componentDidMount(){
    }

    closeBigimg = ()=>{
        this.props.handleBigimage(false,"");
    }
    
    render(){
        return (
            <div id="onephoto" className="bh">
                <img src={this.props.url} alt="" className="pointer" onClick={(e)=>{this.closeBigimg()}} />
            </div>
        );
    }
}
export default Onephoto;