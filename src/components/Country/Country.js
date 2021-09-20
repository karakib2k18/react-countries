import React from 'react';
import './Country.css';
const Country = (props) => {
    //console.log(props.country)
    const { name, flag, area} = props.country;
    return (
        <div className='country'>
            <img src={flag} alt="" style={{ height: '200px'}} />
            <h3>NAME:{name}</h3>
            <h4>AREA: {area}</h4>
        </div>
    );
};

export default Country;