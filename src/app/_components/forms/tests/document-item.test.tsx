// app/components/__tests__/DocumentItem.test.tsx
import { render, screen } from '@testing-library/react';
import DocumentItem from '../document-item';

describe('DocumentItem Component', () => {
  test('renders DocumentItem with given props', () => {
    const head = 'Document Title';
    const text = 'This is the document description.';

    render(<DocumentItem head={head} text={text} />);

    expect(screen.getByRole('heading', { name: head })).toBeInTheDocument();

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});

