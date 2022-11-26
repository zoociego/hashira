import { React } from 'react'
import PropTypes from 'prop-types'
import './Login.css'
import { AiOutlineClose } from 'react-icons/ai'

const Login = (handleClickLogin) => {
  return (
    <>
        <div className='ContainerPrincipal'>
            <div className='ContainerSecundario'>
            <AiOutlineClose className="exit" onClick={handleClickLogin.handleClickLogin}/>
                <form action='../Home.jsx' className="Form" method="post">
                    <p className="Login">Iniciar sesión</p>
                    <input type="text" className="User input" placeholder= 'Username' />
                    <input type="password" className="Password input" placeholder='Password' />
                    <div >
                        <br />
                        <br />
                        <input type="submit" className="button input" value="Iniciar sesión" />
                        <br />
                        <br />
                        <br />
                        <a className="rememberpw" href='/'>Forgot your password</a>
                        <button
                            className="Register"
                            onClick={handleClickLogin.handleClickRegister}
                            >Register
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </>
  )
}

Login.defaultProps = {
  handleClickLogin: false
}

Login.propTypes = {
  handleClickLogin: PropTypes.bool
}

export default Login
