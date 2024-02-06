import { render, screen } from '@testing-library/react';
import ProductCard from '../../productCard';
import watch from '../../../../../public/images/apple-watch.png'

const mockItem = {
    id: 1,
    name: "Apple Smart Watch",
    discount: "10% Off",
    price: 12000,
    rating: 3,
    image: watch,
    is_fav: true,
}

describe('ProductCard', () => {
    test('renders product Card', () => {
        render(<ProductCard item={mockItem} />);
        const card = screen.getByTestId('product_card');
        expect(card).toBeInTheDocument();
    })
});