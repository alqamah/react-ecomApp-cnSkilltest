import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync, sortProducts } from '../redux/productsSlice';
import ProductItem from './ProductItem';
import '../styles/productList.css'

const ProductList = () => {
  const dispatch = useDispatch();
  const { items: products, status, error } = useSelector(state => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProductsAsync());
    }
  }, [status, dispatch]);

  const handleSort = () => {
    dispatch(sortProducts());
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <>
    <button className='sort-btn' onClick={handleSort}>Sort by Price</button>
    <div className='product-list'>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))
      )}
    </div>
    </>
  );
};

export default ProductList;