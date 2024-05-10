import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Wallets from './Wallets.js';
import { useSelector } from 'react-redux';
// const authToken = getCookie('authToken');

const ProfilePage = () => {

    const token = useSelector((state) => state.user.token);
    const [user, setuser] = useState(null);
    console.log(user);

    // const [user, setuser] = useState(null);
    // console.log(user);
    const getUser = async () => {
        const data = await axios.get('https://sandbox.practical.me/api/user/profile',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    }
    useEffect(() => {
        getUser();
    }, [])

    if (!user) return;
    return (

        <>

            <div >

                <div>
                    <h1>Welcome {user.first_name} {user.sur_name}</h1>
                </div>
                <Wallets wallets={user.wallet} />
            </div>
        </>

    )
}

export default ProfilePage;

