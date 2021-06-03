import { User } from '../interfaces/Fetch.interface';
import { useUsers } from './hooks/useUsers';

export const Usuarios = () => {

    const { users, nextPage, previousPage } = useUsers();

    const renderUser = (user: User) => {
        return(
            <tr key={user.id}>
                <td>
                    <img 
                        src={user.avatar} 
                        alt={user.first_name} 
                        style={{
                            borderRadius: '50%', 
                            width: '30px',
                            height: '30px'
                        }}    
                    />
                </td>
                <td>{user.first_name}</td>
                <td>{user.email}</td>
            </tr>
        );
    };

    return (
        <>
            <h3>Usuarios</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( user => renderUser(user))
                    }
                </tbody>
            </table>

            <button 
                className="btn btn-outline-success"
                onClick={previousPage}
            >
                Anterior
            </button>
            
            &nbsp;

            <button 
                className="btn btn-outline-success"
                onClick={nextPage}
            >
                Siguiente
            </button>


            
        </>
    );
};