//import { userConstant } from './userConstant';
import axios from 'axios';

export const postDataSignup =(data) => {
    return {
        type: "SIGNUP",
        payload: data
    }
}

export const getDataLogin =(data) => {
    return {
        type: "LOGIN",
        payload: data
    }
}

export const login=(user)=> {
    return dispatch => {
        axios.post('http://localhost:8082/sign', user)
        .then((response) => { 
            if (response.data.error) {
                window.alert(JSON.stringify(response.data.message))
            }else if(response.data=== ''){
                window.alert('Invalid email or Password')
            } 
            else{
                dispatch(getDataLogin(response.data))
            }
            
        }).catch((error) => {
            return error;
        }) 
    }
}

export const signup=(data)=> {
    console.log(data);
    return dispatch => {
       axios.post('http://localhost:8082/naukriapp', data)
            .then((response) => {
                    dispatch(postDataSignup(response.data));
                    return response.data   
                })
                .catch((err) => {
                    return err;
                });
          }
}
          


