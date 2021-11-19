import Button from '@restart/ui/esm/Button';
import React from 'react';
import useAuth from '../hooks/useAuth';
import UserPanelDelete from '../UserPanelDelete/UserPanelDelete';
import { clearThePack, getStoredPack, removeFromDb } from '../utilities/fakedb'; 

const UserPanel = () => {

    const { user } = useAuth();
    const getCurrentPack = getStoredPack();
    const key = Object.keys(getCurrentPack);
    console.log(key);


    // link is not working , idk why!!
    fetch('http://localhost:5000/location/keys', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(key)
    }).then()

    let order = {};

    const handleUserDelete = () => {
        clearThePack();
        // console.log(id);
    }

    return (
        <div id="userPanel">
            <h2>Here is all order of {user?.displayName}</h2>
            <li>
                <p>{user?.displayName} orderd:  {key.length} tour package.</p>
                {
                    key.map(item => <UserPanelDelete key={item} item={item}></UserPanelDelete>)
                }

                <Button onClick={handleUserDelete}>Delete My Orders</Button>

            </li>

        </div>
    );
};

export default UserPanel;