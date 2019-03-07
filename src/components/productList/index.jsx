import * as React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../store';
import Product from '../product/index.jsx';
import * as styles from './styles';

class ProductListComponent extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return <div>
      {this.props.displayError && <div className={styles.error}>Error in fetching products.</div>}
      {this.props.products.length === 0 && <div className={styles.info}>Loading...</div>}
      {this.props.products.length && !this.props.displayError && <div className={styles.flexbox}>
        {this.props.products.map((product) => <Product key={product.title} product={product} />)}
      </div>}
    </div>
  }
}

const mapStateToProps = state => ({
  products: state.products,
  displayError: state.displayError
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(actions.fetchProducts),
});

const ProductList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductListComponent);

export {
  ProductListComponent,
  ProductList, 
};
