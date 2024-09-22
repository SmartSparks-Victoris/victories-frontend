// app/components/__tests__/Label.test.tsx
import { render, screen } from '@testing-library/react';
import Label from '../label';

describe('Label Component', () => {
  test('renders with default type "danger"', () => {
    render(<Label>Danger Label</Label>);

    const label = screen.getByText(/danger label/i);
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('text-openStroke bg-openColor border-openStroke');
  });

  test('renders with type "warning"', () => {
    render(<Label type="warning">Warning Label</Label>);

    const label = screen.getByText(/warning label/i);
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass(
      'text-inProgressStroke bg-inProgressColor border-inProgressStroke',
    );
  });

  test('renders with type "success"', () => {
    render(<Label type="success">Success Label</Label>);

    const label = screen.getByText(/success label/i);
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass(
      'text-completedStroke bg-completedColor border-completedStroke',
    );
  });

  test('renders correctly with custom text', () => {
    render(<Label type="success">Custom Success Label</Label>);

    const label = screen.getByText(/custom success label/i);
    expect(label).toBeInTheDocument();
  });
});

