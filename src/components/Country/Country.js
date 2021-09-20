import React from 'react';
import './Country.css';
const Country = (props) => {
    //console.log(props.country)
    const { name, flag, area, alpha2Code, capital, region, population} = props.country;
    return (
        <div className='country'>
            <img src={flag} alt="" style={{ height: '200px'}} />
            <h2>NAME:{name}</h2>
            <h4>AREA: {area}</h4>
            <h4>CODE:{alpha2Code}</h4>
            <h4>CAPITAL: {capital}</h4>
            <h4>REGION:{region}</h4>
            <h4>POPULATION: {population}</h4>
        </div>
    );
};

export default Country;