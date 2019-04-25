import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Company"/>
                <input type="text" placeholder="Location"/>
                <input type="text" placeholder="Jobs"/>
                <button>Filter</button>
            </div>
        )
    }
}
export default Header