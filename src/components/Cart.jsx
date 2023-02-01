import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const Cart = ({show, handleClose}) => {
const dispatch = useDispatch();

// dispatch(geCartitesThunk());

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