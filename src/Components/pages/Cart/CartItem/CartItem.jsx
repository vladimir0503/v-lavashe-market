import React from 'react';
import { useDispatch } from 'react-redux';
import { addCardItem, deleteCartItem, deleteItemsGroup } from '../../../../redux/cardReduser';
import trash from '../../../../common/images/trash.png';

import './CartItem.scss';

const CartItem = ({ imageUrl, name, price, id, count, sum, promo }) => {

    const dispatch = useDispatch();

    const addItem = () => {
        const newItem = {
            imageUrl,
            name,
            price,
            promo,
            id: Math.random().toString(36).substr(2, 9)
        };
        dispatch(addCardItem(newItem));
    };

    const deleteItem = () => {
        if (count !== 1) {
            dispatch(deleteCartItem({ id, price, name }));
        } else {
            dispatch(deleteItemsGroup({ name, sum }));
        };
    };

    const deleteGroup = () => {
        if (!window.confirm('Вы уверены?')) return;
        dispatch(deleteItemsGroup({ name, sum }));
    };

    return (
        <div className='CartItem--wrapper'>
            <img className='CartItem--itemImg' src={imageUrl ? imageUrl : 'https://i.stack.imgur.com/y9DpT.jpg'} alt='item' />
            <p className='CartItem--name'>{name}</p>
            <div>
                <div className='CartItem--control_block'>
                    <div className='CartItem--button_selector'>
                        <button onClick={deleteItem} className='button_selector--btn1'>-</button>
                        <div><p>{count}</p></div>
                        <button onClick={addItem} className='button_selector--btn2'>+</button>
                    </div>
                    <img onClick={deleteGroup} src={trash} alt='trash' />
                </div>
                <p className='CartItem--price'>{sum} р.</p>
            </div>
        </div>
    );
};

export default CartItem;