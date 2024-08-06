import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductAsync, updateProductAsync } from '../redux/productsSlice';
import { notifyError } from '../utils/notifications';


const ProductForm = ({ product, onSubmit }) => {
  const [formData, setFormData] = useState(product || { name: '', price: '', description: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (product) {
        await dispatch(updateProductAsync({ id: product.id, data: formData })).unwrap();
      } else {
        await dispatch(addProductAsync(formData)).unwrap();
      }
      onSubmit && onSubmit();
    } catch (error) {
      notifyError('Failed to save product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Product Name"
        required
      />
      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <button type="submit">{product ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;