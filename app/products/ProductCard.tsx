// app/products/ProductCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../../lib/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Link href={`/products/${product.id}`}>
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <Image src={product.image_url} alt={product.name} width={300} height={200} />
      <h2 className="font-bold">{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
    </div>
  </Link>
);

export default ProductCard;