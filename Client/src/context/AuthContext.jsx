import { createContext, useEffect, useReducer } from "react";
import PropTypes from 'prop-types';

// Initial state for the authentication context
const storedUser = localStorage.getItem('user');
let initialUserState = null;

try {
    initialUserState = storedUser ? JSON.parse(storedUser) : null;
} catch (error) {
    console.error('Error parsing user from localStorage:', error);
    // Handle the error gracefully, such as setting initialUserState to null or a default value
}

const initial_state = {
    user: initialUserState,
    loading: false,
    error: null,
}



// Create the AuthContext using createContext
export const AuthContext = createContext(initial_state);

// Reducer function to manage state changes
const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                ...state,
                user: null,
                loading: true,
                error: null,
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
            };
        case "LOGIN_FAILURE":
            return {
                ...state,
                user: null,
                loading: false,
                error: action.payload,
            };
        case "REGISTER_SUCCESS":
            return {
                ...state,
                user: null,
                loading: false,
                error: null,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
}

// AuthContextProvider component
export const AuthContextProvider = ({ children }) => {
    const [state , dispatch] = useReducer(AuthReducer, initial_state);

    // Effect hook to update localStorage whenever 'user' state changes
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state.user]);

    // Return AuthContext.Provider with value prop exposing state and dispatch
    return (
        <AuthContext.Provider value={{ user: state.user, loading: state.loading, error: state.error, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}

// PropTypes validation for children prop
AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
