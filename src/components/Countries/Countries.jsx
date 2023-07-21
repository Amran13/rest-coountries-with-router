import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {
    const countries = useLoaderData();
    return (
        <div>
            <h2>Wellcome to Rest Countries</h2>
            {
                countries.map(country => <Country key={country.name.common} country={country} />)
            }
        </div>
    );
};

export default Countries;