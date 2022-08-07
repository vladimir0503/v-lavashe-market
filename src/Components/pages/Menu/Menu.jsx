import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../../../redux/itemsReducer';
import Item from '../../Items/Item';
import Loader from '../../../common/Loader/Loader';
import PageHeader from '../PageHeader/PageHeader';

import './Menu.scss';

const buttons = [
    {
        nameRu: 'Шаурма',
        nameEng: 'donner'
    },
    {
        nameRu: 'Супы',
        nameEng: 'sup'
    },
    {
        nameRu: 'Салаты',
        nameEng: 'salad'
    },
];

const Menu = () => {
    const [sortName, setSortName] = React.useState('donner');
    const [btnInit, setBtnInit] = React.useState(0);

    const dispatch = useDispatch();
    const { items, isLoading } = useSelector(state => state.items);

    const handleSort = (name, index) => {
        setSortName(name);
        setBtnInit(index);
    };

    React.useEffect(async () => {
        dispatch(fetchItems(sortName));
    }, [sortName]);

    return (
        <div className='Menu--wrapper'>
            <PageHeader title='Меню'>
                <div className='Menu--sort_block__btn_block'>
                    {buttons.map(({ nameRu, nameEng }, i) => (
                        <button
                            key={i}
                            className={i === btnInit ? 'active' : null}
                            onClick={() => handleSort(nameEng, i)}
                        >
                            {nameRu}
                        </button>
                    ))}
                </div>
            </PageHeader>
            <div className='Menu--wrapper__items_block'>
                {isLoading
                    ? <div className='Menu--wrapper__loader-block'>
                        <Loader />
                    </div>
                    : items && items.map((item, i) =>
                        <Item key={i} {...item} />
                    )}
            </div>
        </div>
    );
};

export default Menu;