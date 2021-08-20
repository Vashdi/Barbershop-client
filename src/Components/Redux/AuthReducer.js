const AuthReducer = (state = { user: window.localStorage.getItem('loggedUser') }, action) => {
    switch (action.type) {
        case "LOGIN":
            window.localStorage.setItem('loggedUser', JSON.stringify(action.payload));
            return { ...state, user: action.payload };

        case "LOGOUT":
            window.localStorage.removeItem('loggedUser');
            return { ...state, user: null };

        default:
            return state
    }
}

export default AuthReducer