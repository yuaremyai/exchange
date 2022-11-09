import React from "react";

function Selector({ USD, EUR, setRate }) {

    return (
        <select onChange={(event) => {setRate(1 / event.target.value)}}>
            <option value={1}>{USD.base_ccy}</option>
            <option value={USD.buy}>{USD.ccy}</option>
            <option value={EUR.buy}>{EUR.ccy}</option>
        </select>
    )
}

export default Selector