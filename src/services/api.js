import axios from 'axios';

const API_BASE_URL = 'https://my-json-server.typicode.com/alqamah/api-ecommerce';

export const fetchProducts = () => axios.get(`${API_BASE_URL}/products`);
export const updateProduct = (id, data) => axios.put(`${API_BASE_URL}/products/${id}`, data);
export const deleteProduct = (id) => axios.delete(`${API_BASE_URL}/products/${id}`);
export const addProduct = (data) => axios.post(`${API_BASE_URL}/products`, data);
export const fetchCart = () => axios.get(`${API_BASE_URL}/cart`);
export const updateCart = (data) => axios.put(`${API_BASE_URL}/cart`, data);