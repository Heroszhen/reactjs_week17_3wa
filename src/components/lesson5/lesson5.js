import React,{useEffect,useState} from 'react';//importer 
import './lesson5.css';
import Header from '../header/header';
import Footer from '../footer/footer';
//import store from '../redux/store';
import Child from "./child/child";
import { useSelector,useDispatch } from 'react-redux';


const Lesson5 =(props)=>{
    const firstreducer = useSelector(state=>state.firstreducer);
    const [action,setAction] = useState({type:"addtask",value:""});
    const [tasks,setTasks] = useState(firstreducer.tasks);
    const [onetask,setOnetask] = useState("");
    const [displayson,setDisplayson] = useState(true);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        
        setAction({type:"addtask",value:onetask});
    },[onetask]);

    const onChangeInput = (e) =>{
        setOnetask(e.target.value);
    }

    const handleAction =(e)=>{
        if(onetask !== ""){
            setOnetask("");
            dispatch(action);
            setDisplayson(false);
            // setTimeout(()=>{
            //     setDisplayson(true);
            // },1);
        }else{
            alert("Veuillez mettre une tâche")
        }
    }

    const onChangeInput2 = (index) =>{
        setOnetask(index);
    }

    const deleteTask =(index)=>{
        dispatch({type:"removetask",value:index});
        setOnetask("");
    }

    return (
        <React.Fragment>
            <div id="lesson5" className="bh">
                <Header router={props['location']['pathname']} />
                <div className="container undernav">
                    <h2 className="text-center">Cours 5 : redux(1)</h2>
                    <div className="row mb-4">
                        <div className="col-12 mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Tâche</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" onChange={onChangeInput} value={onetask} />
                            <button type="button" className="btn btn-primary btn-sm mt-2" onClick={handleAction}>Ajouter</button>
                        </div>
                        <div className="col-md-6 mb-3">
                            <h4>Les tâches</h4>
                            {
                                tasks.map((value,key)=>{
                                    return (
                                        <article className="mb-2 h5" key={key}>
                                            - <button type="button" className="btn btn-danger btn-sm me-2" onClick={()=>{onChangeInput2(key);deleteTask(key)}}>Supprimer</button>{value}
                                        </article>
                                    )
                                })
                            }
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="border border-warning border-3 p-2 rounded">
                                {/* {
                                    displayson===true && (<Child />)
                                } */}
                                <Child />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}
export default Lesson5;