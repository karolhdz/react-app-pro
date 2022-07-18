import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

import styles from '../styles/styles.module.css'
import noImage from "../assets/no-image.jpg";

export interface PropsProductImage{
    img?: string,
    className?: string,
    style?: React.CSSProperties,
}

export const ProductImage = ({ img, className, style}: PropsProductImage) => {
    const {product} = useContext(ProductContext);
    let imgToShow: string;

    if(img){
        imgToShow = img
    }else if(product.img)
        imgToShow = product.img
    else{
        imgToShow = noImage
    }

    return (
        <img className={`${styles.productImg} ${className}`} src={imgToShow} alt="Product" style={style} />
    )
}