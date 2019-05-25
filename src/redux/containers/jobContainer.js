import { connect } from "react-redux";
import Company from '../../components/company';
import Main from '../../components/main';
import {addJob} from '../jobs/jobAction';
import Editform from '../../components/editform';
import {JobListing} from '../jobs/jobAction';
import {EditJobs} from '../jobs/jobAction';

const mapStateToProps=(state)=>{
    return {       
        Job_Listing:state.jobs.data,
        dataJob: state.jobs.dataJob
           }
 }

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        addJob: (company_data) => dispatch(addJob(company_data)),
        JobListing: () => dispatch(JobListing()), 
        EditJobs: (edited_data) => dispatch(EditJobs(edited_data))
    }
}
export const company= connect(null, mapDispatchToProps)(Company);
export const main = connect(mapStateToProps, mapDispatchToProps)(Main);
export const editform = connect(null, mapDispatchToProps)(Editform);

