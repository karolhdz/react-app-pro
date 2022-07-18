import { ProductButtons,ProductImage, ProductTitle, ProductCard } from '../components';
import '../styles/custom-styles.css'

const Product ={
    id: '1',
    title: 'Coffe-Mug',
    img: './coffee-mug.png'
}

export const ShoopingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display:'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={Product}
                    className='bg-dark text-white'
                >
                    <ProductCard.Image className='custom-image'/>
                    <ProductCard.Title className='text-white'/>
                    <ProductCard.Buttons className='custom-buttons'/>

                </ProductCard>
                <ProductCard 
                    className='bg-dark text-white'
                    product={Product}>
                    <ProductImage className='custom-image'/>
                    <ProductTitle/>
                    <ProductButtons className='custom-buttons'/>

                </ProductCard>
                <ProductCard 
                    product={Product} style={{backgroundColor: '#70D1F8'}}>
                    <ProductImage style={{boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)'}}/>
                    <ProductTitle style={{color: 'blue'}}/>
                    <ProductButtons 
                        style={{display: 'flex', justifyContent: 'end'}}
                    />

                </ProductCard>
            </div>

        </div>
    )
}

export default ShoopingPage
