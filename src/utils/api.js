
const getProducts = () => fetch('/api/products').then(res => res.json());

export {
  getProducts
};
