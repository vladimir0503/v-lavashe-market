import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../PageHeader/PageHeader';

import './About.scss';

const About = () => {
    return (
        <>
            <PageHeader title='О нас'>
                <div className='About--btnBlock'>
                    <Link to='/'><button>На главную</button></Link>
                </div>
            </PageHeader>
            <div className='About--contentWrapper'>
                <p><span>“В лаваше”</span>
                    - молодая, активная команда, способная Вас порадовать самой вкусной шаурмой в Москве.
                    Все наши клиенты убедились в высочайшем качестве наших блюд. Мы использует только свежие и качественные продукты.
                    Наша команда гарантирует изысканный вкус и прекрасное настроение.</p>
                <h2>Спасибо, что Вы с нами!</h2>
            </div>
        </>
    );
};

export default About;