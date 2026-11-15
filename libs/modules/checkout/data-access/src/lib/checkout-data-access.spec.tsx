import { render } from '@testing-library/react';

import CheckoutDataAccess from './checkout-data-access';

describe('CheckoutDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckoutDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});
