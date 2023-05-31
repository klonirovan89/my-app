import React from 'react';
import {MoneyType} from "./App";

type PropsType = {
    filter: MoneyType[],
    filterResult: (filtered: any) => void,

}

const Component: React.FC<PropsType> = ({filter, filterResult}) => {


    function setALLFilterMoney() {
        filterResult('all')
    }

    function setRublFilterMoney() {
        filterResult('RUBLS')
    }

    function setDollarFilterMoney() {
        filterResult('Dollars')
    }

    return (
        <div className="App">
            <div>
                {filter.map((a, index) =>
                    <li key={index}>
                        <span>{a.banknots}</span>
                        <span>{a.nominal}</span>
                        <span>{a.number}</span>
                    </li>)}
            </div>
            <div className="button">
                <button onClick={setALLFilterMoney}>All</button>
                <button onClick={setRublFilterMoney}>Rubl</button>
                <button onClick={setDollarFilterMoney}>Dollar</button>
            </div>

        </div>
    );
};

export default Component;