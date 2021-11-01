import React, { useEffect, useState } from 'react';
import LocationCard from '../LocationCard/LocationCard';
import './Location.css';

const Location = () => {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/locations')
            .then(res => res.json())
            .then(data => setLocations(data))
    }, [])

    return (
        <div id="location">
            <h1>Visit Our Exclusive Location Package</h1>
            <div className="locationContainer">
                {
                    locations.map(location => <LocationCard
                        key={location._id}
                        location={location}
                    ></LocationCard>
                    )
                }
            </div>

        </div>
    );
};

export default Location;

{/* <div>
    <h6>{location.location}</h6>
    <small>{location.description}</small>
    <MDBCardImage style={{ maxWidth: '10rem' }} src={location.img} fluid alt='...' />
</div> */}