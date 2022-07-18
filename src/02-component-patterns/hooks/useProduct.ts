import { useEffect, useState } from 'react';
import { Product, onChangeArgs } from '../interfaces/ProductInterfaces';


interface useProductArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void, 
    value?: number
}

export const useProduct = ( {onChange, product, value = 0}: useProductArgs ) =>{

    const [counter, setCounter] = useState(value);
    const onHandleIncrease = (value:number) =>{

        const NewValue = Math.max(counter + value, 0)      
        setCounter(NewValue)

        onChange && onChange({count: NewValue, product });
    }

    useEffect(() => {
        setCounter(value);
    }, [value]);


    return{
        counter,
        onHandleIncrease,
    }
}