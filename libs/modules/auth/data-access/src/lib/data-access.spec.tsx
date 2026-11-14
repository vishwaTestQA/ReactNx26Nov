import { render } from '@testing-library/react';

import ReactNx26NovDataAccess from './data-access';

describe('ReactNx26NovDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactNx26NovDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});
