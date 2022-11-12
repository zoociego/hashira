import './Register.css'
import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineClose } from 'react-icons/ai'

const Register = (props) => {
  return (
    <>
        <div className='ContainerP'>
            <div className='ContainerS'>
            <AiOutlineClose className="exit" onClick={props.handleClickRegister}/>
                <form action='../Home.jsx' className="FormR" method="post">
                    <p className="Registro">Registro</p>
                    <input type="text" className="usuario input" placeholder='Username' />
                    <input type="text" className="Correo input" placeholder='Correo Electronico' />
                    <input type="password" className="contraseña input" placeholder='Password' />
                    <input type="password" className="confirmar input" placeholder='Confirm Password' />
                    <div >
                        <input type="submit" className="boton input" value="Registrarse" />
                    </div>
                </form>
            </div>
        </div>
    </>

  )
}

Register.defaultProps = {
  handleClickRegister: false
}

Register.propTypes = {
  handleClickRegister: PropTypes.bool
}

export default Register
