import { MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import Hotel from '../../Hotel/Hotel';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand to="/home">PlanUtouR</Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/home"><MDBBtn className='mx-2' color='secondary'>
                            Home
                        </MDBBtn></Nav.Link>
                        <Nav.Link as={HashLink} to="/location#location"> <MDBBtn className='mx-2' color='info'>
                            Location
                        </MDBBtn></Nav.Link>
                        <Nav.Link as={HashLink} to="/inspiration#inspiration"><MDBBtn className='mx-2' color='primary'>
                            Inspiration
                        </MDBBtn></Nav.Link>
                        <Nav.Link as={HashLink} to="/goldOffer#goldOffer"><MDBBtn className='mx-2' color='dark'>
                            Offer
                        </MDBBtn></Nav.Link>

                        {
                            user?.email ?
                                <Nav.Link as={HashLink} to="/login#login"><MDBBtn className='text-dark' onClick={logOut} color='light'>
                                    Logout
                                </MDBBtn></Nav.Link>
                                :
                                <Nav.Link as={HashLink} to="/login#login"><MDBBtn className='text-dark' color='light'>
                                    Login
                                </MDBBtn></Nav.Link>

                        }
                        {
                            user?.email ?
                                <Nav.Link as={HashLink} to='/userPanel#userPanel'><MDBBtn className=' text-dark' color='light'>
                                    Orders
                                </MDBBtn></Nav.Link>
                                :
                                " "

                        }
                        <Nav.Link as={HashLink} to="/adminPanel#adminPanel"><MDBBtn color='danger'>
                            ADMIN
                        </MDBBtn></Nav.Link>
                        <MDBTypography className='text-white' variant='h6'>{user?.displayName}</MDBTypography>
                    </Nav>
                </Container>
            </Navbar >

        </div >
    );
};

export default Header;