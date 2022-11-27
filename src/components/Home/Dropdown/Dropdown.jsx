import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCaretDownFill } from 'react-icons/bs'
import './Dropdown.css'

function dropdown () {
  const [state, setstate] = useState(false)
  const showDropdown = () => {
    setstate(true)
  }
  const hideDropdown = () => {
    setstate(false)
  }

  return (
        <>
            <div className="dropdown">
                <p className="dropdown-name" onMouseEnter={showDropdown} onMouseLeave={hideDropdown} >
                    <li className='hover-underline-animation-Navbar'>Game</li><li className='dropdown-icon'><BsCaretDownFill /></li>
                    {state
                      ? (<ul onMouseEnter={showDropdown}>
                        <div className='containerMenu'>
                            <li className='dropdown-menu'>
                                <Link
                                    to='/Information'
                                    className='hover-underline-animation-Navbar'
                                    >Alnair-Ro
                                </Link>
                            </li>
                            <li className='dropdown-menu'>
                                <Link
                                    to='/News'
                                    className='hover-underline-animation-Navbar'
                                    >News
                                </Link>
                            </li>
                            <li className='dropdown-menu'>
                                <Link
                                    to='/Downloads'
                                    className='hover-underline-animation-Navbar'
                                    >Downloads
                                </Link>
                            </li>
                        </div>
                      </ul>)
                      : null}
                </p>
            </div>
        </>
  )
}

export default dropdown
