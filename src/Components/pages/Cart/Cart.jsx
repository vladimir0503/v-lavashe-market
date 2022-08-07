import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import { cleanCart } from '../../../redux/cardReduser';

import './Cart.scss';

const Cart = () => {

    const { items, sum } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const handleCleanCart = () => {
        if (!window.confirm('Вы уверены?')) return;
        dispatch(cleanCart());
    };

    const getSumItem = item => {
        return item.reduce((accum, currentVal) => accum + currentVal.price, 0)
    }

    const handleCheckout = () => {
        if (!window.confirm(`Сумма заказа составила ${sum} р. Оформляем?`)) return;
        dispatch(cleanCart());
    };

    return (
        <div className='Cart--wrapper'>
            <div className='Cart--header'>
                <div className='Card--title_block'>
                    <h1>Корзина</h1>
                    {!!items.flat().length && <button onClick={handleCleanCart}>Отчистить</button>}
                </div>
                <div className='Card--sum_block'>
                    {items.flat().length
                        ? <>
                            <button onClick={handleCheckout}>Оформить заказ</button>
                            <p className='Card--sum'>Общая сумма {sum} р.</p>
                            <p className='Card--sum_mobile'>Сумма: {sum} р.</p>
                        </>
                        : <Link to='/'><button>На главную</button></Link>
                    }

                </div>
            </div>
            {items.flat().length
                ? items.filter(item => item.length).map((item, i) => (
                    <CartItem
                        key={i}
                        count={item.length}
                        sum={getSumItem(item)}
                        {...item[0]}
                    />
                ))
                : <div className='Card--empty'>
                    <p>Ваша корзина пуста</p>
                </div>
            }
        </div>
    );
};

export default Cart;