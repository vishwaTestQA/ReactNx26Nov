import { render } from '@testing-library/react';

import ReactNx26NovUiKit from './ui-kit';

describe('ReactNx26NovUiKit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactNx26NovUiKit />);
    expect(baseElement).toBeTruthy();
  });
});
