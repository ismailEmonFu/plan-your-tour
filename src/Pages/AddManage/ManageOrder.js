import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBCardImage } from 'mdb-react-ui-kit';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import LocationCard from '../LocationCard/LocationCard';
import useAuth from '../../hooks/useAuth';
import { getStoredPack, removeFromDb, clearThePack } from '../../utilities/fakedb';
import Button from '@restart/ui/esm/Button';

const ManageOrder = () => {

    const { user, logOut } = useAuth();
    const getCurrentPack = getStoredPack();
    const key = Object.keys(getCurrentPack);
    // console.log(getCurrentPack.length);
    console.log(key.length);

    const handleUserDelete = () => {
        clearThePack();
        logOut();
    }

    return (
        <div id='manageUser'>
            <h3>This is manageorder</h3>
            <li>
                <p>{user?.displayName} orderd:  {key.length} tour package.</p>

                <Button onClick={() => handleUserDelete()}>Delete the users order</Button>

            </li>

            <Nav.Link as={HashLink} to="/admin#admin"><MDBBtn color='danger'>
                Return to ADMIN
            </MDBBtn></Nav.Link>
        </div >
    );
};

export default ManageOrder;

