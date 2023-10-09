
import { useAuth0 } from "@auth0/auth0-react";





function PerfilesAdmin() {
      const{isAuthenticated,user,profile}=useAuth0();
    
   
    return(
    
         <>

      {isAuthenticated&&(
            <div className="Profile-box">
                <img src={user.picture} alt={user.name} />
              
                
            </div>
        )}
        </>
    )
}

export default PerfilesAdmin;