import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPopulation = 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation = totalPopulation + country.population;
    }

    // reduce use kora jay
    //const totalPopulation = cart.reduce( (add, country) => add + country.population,0)
    return (
        <div>
            <h3>Cart:{cart.length}</h3>
    <h3>TotalPopulation:{totalPopulation}</h3>
        </div>
    );
};

export default Cart;