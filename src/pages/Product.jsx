import React from 'react';
import { useParams } from 'react-router-dom';


const Products = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>mostrando Product<b>{id}</b></h1>
        </div>
    );
};

export default Products;