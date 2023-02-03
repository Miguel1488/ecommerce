import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';


const Purchases = () => {
    
    const purchases = useSelector(state => state.purchases);
    const dispatch = useDispatch()

  



    useEffect(() =>{
        dispatch(getPurchasesThunk())

    }, [])

    


console.log(purchases)


    return (
        <div>
              <h1>My Purchases</h1>

<Row xs={1} md={2} lg={3} className="g-4">
{purchases.map(purchases =>(

                            <Col>

                                <Card>
                                    <Card.Img variant="top" src={purchases.product.images[0].url}
                                        style={{ height: 250, objectFit: "contain" }}

                                        key={purchases.id} />
                                    <Card.Body>
                                        <Card.Title>{purchases.product.title}</Card.Title>
                                        <Card.Text></Card.Text>
                                        <Card.Text>
                                            Price: ${purchases.product.price}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>


            
          
            {/* <ul>
                
                {purchases.map(purchases =>(
                    <li key={purchases.id}>
                        {purchases.product.title}
                    <img className="d-block w-100"
                    src={purchases.product.images[0].url}
                    alt="First slide"/>
                    {purchases.product.price}
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default Purchases;