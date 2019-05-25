const userReducer = (state = {data:{}}, action)=> {
    switch (action.type) {
        case "LOGIN":{
            return state = {
                ...state,
                data: action.payload   
            };
        }
        case "SIGNUP":{
            return state = {
                ...state,
            };
        }
        default:
            return state;

    }
   
}
export default userReducer;