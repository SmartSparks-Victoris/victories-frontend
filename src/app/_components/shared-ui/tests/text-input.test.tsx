import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import TextInput from '../text-input';

vi.mock('../svg/search-input', () => () => <div data-testid="search-icon" />);

const TestTextInput = (props) => {
  const { register } = useForm();
  return <TextInput {...props} register={register} />;
};

describe('TextInput Component', () => {
  test('renders input field with label and placeholder', () => {
    render(
      <TestTextInput
        label="Test Label"
        name="testInput"
        placeholder="Enter text"
        type="text"
      />,
    );

    expect(screen.getByLabelText(/test label/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter text/i)).toBeInTheDocument();
  });

  test('renders error message when error prop is provided', () => {
    render(
      <TestTextInput
        label="Test Label"
        name="testInput"
        type="text"
        error={{ message: 'This field is required' }}
      />,
    );

    expect(screen.getByText('* This field is required')).toBeInTheDocument();
  });

  test('renders textarea when type is "textarea"', () => {
    render(
      <TestTextInput
        label="Test Textarea"
        name="testTextarea"
        type="textarea"
        placeholder="Enter text"
      />,
    );

    expect(screen.getByLabelText(/test textarea/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'placeholder',
      'Enter text',
    );
  });
});

