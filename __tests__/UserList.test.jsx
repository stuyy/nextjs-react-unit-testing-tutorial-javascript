import { UserList } from '@/components/UserList';
import { render } from '@testing-library/react';

describe('UserList - Rendering', () => {
  it('should have the text anson', () => {
    render(<UserList />);
  });
});
