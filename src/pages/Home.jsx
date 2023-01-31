import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterProductsCategoryThunk, filterProductsTitleThunk, getProductsThunk } from '../store/slices/products.slice';

const Home = () => {

    const dispatch = useDispatch();
    const productsList = useSelector((state) => state.products);
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
            <Row>
                <Col lg={3}>
                    <ListGroup>
                        {
                            categories.map(category => (
                                <button key={category.id} onClick={() => dispatch(filterProductsCategoryThunk(category.id))}>
                                    {category.name}
                                </button>
                            ))
                        }
                    </ListGroup>

                </Col>

                <Col lg={9}>

                    <h1>Home</h1>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={productsSearch}
                            onChange={e => setProductsSearch(e.target.value)}
                        />
                        <Button onClick={() => dispatch(filterProductsTitleThunk())}
                            variant="outline-secondary"
                            id="button-addon2">
                            Button
                        </Button>
                    </InputGroup>


                    <Row xs={1} md={2} className="g-4">
                        {productsList.map((products) => (
                            <Col>
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src={products.images[0].url}
                                        style={{ height: 200, objectfit: "cover" }}
                                    />
                                    <Card.Body>
                                        <Card.Title>{products.title}</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>




                    {/* <ul>
                        {productsList.map((products) => (
                                <li key={products.id} onClick={() => navigate(`products/${products.id}`)}>
                                    {products.title}
                                    <br />
                                    <img src={products.images[0].url} alt="procducts" />

                                </li>
                            ))}


                    </ul> */}
                </Col>
            </Row>

        </div>
    );
};

export default Home;