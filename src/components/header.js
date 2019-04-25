import React from 'react'

class Header extends React.Component {
    render() {
        return <div className="header">
            <a href="#" className="image">Image</a>
            <div className="header-right">
                <a href="#">Login</a>
                <a href="#">Sign out</a>
            </div>
        </div>

    }
}
export default Header