import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div className="foot">

                <div className="col-md-3">
                    <h4>About us</h4>
                </div>
                <div className="col-md-3">
                    <h4> Policy And Service</h4>
                </div>
                <div className="col-md-3">
                    <h4> User Agreement</h4>
                </div>
                <div className="col-md-3">
                    <h4> Terms And Conditions</h4>
                </div>
            </div>
        )
    }
}
export default Header