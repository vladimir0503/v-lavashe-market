import React from 'react';
import { Link } from 'react-router-dom';
import burger from '../../../common/images/burger.png';
import logo from '../../../common/images/logo.png'
import close from '../../../common/images/close.png'

import './BurgerMenu.scss';

const BurgerMenu = () => {
    const [burgerInit, setBurgerInit] = React.useState(false);

    const burgerRef = React.useRef();
    const burgerBtnRef = React.useRef()

    const closeBurger = () => {
        setBurgerInit(false);
    };

    const externalClickInit = e => {
        if (e.path.includes(burgerBtnRef.current)) return;

        if (!e.path.includes(burgerRef.current)) {
            closeBurger();
        };
    };

    React.useEffect(() => {
        document.body.addEventListener('click', externalClickInit);

        return () => document.body.removeEventListener('click', externalClickInit);
    }, []);

    return (
        <>
            <img ref={burgerBtnRef} onClick={() => setBurgerInit(true)} className='BurgerMenu__img' src={burger} />
            <div className={`BurgerMenu ${burgerInit ? 'active' : ''}`}>
                <div ref={burgerRef} className={`BurgerMenu__sideBar ${burgerInit ? 'active' : ''}`}>
                    <div className='BurgerMenu__closeWrapper'>
                        <img onClick={closeBurger} className='BurgerMenu__close' src={close} />
                    </div>
                    <div className='BurgerMenu__content'>
                        <img className='BurgerMenu__logo' src={logo} alt='logo' />
                        <nav>
                            <ul>
                                <li onClick={closeBurger}><Link to="/">Главная</Link></li>
                                <li onClick={closeBurger}><Link to="/menu">Меню</Link></li>
                                <li onClick={closeBurger}><Link to="/about">О нас</Link></li>
                                <li onClick={closeBurger}><Link to="/contacts">Контакты</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BurgerMenu;