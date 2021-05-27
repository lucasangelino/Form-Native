import { useReducer, useEffect } from 'react'

interface AuthState {
    isValidating:boolean;
    token:string | null;
    userName:string;
    nombre:string;
};

const initialState: AuthState = {
    isValidating: true,
    token: null,
    userName: '',
    nombre: ''
};

type AuthAction = { type: 'LOGOUT' };

const authReducer = (state: AuthState, action: AuthAction ):AuthState  => {
    switch (action.type) {
        case 'LOGOUT':
            return {
                isValidating: false,
                token: null,
                nombre: '',
                userName: ''
            }
        default:
            return state;
    }
};

export const Login = () => {

    const [{ isValidating }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch({ type: 'LOGOUT' })
        }, 1500);
        return () => {
            clearTimeout(timeout);
        }
    }, []);

    if ( isValidating) {
        return(
            <div className="alert alert-info">Validating...</div>
        )
    };

    return (
        <>
            <h3>Login</h3>
            

            <div className="alert alert-danger">
                Not authenticated. . .
            </div>

            <div className="alert alert-success">
                Authenticated. . .
            </div>

            <button className="btn btn-primary">
                Login
            </button>

            <button className="btn btn-danger">
                Logout

            </button>
        </>
    )
}
