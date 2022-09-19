import React from "react";
import "./LogInPage.css";
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function LogInPage(){
    let navigate = useNavigate();
    const[user, setUser] = useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
       setUser({...user,[e.target.name]:e.target.value});
    }
    const submitForm=(e)=>{
        e.preventDefault();

        const sendData ={
            email:user.email,
            password:user.password
        }
        console.log(sendData);
        axios.post('http://localhost/testOmobio/bizlogic/login.php',sendData)
        .then((result)=>{
            if(result.data.Status === '200'){
                window.localStorage.setItem('email',result.data.email);
                window.localStorage.setItem('username',result.data.username);
                navigate('/UserDetailsPage');
            }
             else{
                 alert('Invaild User');
            }
        })
    }

    return(
        <body class="text-center">
            <main class="form-signin w-100 m-auto">
                <form onSubmit={submitForm}>
                <h1 class="h3 mb-3 fw-normal">Sign In</h1>
            
                <div class="form-floating">
                    <input 
                        type="email" 
                        name="email" 
                        class="form-control" 
                        id="floatingInput" 
                        placeholder="name@example.com"
                        onChange={handleChange} value={user.email}/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input 
                        type="password" 
                        name="password" 
                        class="form-control" 
                        id="floatingPassword" 
                        placeholder="Password"
                        onChange={handleChange} value={user.password}/>
                    <label for="floatingPassword">Password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                {/* link to UserDetailsPage */}
                </form>
            </main>
      </body>
    );
}

export default LogInPage;

