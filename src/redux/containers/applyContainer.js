import { connect } from "react-redux";
import { apply_job, get_applyjob, get_applyjob_company, get_applyjob_user } from '../apply/applyAction'
import content from "../../components/content";

const mapStateToProps = (state) => {
    return {
        apply: state.apply.data,
        appliedData: state.apply.appliedData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        apply_job: (data) => dispatch(apply_job(data)),
        get_applyjob: (user_id) => dispatch(get_applyjob(user_id)),
      //  get_applyjob_company: (company_name) => dispatch(get_applyjob_company(company_name)),
        get_applyjob_user: (user_id) => dispatch(get_applyjob_user(user_id))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(content);