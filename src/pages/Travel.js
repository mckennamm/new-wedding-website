
//imports
import React from 'react';

//styles
import './Travel.css';


function travel() {
    return (

    <div className="travel">   
        <h1>Travel Information</h1>
        <h2>-Lodging-</h2>
        <p>We have blocked the following hotel to help provide you with discounted lodging.</p>
        <p><strong>Hotel Name:</strong> EXAMPLE HOTEL</p>
        <p><strong>Address:</strong> 1 EXAMPLE ADDRESS DR, DURHAM, NC</p>
        <p><strong>Phone:</strong> (000) 000-2000</p>
        <p><strong>Room Rate:</strong> $249/night</p>
        <p><strong>Group Code:</strong> WEDDING</p>
        <p><strong>Hotel website:</strong> yaddayadda.com</p>

        <h2>-Transportation-</h2>
        <p>For guests flying in, the closest airport is Raleigh-Durham International Airport (RDU), which is about 20-25 minutes away from the hotel. </p>
        <p>For guests driving in, the hotel offers valet parking for $50/day. </p>
        <p>For guests who prefer to use a rideshare service, both Uber and Lyft are available in the area. </p>
        <p>For guests who prefer to rent a car, there are several car rental companies available at the airport. </p>

        <h2>-Event Parking-</h2>
        <p>Please drive down the long road until you find space to park.  </p>

        <h2>-Local Attractions-</h2>
        <p>While you're in town, be sure to check out some of the local attractions:</p>
        <ul>
            <li>Downtown Raleigh Museums (Free)</li>
            <li>North Carolina Botanical Gardens (Free)</li>
            <li>Duke Gardens (Small cost for parking)</li>
            <li>Duke Lemur Center</li>
            <li>William B. Umstead State Park (Free)</li>    
        </ul>

    </div>
)
}

export default travel;