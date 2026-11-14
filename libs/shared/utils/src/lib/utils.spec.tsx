import { render } from '@testing-library/react';

import ReactNx26NovUtils from './utils';

describe('ReactNx26NovUtils', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactNx26NovUtils />);
    expect(baseElement).toBeTruthy();
  });
});
