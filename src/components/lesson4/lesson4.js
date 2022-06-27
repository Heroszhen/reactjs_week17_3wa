import React , { useEffect, useState, useReducer } from 'react';//importer 
import './lesson4.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const mystate = 0;
const reducer = (state,action) =>{
    switch(action){
        case 'increment':
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
}


//https://www.youtube.com/watch?v=OZuY1mNgdBE&list=PLmYBIzXGbEzIAGkcwOcIW4rHHvp2SlU5s&index=10
const Lesson4 =(props)=>{

    const [count,dispatch] = useReducer(reducer,mystate);

    useEffect(()=>{
        
    },[]);

    return (
        <React.Fragment>
            <div id="lesson4" className="bh">
                <Header router={props['location']['pathname']} />
                <div className="container undernav">
                    <h2 className="text-center">Cours 4 : useReducer</h2>
                    <div className="row justify-content-center mb-4">
                        <div className="col-12 h4">1er exemple : </div>
                        <div className="col-12">
                            <button type="button" className="btn btn-success me-2" onClick={()=>dispatch('increment')}>+</button>    
                            {count}
                            <button type="button" className="btn btn-danger ms-2" onClick={()=>dispatch('decrement')}>-</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
    
}
export default Lesson4;