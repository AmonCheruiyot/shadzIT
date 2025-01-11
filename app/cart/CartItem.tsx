// app/cart/CartItem.tsx
import { Product } from '../../lib/types/product';
import { Button } from '../components/ui/Button';

interface CartItemProps {
  product: Product;
  quantity: number;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, quantity, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div>
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)} x {quantity}</p>
      </div>
      <div className="flex items-center">
        <Button onClick={() => onUpdateQuantity(product.id, quantity > 1 ? quantity - 1 : 1)}>-</Button>
        <span className="mx-2">{quantity}</span>
        <Button onClick={() => onUpdateQuantity(product.id, quantity + 1)}>+</Button>
        <Button className="bg-red-500" onClick={() => onRemove(product.id)}>Remove</Button>
      </div>
    </div>
  );
};

export default CartItem;