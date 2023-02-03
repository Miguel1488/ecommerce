import React, { useEffect } from 'react';
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
            <ul>
                
                {purchases.map(purchases =>(
                    <li key={purchases.id}>
                        {purchases.product.title}
                    <img className="d-block w-100"
                    src={purchases.product.images[0].url}
                    alt="First slide"/>
                    {purchases.product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Purchases;