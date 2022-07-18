import { PropsProductButtons, PropsProductImage, PropsProductTitle } from "../components";
import { Props as PropsProductCard} from "../components/ProductCard";

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
}

export interface ProductCardProps {
    ({ children, product }: PropsProductCard): JSX.Element,
    Title:   (Props: PropsProductTitle)   => JSX.Element;
    Image:   (Props: PropsProductImage)   => JSX.Element;
    Buttons: (Props: PropsProductButtons) => JSX.Element;

}