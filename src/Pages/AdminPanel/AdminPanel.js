import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Container, Nav, Navbar } from 'react-bootstrap';

const AdminPanel = () => {
    return (
        <div id="adminPanel">
            <h2>This is admin panel</h2>
            <Nav.Link as={HashLink} to="/authorizeAdmin#authorizeAdmin"><MDBBtn size='lg' tag='a' href='/' color='secondary' active>
                Run as Administrator
            </MDBBtn></Nav.Link>

            <Nav.Link as={HashLink} to="/userPanel#userPanel"><MDBBtn size='lg' tag='a' href='#' color='Primary' active>
                Run as Hon'ble User
            </MDBBtn></Nav.Link>
        </div>
    );
};

export default AdminPanel;