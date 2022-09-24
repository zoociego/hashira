import './Login.css';
import { AiOutlineClose } from 'react-icons/ai'

function displayRemover() {
    document.getElementsByClassName("Form")[0].style.display = "none";
}

const Login = () => {
    return(
    <form action='../Home.jsx' className="Form" method="post">
        <AiOutlineClose className="exit" onClick={displayRemover}/>
        <p className="Login">Iniciar sesión</p> 
        <input type="text" className="User input" placeholder='Username'/> 
        <input type="password" className="Password input" placeholder='Password'/>
        <div className="zapallo">
        <input type="submit" className="button input"  value="Iniciar sesión"/>
            <br />
            <br />
            <a className="rememberpw" href='/'>Forgot your password</a>
            <a className="Register" href='/'>Register</a>
        </div>
    </form>
)}

export default Login; 