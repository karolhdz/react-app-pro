import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css'
import { useShoppinCard } from '../hooks/useShoppingCard';

export const ShoopingPage = () => {

    const {onProductCountChange, shoppingCart} = useShoppinCard();

return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>

            {
                products.map(pro => (<ProductCard key={pro.id}
                    className='bg-dark text-white'
                    product={pro} 
                    onChange={onProductCountChange}
                    value={ shoppingCart[pro.id]?.count || 0  }
                >
                    <ProductImage className='custom-image' />
                    <ProductTitle />
                    <ProductButtons className='custom-buttons' />

                </ProductCard>))
            }
            {/* <ProductCard product={product}
                    className='bg-dark text-white'
                >
                    <ProductCard.Image className='custom-image'/>
                    <ProductCard.Title className='text-white'/>
                    <ProductCard.Buttons className='custom-buttons'/>

                </ProductCard> */}

        </div>

        <div className='shopping-cart'>
            {
                Object.entries(shoppingCart).map(([key, prodInCart]) => (
                    <ProductCard product={prodInCart}
                        className='bg-dark text-white'
                        style={{ width: '100px' }}
                        key={key}
                        value={prodInCart.count}
                        onChange={onProductCountChange}
                    >
                        <ProductCard.Image className='custom-image' />
                        <ProductTitle />
                        <ProductCard.Buttons className='custom-buttons'
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        />

                    </ProductCard>
                ))
            }
        </div>

    </div>
)
}

export default ShoopingPage
