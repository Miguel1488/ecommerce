import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productsSlice from '../store/slices/products.slice';

const ProductsDetail = () => {
const ProductsDetail = useSelector((state) => state.ProductsDetail);
const dispatch = useDispatch();


useEffect(() => {
    dispatch(getProductsDetailThunk ());
  }, []);


    return (
        <div>
            <ul>
                {ProductsDetail.map(productsDetail)=>(
                    <li>
                        <link to={`/products/${}`}/>
                        <img src="" alt="" />
                    </li>
                )
                
                }
            </ul>
        </div>
    );
};

export default ProductsDetail;