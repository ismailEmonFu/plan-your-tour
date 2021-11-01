import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Admin = () => {
    return (
        <div>
            <Nav.Link as={HashLink} to="/newLocation#newLocation"><MDBBtn size='lg' tag='a' href='/' color='secondary' active>
                Add New Tour Location
            </MDBBtn></Nav.Link>

            <Nav.Link as={HashLink} to="/manageUser#manageUser"><MDBBtn size='lg' tag='a' href='#' color='Primary' active>
                Manage Users
            </MDBBtn></Nav.Link>

        </div>
    );
};

export default Admin;