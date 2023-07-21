import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({country}) => {
    // console.log(country)
    const {name, ccn3 } = country;
    return (
        <div>
            <h4>{name.common}</h4>
            <Link to={`/country/${ccn3}`}><h6> {ccn3} </h6></Link>
        </div>
    );
};

export default Country;