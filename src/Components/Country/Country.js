import React from 'react';
import '../Country/Country.css';
const Country = (props) => {
    const { name, flag, population, region } = props.country;
    const flagStyle = {
        height: '50px',

    }
    const countryStyle = {
        border: '1px solid red',
        margin: '10px',
        width:'300px',
        height: '300px',
        float:'left'
    }
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="countryDesign" style={countryStyle}>
            <h2>{name}</h2>
            <img style={flagStyle} src={flag} alt="" />
            <h3>Population:{population}</h3>
            <h3>Region:{region}</h3>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;