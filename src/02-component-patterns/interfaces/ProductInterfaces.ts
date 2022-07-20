import { PropsProductButtons, PropsProductImage, PropsProductTitle } from "../components";
import { Props as PropsProductCard, ProductCard } from '../components/ProductCard';
import { product } from '../data/products';

export interface Product {
    id: string,
    title: string,
    img?: string,
}

export interface ProductButtonsProps {
    counter: number,
    onHandleIncrease: (value: number) => void,
}

export interface ProductContextProps{
    counter: number,
    product: Product,
    onHandleIncrease: (value: number) => void,
    maxCount?: number,
}

export interface ProductCardProps {
    ({ children, product }: PropsProductCard): JSX.Element,
    Title:   (Props: PropsProductTitle)   => JSX.Element;
    Image:   (Props: PropsProductImage)   => JSX.Element;
    Buttons: (Props: PropsProductButtons) => JSX.Element;

}

export interface onChangeArgs {
    product: Product,
    count: number,
    
}

export interface ProductInCart extends Product {
    count: number
}

export interface InitialValue {
    count?: number,
    maxCount?: number,
}

export interface ProductCardHandlers{
    count: number,
    isMaxCountReached: boolean,
    maxCount?: number,
    product: Product,

    onHandleIncrease: (value: number) => void,
    reset: () => void
}