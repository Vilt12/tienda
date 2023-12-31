import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar.css";
export const Profile=()=>{
    const {user,isAuthenticated,isLoading}=useAuth0();
    if(isLoading){
        return <div>Loading...</div>
    }
    return(
        isAuthenticated&&(
            <div className="Profile-box">
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                
            </div>
        )
            
        
    )
}