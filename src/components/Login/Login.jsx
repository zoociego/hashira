import './Login.css';
import { AiOutlineClose } from 'react-icons/ai'

const Login = () => {
    return(
    <>
        <div className='ContainerPrincipal'>
            <div className='ContainerSecundario'>
            <AiOutlineClose className="exit"/>
                <form action='../Home.jsx' className="Form" method="post">
                    <p className="Login">Iniciar sesión</p>
                    <input type="text" className="User input" placeholder='Username' />
                    <input type="password" className="Password input" placeholder='Password' />
                    <div >
                        <input type="submit" className="button input" value="Iniciar sesión" />
                        <br />
                        <br />
                        <a className="rememberpw" href='/'>Forgot your password</a>
                        <a className="Register">Register</a>
                    </div>
                </form>
            </div>
        </div>
        
    </>
)}

export default Login; 