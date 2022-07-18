
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { ReactElement } from 'react';
import { Provider } from '../context/ProductContext';
import { ProductTitle, ProductImage, ProductButtons} from './';
import { Product } from '../interfaces/ProductInterfaces';

export interface Props {
    product: Product,
    children?: ReactElement | ReactElement[]
    className?: string,
    style?: React.CSSProperties,
}

export const ProductCard = ({ children, product, className, style}: Props) => {

    const { counter, onHandleIncrease } = useProduct();

    return (
        <Provider value={{ counter, onHandleIncrease, product }}>
            <div 
                className={`${styles.productCard} ${className}`}
                style={style}
            >

                {children}
                

            </div>
        </Provider>

    )
}

