import { ProductCard as ProductCardHOC} from './ProductCard';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { ProductCardProps } from '../interfaces/ProductInterfaces';
export * from './ProductButtons';
export * from './ProductImage';
export * from './ProductTitle';

export const ProductCard: ProductCardProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
})

export default ProductCard;