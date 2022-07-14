
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { Props } from '../interfaces/ProductInterfaces';
import { Provider } from '../context/ProductContext';
import { ProductTitle, ProductImage, ProductButtons} from './';

export const ProductCard = ({ children, product }: Props) => {

    const { counter, onHandleIncrease } = useProduct();

    return (
        <Provider value={{ counter, onHandleIncrease, product }}>
            <div className={styles.productCard}>

                {children}
                

            </div>
        </Provider>

    )
}

