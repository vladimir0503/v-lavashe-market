import React from 'react';

import './PageHeader.scss';

const PageHeader = ({ title, children }) => {
    return (
        <div className='PageHeader--wrapper'>
            <div className='PageHeader--header'>
                <div className='PageHeader--title_block'>
                    <h1>{title}</h1>
                </div>
                {children}
            </div>
        </div>
    )
}

export default PageHeader
