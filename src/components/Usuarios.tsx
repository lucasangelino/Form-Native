import React, { useEffect } from 'react';
import { Fetch } from '../api/Fetch';

export const Usuarios = () => {

    useEffect(() => {
        Fetch.get('/users')
            .then( resp => {
                console.log(resp.data.data)
            })
            .catch( console.log )
    }, []);

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
            </table>
        </>
    );
};