import React from 'react'
import Image from '../image.png'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                        <nav>
                            <div className="header-left">
                                <img src={Image} alt="applogo" id="logo"></img>
                            </div>
                            <div className="header-right">
                                <span><Link to='/'>Home</Link></span > 
                                <span><Link to='/signup'>Signup</Link></span>
                                <span><Link to='/login'>Login</Link></span>
                            </div>
                        </nav>
                </div>
            </div>
        )
    }
}
export default Header

