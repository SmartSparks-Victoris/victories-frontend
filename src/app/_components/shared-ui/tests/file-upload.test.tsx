// app/components/__tests__/FileUpload.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import FileUpload from '../file-upload';

describe('FileUpload Component', () => {
  const setValueMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders file upload button', () => {
    render(<FileUpload setValue={setValueMock} />);

    const uploadButton = screen.getByText(/upload your file here/i);
    expect(uploadButton).toBeInTheDocument();
  });
});

