import actions from './actions';

const reducersDefinitions = {
  [actions.displayError().type]: state => Object.assign({}, state, {
    displayError: true,
  }),

  [actions.fetchedProducts().type]: (state, action) => Object.assign({}, state, {
    products: action.products,
    index: 0,
  }),
};

const reducers = (state = { index: 0, products: [] }, action) => {
  if (reducersDefinitions[action.type]) {
    return reducersDefinitions[action.type](state, action);
  }
  return state;
};

export default reducers;
