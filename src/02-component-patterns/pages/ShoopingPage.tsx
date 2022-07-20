import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css'

const product = products[0]

export const ShoopingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />



            <ProductCard key={product.id}
                className='bg-dark text-white'
                product={product}

            >
                <ProductImage className='custom-image' />
                <ProductTitle />
                <ProductButtons className='custom-buttons' />

            </ProductCard>




        </div>
    )
}

export default ShoopingPage
