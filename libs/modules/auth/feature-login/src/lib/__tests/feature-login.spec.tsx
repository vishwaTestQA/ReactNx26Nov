import { render } from '@testing-library/react';

import ReactNx26NovFeatureLogin from '../component/feature-login';

describe('ReactNx26NovFeatureLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactNx26NovFeatureLogin />);
    expect(baseElement).toBeTruthy();
  });
});
