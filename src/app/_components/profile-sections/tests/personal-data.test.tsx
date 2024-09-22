// PersonalData.test.tsx
import { render, screen } from '@testing-library/react';
import PersonalData from '../personal-data';

vi.mock('../image-upload', () => {
  return {
    default: ({ initialImageUrl, userId }) => (
      <div data-testid="image-upload-form">
        ImageUploadForm for user {userId}
      </div>
    ),
  };
});

vi.mock('../personal-info-form', () => {
  return {
    default: ({ data }) => (
      <div data-testid="personal-info-form">Personal Info for {data.fname}</div>
    ),
  };
});

vi.mock('../password-form', () => {
  return {
    default: () => <div data-testid="password-form">Password Form</div>,
  };
});

vi.mock('../admins', () => {
  return {
    default: () => <div data-testid="admins">Admins Component</div>,
  };
});

vi.mock('../customers', () => {
  return {
    default: () => <div data-testid="customers">Customers Component</div>,
  };
});

describe('PersonalData', () => {
  it('renders correctly with user data', () => {
    const user = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'owner',
    };

    render(<PersonalData user={user} />);

    expect(screen.getByText(/Profile/i)).toBeInTheDocument();
    expect(screen.getByText(/Manage employee data/i)).toBeInTheDocument();
    expect(screen.getByTestId('image-upload-form')).toBeInTheDocument();
    expect(screen.getByTestId('personal-info-form')).toBeInTheDocument();
    expect(screen.getByTestId('password-form')).toBeInTheDocument();
    expect(screen.getByTestId('admins')).toBeInTheDocument();
    expect(screen.queryByTestId('customers')).not.toBeInTheDocument();
  });

  it('renders Customers component for admin role', () => {
    const user = {
      id: '2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      role: 'admin',
    };

    render(<PersonalData user={user} />);

    expect(screen.getByText(/Profile/i)).toBeInTheDocument();
    expect(screen.getByTestId('image-upload-form')).toBeInTheDocument();
    expect(screen.getByTestId('personal-info-form')).toBeInTheDocument();
    expect(screen.getByTestId('password-form')).toBeInTheDocument();
    expect(screen.queryByTestId('admins')).not.toBeInTheDocument();
    expect(screen.getByTestId('customers')).toBeInTheDocument();
  });

  it('does not render Admins or Customers components if role is not owner or admin', () => {
    const user = {
      id: '3',
      name: 'Alice Smith',
      email: 'alice@example.com',
      role: 'user',
    };

    render(<PersonalData user={user} />);

    expect(screen.getByText(/Profile/i)).toBeInTheDocument();
    expect(screen.getByTestId('image-upload-form')).toBeInTheDocument();
    expect(screen.getByTestId('personal-info-form')).toBeInTheDocument();
    expect(screen.getByTestId('password-form')).toBeInTheDocument();
    expect(screen.queryByTestId('admins')).not.toBeInTheDocument();
    expect(screen.queryByTestId('customers')).not.toBeInTheDocument();
  });
});

