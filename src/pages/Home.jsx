import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterProductsCategoryThunk, filterProductsTitleThunk, getProductsThunk } from '../store/slices/products.slice';

const Home = () => {

    const dispatch = useDispatch();
    const productsList = useSelector(state => state.products);
    const [categories, setCategories] = useState([]);
    const [productsSearch, setProductsSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProductsThunk());

        axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories/')
            .then(res => setCategories(res.data));
    }, [])

    console.log(productsList);

    return (
        <div>

<InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={productsSearch}
          onChange={e =>setProductsSearch(e.target.value)}
        />
        <Button 
        onClick={() => alert(productsSearch)} 
        variant="outline-secondary" 
        id="button-addon2">
          Button
        </Button>
      </InputGroup>

           
                        {
                            categories.map(category => (
                                <Button key={category.id} onClick={() => dispatch(filterProductsCategoryThunk(category.id))}>
                                    {category.name}
                                </Button>
                            ))
                        }
                        
            

                    <ul>
                        {productsList.map(products => (
                            <li key={products.id} onClick={() => navigate(`products/${products.id}`)}>
                                {products.brand}
                                <br />
                                {products.title}
                                <br />
                                Price: ${products.price}
                                <br />
                                <img src={products.images[0].url} alt="procducts" style={{ width: 300 }} />


                            </li>
                        ))}


                    </ul>
           

        </div>
    );
};

export default Home;