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
            <h1>hello</h1>
            <ul>
                {purchases.map(purchases =>(
                    <li>{purchases.products?.id}</li>
                ))}
            </ul>
        </div>
    );
};

export default Purchases;