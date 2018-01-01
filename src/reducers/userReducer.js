export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_USER_SUCCESS':            
            return action.payload
            break;

        case 'LOGIN_USER_FAIL':
            return action.payload
            break;

        default:
            return state
            break;
    }
}