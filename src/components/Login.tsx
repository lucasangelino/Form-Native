import { useReducer} from 'react'

interface AuthState {
    isValidating: boolean;
    token: string | null;
    userName: string;
    nombre: string;
};

const initialState: AuthState = {
    isValidating: false,
    token: null,
    userName: '',
    nombre: ''
};

type LoginPayload = { userName: string, nombre:string }

type AuthAction = 
    | { type: 'LOGOUT' }
    | { type: 'LOGIN', payload: LoginPayload }
    | { type: 'VALIDATING' };

const authReducer = (state: AuthState, action: AuthAction ):AuthState  => {
    switch (action.type) {
        case 'LOGOUT':
            return {
                isValidating: false,
                token: null,
                nombre: '',
                userName: ''
            };
        case 'LOGIN':
            const { nombre, userName } = action.payload;
            return {
                isValidating: false,
                token: '2378426y34',
                nombre,
                userName
            };
        case 'VALIDATING':
            return {
                isValidating: true,
                token: null,
                nombre: '',
                userName: ''
            }
            
        default:
            return state;
    };
};

export const Login = () => {

    const [{ isValidating, token, userName }, dispatch] = useReducer(authReducer, initialState);

    const login = () => {
        dispatch( { type: 'VALIDATING' } );
        const logoutIimeout = setTimeout(() => {
            dispatch( { type: 'LOGIN' , payload: {nombre: 'Lucas', userName: 'Luc'} } );
        }, 1500);
        return () => {
            clearTimeout(logoutIimeout);
        }
    };

    const logout = () => {
        dispatch( { type: 'LOGOUT' } );
    };

    return (
        <>
            <h3>Login</h3>

            {
                ( token )
                ? <div className="alert alert-success">Hola <strong>{`${ userName }`}</strong></div>
                : <div className="alert alert-danger">Not Authenticated. . .</div>
            }

            {
                token
                ? (
                    <button className="btn btn-danger" onClick={logout}>
                        Logout
                    </button>
                )
                : (
                    <button className={`btn btn-primary ${ isValidating ? 'disabled ' : '' }`} type="button" onClick={login}>
                        { isValidating ? 'Loging in...' : 'Login' }
                    </button>
                )
            }
        </>
    );
};