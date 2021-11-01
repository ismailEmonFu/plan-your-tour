import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter bgColor='primary' className='text-white text-center text-lg-left'>
            <MDBContainer className='p-4'>

                <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
                    <MDBIcon fab icon='facebook-f' />
                </MDBBtn>

                <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
                    <MDBIcon fab icon='twitter' />
                </MDBBtn>

                <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='#'>
                    <MDBIcon fab icon='google' />
                </MDBBtn>

                <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
                    <MDBIcon fab icon='instagram' />
                </MDBBtn>

                <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
                    <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>

                <form action=''>
                    <MDBRow className='mb-5 mt-5 justify-content-center'>
                        <MDBCol size='auto' className='mb-4 mb-md-0'>
                            <p className='pt-2'>
                                <strong>Sign up for our newsletter</strong>
                            </p>
                        </MDBCol>

                        <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                            <MDBInput className='text-white' type='text' id='form5Example2' label='Email address' />
                        </MDBCol>

                        <MDBCol size='auto' className='mb-4 mb-md-0'>
                            <MDBBtn>Subscribe</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </form>
                <MDBRow>
                    <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>About PlanUtouR</h5>

                        <small className='text-info'>
                            We've all been there. For that one fun trip, we plan for months on end. Where do we go? Who's coming? How do we go? When? How often is that plan going to change before someone loses his or her mind? Travel logistics can become a long, drawn-out horror story... unless you're on PlanUtouR, in which case it’s a ten-minute task. PlanUtouR is an innovative trip planning platform that enables users to plan trips from over 90000 cities across the world. PlanUtouR’s trip planning platform serves as a one-stop destination for all the travel needs- exploring attractions, creating itineraries and booking hotels, transportation, and tours.
                        </small>
                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Patagonia Travel Guide
                        </h5>

                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a href='https://www.quasarex.com/patagonia/history' className='text-white'>
                                    Patagonia History
                                </a>
                            </li>
                            <li>
                                <a href='https://www.quasarex.com/patagonia/torres-del-paine' className='text-white'>
                                    Torres del Paine National Park
                                </a>
                            </li>
                            <li>
                                <a href='https://www.quasarex.com/patagonia/perito-moreno-glacier' className='text-white'>
                                    Perito Moreno Glacier
                                </a>
                            </li>
                            <li>
                                <a href='https://www.quasarex.com/patagonia/los-glaciares' className='text-white'>
                                    Los Glaciares National Park
                                </a>
                            </li>
                        </ul>
                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase mb-0'>Galapagos Travel Guide</h5>

                        <ul className='list-unstyled'>
                            <li>
                                <a href='https://www.quasarex.com/travel-guide/galapagos-islands' className='text-white'>
                                    About Galapagos
                                </a>
                            </li>
                            <li>
                                <a href='https://www.quasarex.com/galapagos/geology' className='text-white'>
                                    Galapagos Islands Geology Facts
                                </a>
                            </li>
                            <li>
                                <a href='https://www.quasarex.com/galapagos/charles-darwin-biography' className='text-white'>
                                    Charles Darwin Biography
                                </a>
                            </li>
                            <li>
                                <a href='https://www.quasarex.com/galapagos/marine-life' className='text-white'>
                                    Marine Life
                                </a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-white' href='https://www.quasarex.com/'>
                    PlanUtouR.com
                </a>
            </div>
        </MDBFooter>
    );
};

export default Footer;