import { render } from '@testing-library/react';

import ReactNx26NovFeaturePayment from './feature-payment';

describe('ReactNx26NovFeaturePayment', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactNx26NovFeaturePayment />);
    expect(baseElement).toBeTruthy();
  });
});
