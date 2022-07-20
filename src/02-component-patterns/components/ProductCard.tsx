
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { ReactElement } from 'react';
import { Provider } from '../context/ProductContext';
import { onChangeArgs, Product } from '../interfaces/ProductInterfaces';

export interface Props {
    product: Product,
    children?: ReactElement | ReactElement[]
    className?: string,
    style?: React.CSSProperties,
    onChange?: (args: onChangeArgs) => void,
    value?: number
}

export const ProductCard = ({ children, product, className, style, onChange, value}: Props) => {

    const { counter, onHandleIncrease } = useProduct({ onChange, product, value});



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

