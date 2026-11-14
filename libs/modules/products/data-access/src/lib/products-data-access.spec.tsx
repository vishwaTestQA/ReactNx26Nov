import { render } from '@testing-library/react';

import ProductsDataAccess from './products-data-access';

describe('ProductsDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductsDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});
