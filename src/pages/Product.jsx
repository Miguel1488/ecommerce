import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { filterProductsCategoryThunk } from '../store/slices/products.slice';


const Products = () => {
    const { id } = useParams();
    const [products, setProducts] = useState({});

    const productsList = useSelector(state => state.products);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}/`)
            .then(res => {
                setProducts(res.data)
                dispatch(filterProductsCategoryThunk(res.data.category.id))

            });
    }, [ id ])

    console.log(products);






    

    return (
        <div>
            <h1>{products.title}<b>{id}</b></h1>
            <h3>{products.brand}</h3>
            <img src={products.images?.[0].url} alt="" />
            <p>{products.description}</p>
            <p>${products.price}</p>


            {
                productsList.map(productsItem => (
                    <li 
                    key={productsItem.id}
                        onClick={() => navigate(`/products/${productsItem.id}`)}
                        >
                        {productsItem.title}
                        {productsItem.brand}
                        <img src={productsItem.images?.[0].url} alt="" />
                        ${productsItem.price}
                    </li>

                ))
            }

        </div>
    );
};

export default Products;