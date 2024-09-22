import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import SearchBar from '../searchbar';
import { useRouter } from 'nextjs-toploader/app';
import { useForm } from 'react-hook-form';
import { usePathname } from 'next/navigation';

vi.mock('nextjs-toploader/app', () => ({
  useRouter: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

vi.mock('react-hook-form', () => ({
  useForm: vi.fn(),
}));

describe('SearchBar', () => {
  const mockPush = vi.fn();
  const mockRegister = vi.fn();
  const mockHandleSubmit = vi.fn((onSuccess) => (data) => onSuccess(data));
  const mockPathname = '/profile';

  beforeEach(() => {
    (useRouter as vi.Mock).mockReturnValue({ push: mockPush });
    (usePathname as vi.Mock).mockReturnValue(mockPathname);
    (useForm as vi.Mock).mockReturnValue({
      register: (name) => mockRegister(name),
      handleSubmit: mockHandleSubmit,
      formState: { errors: {} },
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders user information and handles search', () => {
    const user = { fullname: 'John Doe', img: '/images/john.png' };

    render(<SearchBar user={user} />);

    const userFullname = screen.getByText('John Doe');
    expect(userFullname).toBeInTheDocument();

    const profileImage = screen.getByAltText('');
    expect(profileImage).toHaveAttribute('src', '/images/john.png');

    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'query' } });
  });

  it('displays default image when user image is missing', () => {
    const user = { fullname: 'John Doe', img: null };

    render(<SearchBar user={user} />);

    const defaultImage = screen.getByAltText('');
    expect(defaultImage).toHaveAttribute('src', '/images/default.png');
  });
});

