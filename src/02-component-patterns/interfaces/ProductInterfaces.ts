import { ReactElement } from 'react';
export interface Props {
    product: Product,
    children?: ReactElement | ReactElement[]

}

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
    ({ children, product }: Props): JSX.Element,
    Title:  ({ title }: {title?: string | undefined}) => JSX.Element;
    Image: ({ img }: {img?: string | undefined;}) => JSX.Element;
    Buttons: () => JSX.Element;

}