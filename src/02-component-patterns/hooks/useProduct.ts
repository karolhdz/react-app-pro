import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs, InitialValue } from '../interfaces/ProductInterfaces';


interface useProductArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void, 
    value?: number,
    initialValues?: InitialValue,
}

export const useProduct = ( {onChange, product, value = 0, initialValues}: useProductArgs ) =>{
    const isMounted = useRef(false);

    

    const [counter, setCounter] = useState<number>( initialValues?.count || value );

    const onHandleIncrease = (value:number) =>{

        let NewValue = Math.max(counter + value, 0)
        // if(initialValues?.maxCount && NewValue > initialValues?.maxCount) return; 
        if(initialValues?.maxCount){
            NewValue = Math.min(NewValue, initialValues.maxCount);
        } 
        setCounter(NewValue)

        onChange && onChange({count: NewValue, product });
    }

    useEffect(() => {
        if(!isMounted.current) return
        setCounter(value);
    }, [value]);
    

    // useEffect(() => {
    //     isMounted.current = true;
    // }, []);


    const reset = () =>{
        setCounter(initialValues?.count || value);
    }

    return{
        counter,
        onHandleIncrease,
        isMaxCountReached: !!initialValues?.maxCount && counter === initialValues?.maxCount,
        maxCount: initialValues?.maxCount,
        reset,
    }
}