import React, { useEffect, useState } from 'react';//importer 
import './header.css';
import {
    Link
} from "react-router-dom";
import StoreService from '../../services/Store';

const Header = (props) =>{
    const [isconnected,setIsconnected] = useState(-1);
    const [timer,setTimer] = useState(null);
    const ss = new StoreService();

    useEffect(()=>{
        if(ss.getStorage("user"))setIsconnected(1);
        else setIsconnected(0);
        setTimer(checkConnexion);
    },[isconnected]);

    //destroyed 
    useEffect(() => {
        return () => {
            clearTimeout(timer);
            setTimer(null);
        };
      }, []);

    const checkConnexion =()=>{
        return setInterval(()=>{ 
            if(ss.getStorage("user"))setIsconnected(1);
            else setIsconnected(0);
        }, 1000);
    }

    const deconnect=()=>{
        ss.removeStorage("user");
        setIsconnected(0);
    }
    return (
        <React.Fragment>
            <div id="myheader">
                <nav className="navbar navbar-expand-md navbar-light bg-primary fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Reactjs</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={props.router === "" ? "nav-link active" : "nav-link"} to='/'>Lesson 1</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={props.router === "/lesson2" ? "nav-link active" : "nav-link"} to='/lesson2'>Lesson 2</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={props.router === "/lesson3" ? "nav-link active" : "nav-link"} to='/lesson3'>Lesson 3</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={props.router === "/lesson4" ? "nav-link active" : "nav-link"} to='/lesson4'>Lesson 4</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={props.router === "/lesson5" ? "nav-link active" : "nav-link"} to='/lesson5'>Lesson 5</Link>
                                </li>
                            </ul>
                            <div className="d-flex">
                            {
                                (isconnected===1)?(
                                    <a className="nav-link btn btn-danger btn-sm text-white" href="#" onClick={deconnect}>Déconnexion</a>
                                ):(
                                    (isconnected===0)?(
                                        <Link className="nav-link btn btn-success btn-sm text-white" to='/connexion'>Connexion</Link>
                                    ):(
                                        <span></span>
                                    )   
                                )
                            }
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
    
}
export default Header;