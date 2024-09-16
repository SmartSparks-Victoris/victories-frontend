import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Trial from './trial';

test('Trial', () => {
  render(<Trial />);
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined();
});

