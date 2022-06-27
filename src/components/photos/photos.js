import React , { Component } from 'react';//importer 
import './photos.css';


class Photos extends Component{
    constructor(props){
        super(props);
        //attributs
        this.state = {
            photos:[]
        };
    }

    componentDidMount(){
    }

    sendUrl = (url)=>{
        this.props.handleBigimage(true,url);
    }

    render(){
        return (
            <div id="photos" className="bh">
                <div className="containe-fluid">
                    <div className="row">
                        {
                            this.props.photos.map((value,key)=>{
                                return (
                                    <article className="col-6 col-md-3 col-lg-2 mb-3" key={key}>
                                        <div>{value.name}</div>
                                        <img src={value.url} alt="" onClick={(e)=>{this.sendUrl(value.url)}} className="pointer" />
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default Photos;