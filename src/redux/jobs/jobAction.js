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
  return dispatch => {
    axios.post('http://localhost:8082/createjobs',job)
      .then((res) => {
        if (res.data.errors) {
            window.alert(JSON.stringify(res.data.message))
        } else {
            dispatch(JobData(res.data))
        }
    }).catch((error) => {
        return error;
    }) 
  
  }
}


export const JobListing =(userskills)=>{
  if(userskills){
    return dispatch => {
      axios.get('http://localhost:8082/jobs', {
        params: {
          skills:userskills
        }
      })
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
  }else{
    return dispatch => {
      axios.get('http://localhost:8082/jobs2 ')
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
  
}

export const EditJobs=(data)=> {
  console.log('data',data);
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





 