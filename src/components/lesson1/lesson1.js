import React , { Component } from 'react';//importer 
import './lesson1.css';
import Faker from '../../services/Faker';
import Photos from '../photos/photos';
import Onephoto from '../onephoto/onephoto';
import Header from '../header/header';

class Lesson1 extends Component{
    constructor(props){
        super(props);
        //attributs
        this.state = {
            photos:[],
            name:"",
            url:"",
            bigimg:false,
            bigimgurl:"",
            style:{
                color:"gray"
            }
        };
    }

    componentDidMount(){
        let faker = new Faker();
        let allphotos = faker.createActressPhotos();
        this.setState({
            photos:allphotos
        });
    }

    sendPhoto = ()=>{
        if(this.state.url !== ""){
            let ob = {
                name:this.state.name,
                url:this.state.url,
            }
            let allphotos = this.state.photos;
            allphotos.unshift(ob);
            this.setState({
                photos:allphotos,
                name:"",
                url:""
            });
        }
    }


    switchBigimg = (allowed,url)=>{
        this.setState({
            bigimg:allowed,
            bigimgurl:url
        });
    }

    changeStyle = (s)=>{
        if(s === 1){
            this.setState({
                style:{
                    color:"green",
                    fontSize:"25px"
                }
            });
        }
        if(s === 0){
            this.setState({
                style:{
                    color:"gray",
                    fontSize:"14px"
                }
            });
        }
    }

    render(){
        return (
            <div id="lesson1" className="bh">
                <Header router="" />
                
                <div className="container-fluid undernav">
                    <h2 className="text-center">Cours 1</h2>
                    <div className="row">
                        <div className="h4 col-12">
                            Actrices
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="nom" onChange={e => this.setState({ name: e.target.value })} value={this.state.name}/>
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="url" onChange={e => this.setState({ url: e.target.value })} value={this.state.url}/>
                        </div>
                        <div className="col-md-4">
                            <button type="button" className="btn btn-primary" onClick={(e)=>{this.sendPhoto()}}>Envoyer</button>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="border border-success rounded p-2">
                                <small className="pointer" style={this.state.style} onMouseOver={(e)=>{this.changeStyle(1)}} onMouseLeave={(e)=>{this.changeStyle(0)}}>Composant fils : Photos</small>
                                <Photos photos={this.state.photos} handleBigimage={this.switchBigimg.bind(this)} />
                            </div>
                        </div>
                    </div>
                </div>
                {
                    (this.state.bigimg === true)?(
                        <Onephoto url={this.state.bigimgurl} handleBigimage={this.switchBigimg.bind(this)} />
                    ):(
                        <span></span>
                    )
                }
            </div>
        );
    }
}
export default Lesson1;