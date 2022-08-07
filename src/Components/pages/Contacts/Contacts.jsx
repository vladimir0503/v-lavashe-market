import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../PageHeader/PageHeader';
import gps from '../../../common/images/gps.png'
import phone from '../../../common/images/phone.png'
import email from '../../../common/images/email.png'

import './Contacts.scss';

const Contacts = () => {
    return (
        <>
            <PageHeader title='Контакты'>
                <div className='About--btnBlock'>
                    <Link to='/'><button>На главную</button></Link>
                </div>
            </PageHeader>
            <div className='Contacts--contentWrapper'>
                <div className='Contacts--infoBlock'>
                    <div className='Contacts--infoItem'>
                        <img src={gps} alt='gps' />
                        <div>
                            <p>Россия, Москва,</p>
                            <p>м. Охотный Ряд,</p>
                            <p>Красная площадь, д. 3 </p>
                        </div>
                    </div>
                    <div className='Contacts--infoItem'>
                        <img src={phone} alt='phone' />
                        <div>
                            <a href="tel:+74951112233">+7 (495) 111-22-33</a><br></br>
                            <a href="tel:+79683332211">+7 (968) 333-22-11</a>
                        </div>
                    </div>
                    <div className='Contacts--infoItem'>
                        <img src={email} alt='email' />
                        <a
                            href="mailto:info@vlavashe.ru"
                        >
                            info@vlavashe.ru
                        </a>
                    </div>
                </div>
                <iframe
                    className='Contacts--map'
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1122.5977188165782!2d37.617501958372465!3d55.75510710450178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINC8LiDQntGF0L7RgtC90YvQuSDQoNGP0LQsINCa0YDQsNGB0L3QsNGPINC_0LvQvtGJ0LDQtNGMLCDQtC4gMw!5e0!3m2!1sru!2sru!4v1635519550274!5m2!1sru!2sru"
                    width="700"
                    height="512"
                    allowfullscreen=""
                    loading="lazy"
                >
                </iframe>
            </div>
        </>
    );
};

export default Contacts;