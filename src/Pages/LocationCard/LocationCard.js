import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


const LocationCard = (props) => {

    const { _id, img, location, description } = props.location;


    return (
        <div>
            <MDBCard style={{ maxWidth: '22rem' }}>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={img} fluid alt='...' />
                    <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle>{location}</MDBCardTitle>
                    <MDBCardText>
                        {description}
                    </MDBCardText>
                    <Link to={`/package/${_id}`}>
                        <MDBBtn>Book This Package</MDBBtn>
                    </Link>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default LocationCard;