import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetail = () => {
    const country = useLoaderData()[0];
    console.log(country)
    return (
        <div>
            <h2> {country.name.common} </h2>
        </div>
    );
};

export default CountryDetail;