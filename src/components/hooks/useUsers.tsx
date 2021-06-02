import { useEffect, useRef, useState } from 'react'
import { Fetch } from '../../api/Fetch';
import { User, UsersList } from '../../interfaces/Fetch.interface';

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const pageRef = useRef(1);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async() => {
        console.log('fire')
        const response = await Fetch.get<UsersList>('/users', {
            params: {
                page: pageRef.current
            }
        });
        if( response.data.data.length > 0 ) {
            setUsers(response.data.data);
        } else {
            pageRef.current--;
            alert('No hay mas usuarios');
        }
    };

    const nextPage = () => {
        pageRef.current++;
        loadUsers();
    };

    const previousPage = () => {
        if (pageRef.current > 1)
        pageRef.current--;
        loadUsers();
    };

    return {
        users,
        nextPage,
        previousPage
    };
};
