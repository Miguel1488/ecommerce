import React from 'react';
import { useParams } from 'react-router-dom';

const Purchases = () => {
const {id } = useParams();

    return (
        <div>
            <h1>Purchases</h1>
            <p>Mostrando producto de id: <b>{id}</b> </p>
        </div>
    );
};

export default Purchases;