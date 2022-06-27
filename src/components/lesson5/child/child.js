import React,{useEffect } from 'react';//importer 
//import store from '../../redux/store';
import { useSelector } from 'react-redux';

//https://www.youtube.com/watch?v=J7HVcH-HMH0
const Child =(props)=>{
    //const [tasks,setTasks] = useState(props.tasks);
    const tasks2 = useSelector(state=>state.firstreducer.tasks)
    useEffect(()=>{
        // console.log(props)
        // setTasks(props.tasks)
    },[props]);

    return (
        <React.Fragment>
            <div id="lesson5_child">
                <div className="container">
                    <h4 className="text-center">Cours 5 _ Enfant</h4>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <h5>Les tâches</h5>
                            {
                                tasks2.map((value,key)=>{
                                    return (
                                        <article className="mb-2 h5" key={key}>
                                            - {value}
                                        </article>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Child;