import React , { useEffect } from 'react';//importer 
import './users.css';

const Users = (props) =>{
    useEffect(()=>{
    },[])

   
    return (
        <React.Fragment>
            <div id="users" className="bh">
                {props.allusers.length} utilisateurs
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Civilité</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            props.allusers.map((value,key)=>{
                                return (
                                    <tr className="mb-3" key={key}>
                                        <td>
                                            {value['name']['first']}
                                        </td>
                                        <td>
                                            {value['name']['last']}
                                        </td>
                                        <td>
                                            {value['email']}
                                        </td>
                                        <td>
                                            {
                                                (value["gender"]==='male')?(
                                                    <div>Monsieur</div>
                                                ):(
                                                    <div>Madame</div>
                                                )
                                            }
                                        </td>
                                        <td>
                                            <img src={value['picture']['thumbnail']} alt="" />
                                        </td>
                                        <td>
                                            <div className="mb-2">
                                                <button type="button" className="btn btn-success btn-sm" onClick={()=>props.modifyuser(key)}>Modifier</button>
                                            </div>
                                            <button type="button" className="btn btn-danger btn-sm" onClick={()=>props.deleteuser(key)}>Supprimer</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    ); 
}
export default Users;