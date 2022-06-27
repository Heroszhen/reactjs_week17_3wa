import React , { useEffect, useState, createContext, useRef } from 'react';//importer 
import './lesson3.css';
import Header from '../header/header';
import Child from './child/child';
import Footer from '../footer/footer';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const Lesson3Context = createContext(null);

const Lesson3 =(props)=>{
    
    const [sentence,setSentence] = useState("Zhen est le plus grand héros du monde.");
    const [value, setValue] = useState('');
    const input = useRef(null);

    useEffect(()=>{
        console.log(input)
    },[sentence]);

    return (
        <React.Fragment>
            <div id="lesson3" className="bh">
                <Header router={props['location']['pathname']} />
                <div className="container undernav">
                    <h2 className="text-center">Cours 3 : useContext et useRef</h2>
                    <div className="row">
                        <div className="col-12">
                            <div className="fw-bold">{sentence}</div>
                            <div className="mb-3 mt-1">
                                <input type="text" className="form-control"  placeholder="input = useRef(null);" onChange={(e)=>setSentence(e.target.value)} ref={input}/>
                            </div>
                        </div>
                        <div className="col-12 mt-2 pt-2">
                            <div className="border border-primary rounded p-3">
                                <Lesson3Context.Provider value={sentence}>
                                    <Child />
                                </Lesson3Context.Provider>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 mb-3 fw-bold">
                            Editeur de texte riche
                        </div>
                        <div className="col-md-6 mb-3">
                            <ReactQuill theme="snow" value={value} onChange={setValue}/>
                        </div>
                        <div className="col-md-6">
                            <div className="content border border-dark rounded p-2" dangerouslySetInnerHTML={{__html: value}} style={{'minHeight':'90px'}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
    
}
export default Lesson3;