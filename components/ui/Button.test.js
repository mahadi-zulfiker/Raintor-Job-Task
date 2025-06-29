// components/ui/Button.test.js
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders a button with text content', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders a button with a specific variant', () => {
    render(<Button variant="outline">Outline Button</Button>);
    const buttonElement = screen.getByText(/Outline Button/i);
    expect(buttonElement).toHaveClass('border');
  });

  it('renders a button with a specific size', () => {
    render(<Button size="lg">Large Button</Button>);
    const buttonElement = screen.getByText(/Large Button/i);
    // Corrected expected classes for size="lg" based on your Button.tsx
    // The classes for size="lg" are "h-10", "rounded-md", "px-6", and "has-[>svg]:px-4"
    expect(buttonElement).toHaveClass('h-10', 'rounded-md', 'px-6');
    // You might also want to assert on 'has-[>svg]:px-4' if that's critical,
    // but the core size dimensions are usually h-XX and px-YY.
  });
});