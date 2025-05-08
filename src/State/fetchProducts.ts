import axios from 'axios';

const api = 'http://localhost:5454/products';
export const fetchProducts = async () => {
  try {
    const res = await axios.get(api);
    console.log('res', res);
  } catch (error) {
    console.error(error);
  }
};
