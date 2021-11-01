import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Nav } from 'react-bootstrap';
import { addToDb } from '../../utilities/fakedb';


const BookPackage = () => {
    const { packageId } = useParams();
    const [location, setLocation] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/package/${packageId}`)
            .then(res => res.json())
            .then(data => setLocation(data))
    }, [])

    const addToLocal = (id) => {
        addToDb(id);
    }

    return (
        <div className="d-grid w-25 mx-auto">
            <MDBCard style={{ maxWidth: '22rem' }}>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={location.img} fluid alt='...' />
                    <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle>{location.location}</MDBCardTitle>
                    <MDBCardText>
                        {location.description}{location.description}
                    </MDBCardText>

                    <MDBBtn onClick={() => addToLocal(location.key)}>Book Now</MDBBtn>
                    <Nav.Link as={HashLink} to="/location#location"><MDBBtn color='info'>
                        Return to Location
                    </MDBBtn></Nav.Link>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default BookPackage;