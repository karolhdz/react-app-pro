import { ProductCard } from '../components';

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
                <ProductCard product={Product}>
                    <ProductCard.Image/>
                    <ProductCard.Title/>
                    <ProductCard.Buttons/>

                </ProductCard>
                {/* <ProductCard product={Product}>
                    <ProductImage/>
                    <ProductTitle/>
                    <ProductButtons/>

                </ProductCard> */}
            </div>

        </div>
    )
}

export default ShoopingPage
