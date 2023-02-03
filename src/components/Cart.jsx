import React, { useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getcarsThunk } from '../store/slices/cart.slice';


const Cart = ({ show, handleClose }) => {
    const carti = useSelector(state => state.cart)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getcarsThunk())
    }, [])


    return (
        <div>
            <Offcanvas placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </div>

    );
};

export default Cart;