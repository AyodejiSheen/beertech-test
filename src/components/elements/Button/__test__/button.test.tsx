import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../button';

describe('Button', () => {
    test('renders default button', () => {
        render(<Button>Click me</Button>);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('bg-primary text-white h-12 text-sm px-8');
    });

    test('renders white button', () => {
        render(<Button variant='white'>Click me</Button>);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('bg-gray-50/30 shadow-lg shadow-gray-200/60');
    });

    test('handles click events', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);
        const buttonElement = screen.getByRole('button');

        fireEvent.click(buttonElement);

        expect(handleClick).toHaveBeenCalled();
    });
});
