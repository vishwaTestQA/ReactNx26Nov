import { render } from '@testing-library/react';

import FeatureProducts from './feature-products';

describe('FeatureProducts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureProducts />);
    expect(baseElement).toBeTruthy();
  });
});
