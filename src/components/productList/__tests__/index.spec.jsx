import React from 'react';
import { ProductListComponent } from '../';

test('Can mount', () => {
  const wrapper = shallow(<ProductListComponent
    fetchProducts={() => {}}
    products={[]}
  />);
  return expect(wrapper.find('div').length).toBeGreaterThan(0);
});

test('displays errors', () => {
  const wrapper = shallow(<ProductListComponent
    fetchProducts={() => {}}
    products={[]}
    displayError={true}
  />);

  expect(wrapper.text()).toContain('Error');
});

