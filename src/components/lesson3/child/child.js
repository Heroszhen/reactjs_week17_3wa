import React , { useEffect, useContext } from 'react';//importer 
import { Lesson3Context } from '../lesson3';
import Grandson from '../grandson/grandson';

const Child =(props)=>{
    const sentence = useContext(Lesson3Context);
    useEffect(()=>{
        
    },[]);

    return (
        <React.Fragment>
            <div id="lesson3_child">
                <div className="container-fluid">
                    <h4 className="text-center">Cours 3 _ enfant</h4>
                    <div className="row">
                        <div className="col-12">
                            {sentence}
                        </div>
                        <div className="col-12 pt-2">
                            <div className="border border-primary rounded p-3">
                                <Grandson />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
    
}
export default Child;