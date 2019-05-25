import axios from 'axios';

export const JobData =(data) => {
    return {
        type: "JOBDATA",
        payload: data
    }
}

export const GetJob =(data) => {
    return {
        type: "AllData",
        payload: data
    }
}

export const EditJob =(data) => {
  return {
      type: "EDITED",
      payload: data
  }
}

export const addJob =(job)=>{
    console.log(job)
  return dispatch => {
    axios.post('http://localhost:8082/createjobs',job)
      .then((res) => {
        if (res.data.errors) {
          console.log(res.data.errors)
            window.alert(JSON.stringify(res.data.message))
        } else {
            dispatch(JobData(res.data))
        }
    }).catch((error) => {
        return error;
    }) 
  
  }
}


export const JobListing =()=>{
  return dispatch => {
    axios.get('http://localhost:8082/jobs')
      .then((res) => {
        if (res.data.errors) {
            window.alert(JSON.stringify(res.data.message))
        } else {
          dispatch(GetJob(res.data))
          
        }
    }).catch((error) => {
        return error;
    }) 
  
  }
}

export const EditJobs=(data)=> {
  return dispatch => {
    axios.put('http://localhost:8082/updatejobs',data)
    .then((res) => {
      if (res.data.errors) {
          window.alert(JSON.parse(res.data.message));
      }
      else {
              dispatch(EditJob(res.data));
            }
  }).catch((err) => {
      return err;
  })
  }
}

// function updateJob(id, company, profileType, designation, annualSalary, city) {
//   return dispatch => {
//     dispatch(request(id));
//     jobService.updateJob(id, company, profileType, designation, annualSalary, city)
//       .then((job) => {
//         if (job !== null) {
//           dispatch(alertActions.success('Job successfully updated'))
//           dispatch(success(job))
//           history.push('/')
//         }
//       })
//       .catch((error) => {
//         dispatch(failure(error));
//         dispatch(alertActions.error(error.message));
//       })
//   };
//   function request(job) { return { type: jobConstants.UPDATE_JOB_REQUEST, job } }
//   function success(job) { return { type: jobConstants.UPDATE_JOB_SUCCESS, job } }
//   function failure(error) { return { type: jobConstants.UPDATE_JOB_FAILURE, error } }

// }

// function applyJob(id, name, gender) {
//   return dispatch => {
//     dispatch(request(true));
//     jobService.applyJob(id, name, gender)
//       .then((res) => {
//         console.log(res)
//         if (res === 'Successful') {
//           dispatch(alertActions.success('Job successfully applied'))
//           setTimeout(() => {
//             dispatch(success(res))
//             history.push('/')
//           }, 500)
//         } else {
//           dispatch(alertActions.error(res))
//         }
//       })
//       .catch((error) => {
//         dispatch(failure(error));
//         dispatch(alertActions.error(error.message));
//       })
//   };
//   function request(res) { return { type: jobConstants.APPLY_JOB_REQUEST, res } }
//   function success(res) { return { type: jobConstants.APPLY_JOB_SUCCESS, res } }
//   function failure(error) { return { type: jobConstants.APPLY_JOB_FAILURE, error } }
// }

// function getAppliedJob(name) {
//   return dispatch => {
//     dispatch(request(name));
//     jobService.getAppliedJob(name)
//       .then((res) => {
//         dispatch(success(res));
//         history.push('/appliedlist')
//       })
//       .catch((error) => {
//         dispatch(failure(error));
//         dispatch(alertActions.error(error.message));
//       })
//   };

//   function request() { return { type: jobConstants.GET_APPLIED_JOB_REQUEST } }
//   function success(res) { return { type: jobConstants.GET_APPLIED_JOB_SUCCESS, res } }
//   function failure(error) { return { type: jobConstants.GET_APPLIED_JOB_FAILURE, error } }
// }

// function removeJob(id) {
//   return dispatch => {
//     dispatch(request(id));
//     jobService.removeJob(id)
//       .then((res) => {
//         dispatch(success(res))
//         history.push('/')
//       })
//       .catch((error) => {
//         dispatch(failure(error));
//         dispatch(alertActions.error(error.message));
//       })
//   };

//   function request(id) { return { type: jobConstants.REMOVE_JOB_REQUEST, id } }
//   function success(res) { return { type: jobConstants.REMOVE_JOB_SUCCESS, res } }
//   function failure(error) { return { type: jobConstants.REMOVE_JOB_FAILURE, error } }
// }

// function updateStatus(id, status) {
//   return dispatch => {
//     dispatch(request(id));
//     jobService.updateStatus(id, status)
//       .then((data) => {
//         jobService.getMails()
//           .then((data) => {
//             dispatch(success(data))
//             history.push('/')
//           })
//           .catch((error) => {
//             dispatch(failure(error));
//             dispatch(alertActions.error(error.message));
//           })
//       })
//       .catch((error) => {
//         dispatch(failure(error));
//         dispatch(alertActions.error(error.message));
//       })
//   };

//   function request(id) { return { type: jobConstants.UPDATE_APPLIED_STATUS_REQUEST, id } }
//   function success(data) { return { type: jobConstants.UPDATE_APPLIED_STATUS_SUCCESS, data } }
//   function failure(error) { return { type: jobConstants.UPDATE_APPLIED_STATUS_FAILURE, error } }
// }