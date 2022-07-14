import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import styles from '../styles/styles.module.css'

export const ProductButtons = () => {
    const { onHandleIncrease, counter } = useContext( ProductContext );  
    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus}
                onClick={() => onHandleIncrease(-1)}
            >
                -
            </button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={styles.buttonAdd}
                onClick={() => onHandleIncrease(1)}
            >
                +
            </button>
        </div>
    )
}