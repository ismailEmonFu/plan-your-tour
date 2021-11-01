import React from 'react';
import GoldOffer from '../GoldOffer/GoldOffer';
import Hotel from '../Hotel/Hotel';
import Inspiration from '../Inspiration/Inspiration';
import Location from '../Location/Location';

const Home = () => {
    return (
        <div>
            <Hotel></Hotel>
            <Location></Location>
            <Inspiration></Inspiration>
            <GoldOffer></GoldOffer>
        </div>
    );
};

export default Home;