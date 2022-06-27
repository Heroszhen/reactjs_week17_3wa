import React , { useEffect, useState } from 'react';//importer 
import './lesson2.css';
import Users from '../users/users';
import Header from '../header/header';
import Footer from '../footer/footer';

const Lesson2 =(props)=>{
    const [title,setTitle] = useState("title");
    const [compte,setCompte] = useState(0);
    const [users,setUsers] = useState([]);
    const [oneuser,setOneuser] = useState({civility:"",lastname:"",firstname:"",email:"",photo:""});
    const [action,setAction] = useState(1);
    const [index,setIndex] = useState(-1);

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers=()=>{
        fetch("https://randomuser.me/api/?results=5")
        .then(response=>{return response.json();})
        .then(json=>{
            setUsers(users=>users = json["results"]);
        });
    }

    const changeTitle = ()=>{
        setCompte(compte + 1)
        setTitle(title=>"title" + compte.toString());
    }

    const deleteUser = (index)=>{
        setUsers(users.filter((item,key )=> key !== index));
    }
   
    const createUser = (event)=>{
        event.preventDefault();
        let ob = {
            name:{
                first:oneuser.firstname,
                last:oneuser.lastname
            },
            email:oneuser.email,
            gender:oneuser.civility,
            picture:{
                thumbnail:oneuser.photo
            }
        }
        if(action === 1){
            setUsers([ob,...users]);
        }
        if(action === 2){
            let users_tmp = users;
            users_tmp[index] = ob;
            setUsers(users_tmp);
            setAction(1);
        }
        setOneuser({civility:"",lastname:"",firstname:"",email:"",photo:""});
    }

    const modifyUser = (index)=>{
        setAction(2);
        setIndex(index);
        let user = users[index];
        setOneuser({civility:user["gender"],lastname:user["name"]["last"],firstname:user["name"]["first"],email:user["email"],photo:user["picture"]["thumbnail"]});
    }

    return (
        <React.Fragment>
            <div id="lesson2" className="bh">
                <Header router={props['location']['pathname']} />
                <div className="container-fluid undernav">
                <h2 className="text-center">Cours 2 : hooks</h2>
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-primary me-2" onClick={changeTitle}>changer ce titre</button>{title}
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 mb-3">
                        {
                            (action===1)?(
                                <div className="h5 mb-2 text-center">Ajouter un utilisateur</div>
                            ):(
                                <div className="h5 mb-2 text-center">Modifier un utilisateur</div>
                            )
                        }
                        <form className="row">
                            <div className="col-md-4 mb-2">
                                <select className="form-select" id="civility" name="civility" onChange={e=>setOneuser({...oneuser,civility:e.target.value})} value={oneuser.civility}>
                                    <option value="" >Civilité</option>
                                    <option value="female">Madame</option>
                                    <option value="male">Monsieur</option>
                                </select>
                            </div>
                            <div className="col-md-4 mb-2">
                                <input type="text" className="form-control" id="lastname" name="lastname" placeholder="nom" onChange={(e)=>setOneuser({...oneuser,lastname:e.target.value})} value={oneuser.lastname}/>
                                {oneuser.lastname}
                            </div>
                             <div className="col-md-4 mb-2">
                                <input type="text" className="form-control" id="firstname" name="firstname" placeholder="prénom" onChange={(e)=>setOneuser({...oneuser,firstname :e.target.value})} value={oneuser.firstname}/>
                            </div>
                            <div className="col-md-6 mb-2">
                                <input type="text" className="form-control" id="email" name="email" placeholder="mail" onChange={(e)=>setOneuser({...oneuser,email : e.target.value})} value={oneuser.email}/>
                            </div>
                            <div className="col-md-6 mb-2">
                                <input type="text" className="form-control" id="photo" name="photo" placeholder="url" onChange={(e)=>setOneuser({...oneuser,photo : e.target.value})} value={oneuser.photo}/>
                            </div> 
                            <div className="col-12 text-end">
                                <button type="submit" className="btn btn-primary" onClick={(e)=>createUser(e)}>Envoyer</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12">
                        <div className="border border-danger rounded p-2">
                            <h5 className="text-danger">composant fils: users</h5>
                            <Users allusers={users} deleteuser={deleteUser} modifyuser={modifyUser} />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </React.Fragment>
    );
    
}
export default Lesson2;