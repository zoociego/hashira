import './Login.css';
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'


const Login = (props) => {
    return(
    <>
        <div className='ContainerPrincipal'>
            <div className='ContainerSecundario'>
            <AiOutlineClose className="exit" onClick={props.handleClickLogin}/>
                <form action='../Home.jsx' className="Form" method="post">
                    <p className="Login">Iniciar sesión</p>
                    <input type="text" className="User input" placeholder= 'Username' />
                    <input type="password" className="Password input" placeholder='Password' />
                    <div >
                        <input type="submit" className="button input" value="Iniciar sesión" />
                        <br />
                        <br />
                        <a className="rememberpw" href='/'>Forgot your password</a>
                        <button 
                            className="Register" 
                            onClick={props.handleClickRegister}
                            >Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
        
    </>
)}

export default Login; 