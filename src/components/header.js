import React from 'react'
import Image from '../image.png'
import { Link } from 'react-router-dom'
import isLoggedin from './isLoggedin'

class Header extends React.Component {
    user = JSON.parse(localStorage.getItem('myData'))
    logout = () => {
        localStorage.removeItem('myData')
        localStorage.removeItem('Currentuser')
        localStorage.removeItem('user_type')
        localStorage.removeItem('isLoggedin')
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div className="header">
                        <nav>
                            <div className="header-left">
                                <img src={Image} alt="applogo" id="logo"></img>
                                <span><Link to='/'>Home</Link></span > 
                            </div>
                            <div className="header-right">
                                {
                                    !isLoggedin() && <span><Link to='/signup'>Signup</Link></span>
                                }
                                {
                                    !isLoggedin() && <span><Link to='/login'>Login</Link></span>
                                }
                                {
                                    isLoggedin() && this.user.roles === 3 &&  <span><Link to='/addjobs'>Add Job</Link></span>
                                }
                                {
                                    isLoggedin() &&  <span><Link to='/login'></Link></span> && <span>Welcome {this.user.name}</span>
                                }
                                {
                                    isLoggedin() &&  <span><Link to='/' onClick={this.logout}>Logout</Link></span>
                                }
                            </div>
                        </nav>
                </div>
            </div>
        )
    }
}
export default Header

