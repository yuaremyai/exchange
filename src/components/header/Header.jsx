import React from 'react'
import cl from './Header.module.css'
import icon from '../../images/arrows.svg'

function Header({ EUR, USD }) {
    return (
        <div className={cl.header}>
            <img src={icon} alt='icon' className={cl.header_icon} />
            <div className={cl.header_title}>Currency Exchange</div>
            <div className={`${cl.base_currency}`}>1 {EUR.base_ccy} = </div>
            <div className={cl.anim}>
                <div className={`${cl.currency} ${cl.eur}`}>{parseFloat(EUR.buy)} {EUR.ccy}</div>
                <div className={`${cl.currency} ${cl.usd}`}>{parseFloat(USD.buy)} {USD.ccy}</div>
            </div>

        </div>
    )
}

export default Header