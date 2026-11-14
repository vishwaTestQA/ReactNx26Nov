import { render } from '@testing-library/react';

import ReactNx26NovHttpClient from './http-client';

describe('ReactNx26NovHttpClient', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactNx26NovHttpClient />);
    expect(baseElement).toBeTruthy();
  });
});
