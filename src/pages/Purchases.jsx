import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Purchases = () => {
    const purchases= useSelector((state) => state.favorite);
    console.log(purchases);
const {id } = useParams();

    return (
        <div>
            <h1>Purchases</h1>
            <p>Mostrando producto de id: <b>{id}</b> </p>
        </div>
    );
};

export default Purchases;