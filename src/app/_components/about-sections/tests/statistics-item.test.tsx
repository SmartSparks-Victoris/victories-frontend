import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StatisticsItem from '../statistics-item';

describe('StatisticsItem Component', () => {
  it('renders the number and text correctly', () => {
    const number = '2,555+';
    const text = 'lorem ipsum';

    render(<StatisticsItem number={number} text={text} />);

    const numberElement = screen.getByRole('heading', {
      level: 2,
      name: number,
    });
    expect(numberElement).toBeInTheDocument();

    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
  });
});

