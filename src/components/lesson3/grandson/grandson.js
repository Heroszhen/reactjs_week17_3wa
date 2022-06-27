import React , { useEffect, useContext } from 'react';//importer 
import { Lesson3Context } from '../lesson3';
const Grandson =(props)=>{
    const sentence = useContext(Lesson3Context);
    useEffect(()=>{
        
    },[]);

    return (
        <React.Fragment>
            <div id="lesson3_grandson">
                <div className="container-fluid">
                    <h5 className="text-center">Cours 3 _ petit-enfant</h5>
                    <div className="row">
                        <div className="col-12">
                            {sentence}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
    
}
export default Grandson;