import "./login.css"
function Login() {
    return(
        <div className="box-login">
         <form action="">
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/4745/4745657.png" alt="" />
            </div>
            <div>
                Iniciar sesion
            </div>
            <input placeholder="Gmail" type="text" />
            <input placeholder="Contraseña" type="password" />
         </form>
        </div>
    )
}
export default Login;