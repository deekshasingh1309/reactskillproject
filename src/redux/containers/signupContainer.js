import { connect } from "react-redux";
import Signup from '../../components/signup';
import {signup} from '../users/userAction';

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        signup: (post_data) => dispatch(signup(post_data)),

    }
}
export default connect(null, mapDispatchToProps)(Signup);