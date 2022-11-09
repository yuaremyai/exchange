import React, { useEffect, useState } from "react";
import cl from './Exchange.module.css'
import Selector from "./Selector";
import icon from '../images/arrows.svg'


function ExchangeComponent({ USD, EUR }) {
    const [rate1, setRate1] = useState(1)
    const [rate2, setRate2] = useState(1)
    const [value1, setValue1] = useState('1')
    const [value2, setValue2] = useState('1')

    useEffect(() => {
        setValue2((value1 * rate2 / rate1).toFixed(4))
    }, [rate1, rate2])

    const calc = (event) => {

        if (event.target.getAttribute('data') === 'value1' && validate(event.target.value)) {
            setValue1(event.target.value)
            setValue2((event.target.value * rate2 / rate1).toFixed(4))
        }
        if (event.target.getAttribute('data') === 'value2' && validate(event.target.value)) {
            setValue2(event.target.value)
            setValue1((event.target.value / rate1 / rate2).toFixed(4))
        }
    }

    const validate = (value) => {
        return /^\d*\.?\d*$/.test(value)
    }

    return (
        <div className={cl.exchange}>
            <div className={cl.exchange_block}>
                <input type='text' value={value1} onChange={calc} data='value1' className={cl.exchange_input} />
                <Selector USD={USD} EUR={EUR} setRate={setRate1} />
            </div>
            <img src={icon} className={cl.exchange_icon}/>
            <div className={cl.exchange_block}>
                <input type='text' value={value2} onChange={calc} data='value2' className={cl.exchange_input} />
                <Selector USD={USD} EUR={EUR} setRate={setRate2} />
            </div>
        </div>
    )
}

export default ExchangeComponent