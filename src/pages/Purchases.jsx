import React from 'react';
import { useSelector } from 'react-redux';



const Purchases = () => {
    const purchases = useSelector(state => state.purcharses);
    console.log(purchases)

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default Purchases;