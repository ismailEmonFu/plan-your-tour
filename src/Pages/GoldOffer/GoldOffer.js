import React from 'react';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
} from 'mdb-react-ui-kit';

const GoldOffer = () => {

    // https://i.ibb.co/F0L9Z06/Slide6-JPG.jpg
    // https://i.ibb.co/jMcKnBp/Slide5-JPG.jpg
    // https://i.ibb.co/3pnrP5d/Slide4-JPG.jpg
    // https://i.ibb.co/kMTT1md/Slide3-JPG.jpg
    // https://i.ibb.co/PgywvNC/Slide2-JPG.jpg
    // https://i.ibb.co/1zCn6RP/Slide1-JPG.jpg

    return (
        <div id="goldOffer">
            <MDBCarousel showControls fade>
                <MDBCarouselInner>
                    <MDBCarouselItem className='active'>
                        <MDBCarouselElement src='https://i.ibb.co/1zCn6RP/Slide1-JPG.jpg' alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <MDBCarouselElement src='https://i.ibb.co/PgywvNC/Slide2-JPG.jpg' alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <MDBCarouselElement src='https://i.ibb.co/kMTT1md/Slide3-JPG.jpg' alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <MDBCarouselElement src='https://i.ibb.co/3pnrP5d/Slide4-JPG.jpg' alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <MDBCarouselElement src='https://i.ibb.co/jMcKnBp/Slide5-JPG.jpg' alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <MDBCarouselElement src='https://i.ibb.co/F0L9Z06/Slide6-JPG.jpg' alt='...' />
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </div>
    );
};

export default GoldOffer;