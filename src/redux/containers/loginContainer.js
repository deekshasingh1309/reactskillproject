import  {connect} from  "react-redux";
import Login from '../../components/login';
import {login} from '../users/userAction'

const mapStateToProps=(state)=>{
   return {       
       currentUser:state.user.data
          }
}

const mapDispatchToProps=(dispatch)=>{
    return {
      
        login: (user)=>dispatch(login(user)) ,

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);