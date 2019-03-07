import { getProducts } from '../utils/api';

const actions = {
  fetchProducts: dispatch => getProducts()
    .then((res) => {
      dispatch(actions.fetchedProducts(res));
    })
    .catch((e) => {
      console.error(e);
      dispatch(actions.displayError());
    }),
  displayError: () => ({
    type: 'DISPLAY_ERROR',
  }),
  fetchedProducts: products => ({
    type: 'FETCHED_PRODUCTS',
    products,
  }),
};

export default actions;
