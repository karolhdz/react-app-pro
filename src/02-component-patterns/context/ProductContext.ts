import { createContext } from 'react';
import { ProductContextProps } from '../interfaces/ProductInterfaces';

export const ProductContext = createContext({} as ProductContextProps);
export const { Provider } = ProductContext;