import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import stock from '../../../common/images/stock.jpg';
import Item from '../../Items/Item';
import { fetchItems } from '../../../redux/itemsReducer';

import './Home.scss';

const Home = () => {
    const { items } = useSelector(state => state.items)

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchItems('donner'))
    }, []);

    return (
        <div className='Main--wrapper'>
            <img className='Main--stock_img' src={stock} alt='stock' />
            <div className='Main--items'>
                {items.slice(5, items.length - 1).map((item, i) => (
                    <Item key={i} {...item} />
                ))}
            </div>
            <div className='Main--delivery_info'>
                <div className='Main--'>
                    <h1>Доставка</h1>
                    <p className='Main--order_time'>Мы доставим блюдо из нашего меню в любую точку Москвы в самый удобный для Вас день с 9:00 до 21:00.</p>
                    <p className='Main--order_methods'>Заказать можно разными способами: </p>
                    <ul>
                        <li>С помощью мобильного приложения ТралиВали Клаб или Янда.Жратва</li>
                        <li>Оформить заказ через наш сайт</li>
                        <li>По телефону указанные на сайте</li>
                        <li>Посетив наше заведение</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;