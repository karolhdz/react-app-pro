
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { ReactElement } from 'react';
import { Provider } from '../context/ProductContext';
import { ProductTitle, ProductImage, ProductButtons} from './';
import { InitialValue, onChangeArgs, Product, ProductCardHandlers } from '../interfaces/ProductInterfaces';

export interface Props {
    product: Product,
    // children?: ReactElement | ReactElement[]
    children: ( args: ProductCardHandlers ) => JSX.Element
    className?: string,
    style?: React.CSSProperties,
    onChange?: (args: onChangeArgs) => void,
    value?: number,
    initialValues?: InitialValue
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues}: Props) => {



    const { counter, onHandleIncrease, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues});

    return (
        <Provider value={{ counter, onHandleIncrease, product, maxCount }}>
            <div 
                className={`${styles.productCard} ${className}`}
                style={style}
            >

                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    onHandleIncrease,
                    reset,
                    product,
                })}
                

            </div>
        </Provider>

    )
}

