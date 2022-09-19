import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './UserDetailsPage.css';
import { useNavigate } from "react-router-dom"; 

function UserDetailsPage(){
  const [user, setUser] = useState([]);
    
      let navigate = useNavigate();
    

      const getUser = () => {
        axios.get("http://localhost/testOmobio/bizlogic/login.php").then((response) => {
          setUser(response.user);
        });
      };

  return(
    <div className="user">
          <button onClick={getUser}>Show User Details</button>
          <h3>
          </h3>
          {user.map((val, key) => {
            return (
              
              <div className="userDetails">
                <div>
                  <h3>Email: {val.email}</h3>
                  <h3>ID: {val.id}</h3>
                  <h3>Hanlde: {val.username}</h3>
                  <h3>Name: {val.name}</h3>
                </div>
               
              </div>
            );
          })}
        </div>
  );
}

export default UserDetailsPage;



