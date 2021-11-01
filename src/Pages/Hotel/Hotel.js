import React from 'react';
import './Hotel.css';

import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
} from 'mdb-react-ui-kit';

// https://i.ibb.co/Hh3t7R1/hotel-1-1.jpg
// https://i.ibb.co/ch2mX9c/hotel-1-2.jpg
// https://i.ibb.co/9gRDx3H/hotel-1-3.jpg
// https://i.ibb.co/273XfyM/hotel-1-4.jpg

const Hotel = () => {
    return (
        <div className="hotel">
            <MDBCarousel showControls >
                <MDBCarouselInner>
                    <MDBCarouselItem className='active'>
                        <MDBCarouselElement src='https://i.ibb.co/Hh3t7R1/hotel-1-1.jpg' alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <MDBCarouselElement src='https://i.ibb.co/ch2mX9c/hotel-1-2.jpg' alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <MDBCarouselElement src='https://i.ibb.co/9gRDx3H/hotel-1-3.jpg' alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <MDBCarouselElement src='https://i.ibb.co/273XfyM/hotel-1-4.jpg' alt='...' />
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </div>
    );
};

export default Hotel;