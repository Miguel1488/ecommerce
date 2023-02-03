import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { filterProductsCategoryThunk } from '../store/slices/products.slice';
import { Button, Card, Carousel, Col, Row } from 'react-bootstrap'
import { addCartThunk } from '../store/slices/cart.slice';

const Products = () => {
    const { id } = useParams();
    const [products, setProducts] = useState({});

    const allproducts = useSelector((state) => state.products);

  const productsFiltered = allproducts.filter((products) => products.id !== Number(id));

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [rate, setRate] = useState(1);

    useEffect(() => {
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}/`)
            .then(res => {
                setProducts(res.data)
                dispatch(filterProductsCategoryThunk(res.data.category.id))

            });
    }, [ id ])


    const addToFavorites = (id) => {
        const favorite = {
          quantity: rate,
          productId: products.id,
        };
        dispatch(addCartThunk(favorite));
      };
    


    console.log(products);








    return (
        <div style={{ marginTop: '8rem' }}>

        <Row style={{ margin: '1rem' }}>
  
          <Col lg className='colors_a'>
            <Carousel fade style={{}}>
              {products.images?.map(product => (
                <Carousel.Item key={product.url} className="images_img">
                  <img className="d-block w-100"
                    src={product.url}
                    alt="First slide"
                  />
                </Carousel.Item>
              ))}
  
            </Carousel>
  
            <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '1rem 11%' }}>
              <Button onClick={() => setRate(rate + 1)}><b>+</b></Button><h4>{rate}</h4> <Button onClick={() => setRate(rate <= 1 ? rate + 0 : rate - 1)}><b>-</b></Button>
            </div>
            <Button onClick={addToFavorites} style={{ marginBottom: '1rem' }}>Add to product</Button>
            <div>
  
            </div>
          </Col>
  
          <Col lg>
            <h1>{products.title}</h1>
            <p>{products.lead}</p>
            <p style={{textAlign: 'justify'}}>{products.description}</p>
            <p>${products.price}</p>
          </Col>
  
  
        </Row>
  
        <h2>Discover silimilar</h2>
        <Row xs={1} md={2} lg={3} className="g-4"
          style={{ margin: '1rem', gap: '3rem', justifyContent: 'center' }}>
  
          {productsFiltered.map((productsOne) => (
            <Card style={{ width: '18rem' }}
              key={productsOne.id}>
              <div className="images_img">
                <Card.Img variant="top" src={productsOne.images[0].url} />
              </div>
  
              <Card.Body>
                <p>{productsOne.brand}</p>
                <Card.Title>{productsOne.title}</Card.Title>
                <hr />
                <p>Price</p>
                <Card.Text>
                  {productsOne.price} $
                </Card.Text>
                <Button variant="primary" onClick={() => navigate(`/products/${productsOne.id}`)}><i className="bi bi-cart3"></i>Select</Button>{' '}
               
              </Card.Body>
            </Card>
          ))}
  
        </Row>
  
  
  
  
      </div>
    );
  };


export default Products;