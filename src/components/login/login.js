import React , { useEffect,useState } from 'react';//importer 
import './login.css';
import GoogleLogin from 'react-google-login';
import StoreService from '../../services/Store';
import {
    Link,
    useHistory 
} from "react-router-dom";

const Login = props =>{
    const [email,setEmail] = useState("");
    const history = useHistory();

    useEffect(()=>{
    },[])

    const responseGoogle = (response) => {
        //console.log(response.getBasicProfile());
        let profile = response.getBasicProfile();
        let email = profile["Gt"];
        //console.log(email)
        let ss = new StoreService();
        ss.setStorage("user",email);
        history.push("/");
    }
   
    return (
        <React.Fragment>
            <div id="login" className="bh">
                <div className="container-fluid mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-5 col-lg-4">
                            <h2 className="text-center mb-3">Connectez-vous</h2>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Mail</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                                <div className="mt-3">
                                    <button type="button" className="btn btn-primary fullwidth" disabled={email===''}>Se connecter</button>
                                </div>
                            </div>
                            <div className="mb-3">
                                <Link className="btn btn-dark fullwidth" to='/'>Accueil</Link>
                            </div>
                            <div id="btn_wrap">
                                <GoogleLogin
                                    clientId="624676027397-5kcrrimdkmvovg87lii3sc77ed36re0o.apps.googleusercontent.com"
                                    buttonText="Connexion avec Gmail"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </div>
                        </div> 
                    </div> 
                </div> 
                
            </div>
        </React.Fragment>
    ); 
}
export default Login;