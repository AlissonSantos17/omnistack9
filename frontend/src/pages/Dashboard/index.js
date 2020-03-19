import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Dashborad() {
    const [spots, setSpots] = useState([])
    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            console.log('aa')
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });
            setSpots(response.data)
            /* BUG NA HORA DE LISTAR*/
        }
        loadSpots();
    }, []);
    return (
        <>
          <ul className="spot-list">
            {spots.map(spot => (
              <li key={spot._id}>
                <header />
                <strong>{spot.company}</strong>
                <span>{spot.price}</span>
              </li>
            ))}
          </ul>
        </>
    )
}