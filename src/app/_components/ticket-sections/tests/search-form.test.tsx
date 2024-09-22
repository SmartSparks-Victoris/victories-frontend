// SearchForm.test.tsx

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchForm from '../search-form';
import { vi } from 'vitest';
import { useRouter } from 'nextjs-toploader/app';

vi.mock('nextjs-toploader/app', () => ({
  useRouter: vi.fn(),
}));

vi.mock('../../shared-ui/text-input', () => {
  const TextInput = ({ name, register, error, placeholder }) => (
    <div>
      <input {...register(name)} placeholder={placeholder} />
      {error && <span role="alert">{error.message}</span>}
    </div>
  );

  return { default: TextInput };
});

describe('SearchForm Component', () => {
  beforeEach(() => {
    (useRouter as vi.Mock).mockReturnValue({
      push: vi.fn(),
    });
  });

  test('renders search input', () => {
    render(<SearchForm />);

    const input = screen.getByPlaceholderText(/Search for similar Problems/i);
    expect(input).toBeInTheDocument();
  });
});

