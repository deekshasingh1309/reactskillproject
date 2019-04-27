import React from 'react'
import Image from '../image.png'

class Header extends React.Component {
    render() {
        return <div className="header">
            <img src={Image} alt="applogo" id="logo"></img>
            <div className="header-right">
                <a href="#" >SIGNUP</a>
                <a href='#' >LOGIN</a>
            </div>
        </div>

    }
}
export default Header

