import React, { useEffect } from 'react';
import { Button, Card, Col, Offcanvas, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { getcarsThunk } from '../store/slices/cart.slice';
import { purchaseCartThunk } from '../store/slices/purchases.slice';


const Cart = ({ show, handleClose }) => {
    const carti = useSelector(state => state.cart)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getcarsThunk())
    }, [])



    return (
        <>
            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton style={{
                    background: '#233240',
                    color: 'white'
                }}>
                    <Offcanvas.Title>
                        Welcome to your shopping cart </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {carti.map(product => (
                        <div key={product.id} className='card_push'>
                            <Row>
                                <Col>
                                    <img src={product.product?.images?.[0].url} alt="" className="img-fluid" />
                                </Col>
                                <Col>
                                    <p>{product.product?.title}</p>
                                    <hr />
                                    <p>Price</p>
                                    <p>{product.product?.price} $</p>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </Offcanvas.Body>
                <Button onClick={() => { dispatch(purchaseCartThunk()), dispatch(getcarsThunk()) }}
                    style={{ height: '9rem' }}>
                    Buy cart product <i className="bi bi-cart3"></i>
                </Button>
            </Offcanvas>
        </>


    );
};

export default Cart;