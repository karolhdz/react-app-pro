import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

import styles from '../styles/styles.module.css'

export interface PropsProductTitle{ 
    title?: string,
    className?: string, 
    style?: React.CSSProperties,
}

export const ProductTitle = ({ title, className, style}: PropsProductTitle) => {
    const {product} = useContext(ProductContext);
    return (
        <span className={`${styles.productDescription} ${ className }`} 
            style={style}
        > {title ? title : product.title} </span>
    )
}