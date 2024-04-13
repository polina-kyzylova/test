import styles from './OrderModal.module.css';
import React from "react";
import success from './success.png';
import { useSelector, useDispatch } from 'react-redux';
import { deleteOrder } from '../../store/slices/orderReducer';
import { clearCart } from '../../store/slices/cartReducer';


const OrderModal = () => {
    const globalOrder = useSelector((state) => state.order);
    const dispatch = useDispatch();


    return (
        globalOrder.active ? 
        <div className={styles.modal}>
            <div className={styles.modal_container} onClick={e => e.stopPropagation()}>
                <div className={styles.modal_body}>
                    <h1>Спасибо за заказ!</h1>
                    <img src={success} />
                    <p>Заказ на сумму <span>{globalOrder.resultSum} &#x20bd;</span> успешно оформлен
                        <br />СМС о готовности придет на номер <span>{globalOrder.resultPhone}</span>
                    </p>

                    <button 
                        className={styles.ok_btn}
                        onClick={() => {
                            dispatch(deleteOrder(false));
                            dispatch(clearCart(false));
                        }}
                    >Супер!</button>
                </div>
            </div>
        </div> : null
    )
}


export default OrderModal;

