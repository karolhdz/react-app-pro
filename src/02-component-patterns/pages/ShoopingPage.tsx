import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css'

const product = products[0]

export const ShoopingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <ProductCard
                key={product.id}
                className='bg-dark text-white'
                product={product}
                initialValues={{
                    count: 4,
                    maxCount: 10,
                }}
            >
                {
                    ({reset, count, onHandleIncrease, isMaxCountReached}) => (
                        <>
                            <ProductImage className='custom-image' />
                            <ProductTitle />
                            <ProductButtons className='custom-buttons' />
                            <button onClick={reset}>reset</button>
                            <button onClick={() => onHandleIncrease(-2)} > -2  </button>
                            <span> {count} </span>
                            {
                                !isMaxCountReached && (<button onClick={() => onHandleIncrease(2)}
                                className={isMaxCountReached ? 'display: none' : ''}
                            > 
                            +2 </button>)
                            }
                            
                        </>
                    )
                }
            </ProductCard>
        </div>
    )
}

export default ShoopingPage
