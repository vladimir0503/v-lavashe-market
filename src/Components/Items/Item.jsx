import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCardItem } from '../../redux/cardReduser';

import './Item.scss';

const Item = ({ imageUrl, name, price, promo }) => {

    const { items } = useSelector(state => state.cart);
    const itemCount = items.flat().filter(item => item.name === name).length;

    const dispatch = useDispatch();

    const addItem = () => {
        const newItem = {
            imageUrl,
            name,
            price,
            promo,
            id: Math.random().toString(36).substr(2, 9)
        }
        dispatch(addCardItem(newItem));
    };

    const currentNameSize = length => {
        if (length >= 10) {
            return 'currentSize'
        } else {
            return '';
        };
    };

    return (
        <div className='Item--wrapper'>
            <img src={imageUrl ? imageUrl : 'https://i.stack.imgur.com/y9DpT.jpg'} alt='item-img' />
            {/* <p className={`Item--name ${name === 'С фрикадельками' ? 'currentSize' : ''}`}>{name}</p> */}
            <p className={`Item--name ${currentNameSize(name.length)}`}>{name}</p>
            <div className='Item--button_block'>
                <div className='Item--price_block'>
                    <p className={`Item--stock ${promo ? 'stockInit' : null}`}>Акция!!!</p>
                    <p className={`Item--price ${promo ? 'stockInit' : null}`}>{price}р.</p>
                </div>
                <button onClick={addItem}>
                    {itemCount
                        ? <span>{`в корзине ${itemCount}`}</span>
                        : 'в корзину'
                    }
                </button>
            </div>
        </div>
    );
};

export default Item;