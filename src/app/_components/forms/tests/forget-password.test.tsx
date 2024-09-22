import { render, screen } from '@testing-library/react';
import ForgetPassword from '../forget-password';

vi.mock('@/app/_hooks/useAnimation', () => ({
  __esModule: true,
  default: () => ({
    setIsStepTransitionComplete: vi.fn(),
    animationVariants: {
      hiddenLeft: {},
      visible: {},
    },
  }),
}));

const mockSetStep = vi.fn();
const mockSetUsername = vi.fn();
const mockSetMobile = vi.fn();

describe('ForgetPassword Component', () => {
  beforeEach(() => {
    render(
      <ForgetPassword
        setStep={mockSetStep}
        setUsername={mockSetUsername}
        setMobile={mockSetMobile}
      />,
    );
  });

  test('renders ForgetPassword with input fields', () => {
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mobile/i)).toBeInTheDocument();
    expect(screen.getByText(/find your account/i)).toBeInTheDocument();
  });
});

