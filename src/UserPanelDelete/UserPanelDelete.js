import React from 'react';
import { removeFromDb } from '../utilities/fakedb';

const UserPanelDelete = (props) => {

    const { id } = props.item;
    const handlePackageDelete = (id) => {
        removeFromDb(id);
        // console.log(id);
    }
    console.log(id);

    return (
        <div>
            <p>{id}</p>
        </div>
    );
};

export default UserPanelDelete;