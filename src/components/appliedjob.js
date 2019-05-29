import React from 'react'
import { withRouter } from "react-router-dom";

class AppliedJob extends React.Component {
  constructor() {
    super()
    this.state = {
     user: JSON.parse(localStorage.getItem('Currentuser'))
    }
  }

componentWillMount() {
    if (JSON.parse(localStorage.getItem('Currentuser'))) {
        this.props.get_applyjob({ user: Currentuser })
    }
}

}

export default withRouter(AppliedJob)