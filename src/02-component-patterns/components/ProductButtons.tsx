import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import styles from '../styles/styles.module.css'

export interface PropsProductButtons{
    className?: string,
    style?: React.CSSProperties,
}

export const ProductButtons = ({className, style} : PropsProductButtons) => {
    const { onHandleIncrease, counter } = useContext( ProductContext );  
    return (
        <div className={`${styles.buttonsContainer} ${ className }`}
            style={style}
        >
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