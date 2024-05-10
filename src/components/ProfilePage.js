import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Wallets from './Wallets.js';
import { useSelector } from 'react-redux';
import dataa from './data.js';

// const authToken = getCookie('authToken');

const ProfilePage = () => {

    const token = useSelector((state) => state.user.token);
    const [user, setuser] = useState(null);

    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await axios.get('https://sandbox.practical.me/api/user/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
                );

                const data = await response.json();
                setProfileData(data);
            } catch (error) {
                //  console.error('Error fetching profile data:', error);
                setProfileData(dataa);
                console.log(dataa);
            }
        };

        fetchData();
        console.log(profileData);
    }, []);
    return (

        <>
            <div >
                <div>
                    <h1>Welcome {dataa.data.first_name} {dataa.data.sur_name}</h1>
                </div>
                <Wallets wallets={dataa.data.wallet} />
            </div>
        </>


    )

}


export default ProfilePage;

