import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/';
import { ProductList } from './components/productList/index.jsx';
import * as styles from './styles';

const App = () => <main className={styles.main}>
  <Provider store={store}>
    <ProductList />
  </Provider>
</main>

export default App;
