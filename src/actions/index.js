const registered_users = [
    {
        'username': 'test_user1',
        'password': 'password'
    }
]

export const addTodo = (todo) => {
    return {
        type: 'NEW_TODO',
        todo
    }
}

export const removeTodo = (todoId) => {
    return {
        type: 'REMOVE_TODO',
        todoId
    }
}

export const showCompleted = () => {
    return {
        type: 'SHOW_COMPLETED'
    }
}

export const loginUser = (username, password) => {   
    let foundUser;
    registered_users.map((user, index) => {
        if(user.username==username){
            foundUser=user.username;
        }
    })
    if(foundUser){
        return {
            type: 'LOGIN_USER_SUCCESS',
            payload: { username, 'verified': true }
        }
    }else{
        return {
            type: 'LOGIN_USER_FAIL',
            payload: {'username': 'error', 'verified': false}
        }
    }    
    
}

