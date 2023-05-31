import React, {useState} from 'react';
import './App.css';
import Component from "./Component";


export type MoneyType = {
    banknots: string,
    nominal: number,
    number: string
}

type filteredType = {
    filtered: any;
}

function App() {


    let [money, setMoney] = useState([
            {banknots: 'Dollars', nominal: 100, number: ' a1234567890'},
            {banknots: 'Dollars', nominal: 50, number: ' z1234567890'},
            {banknots: 'RUBLS', nominal: 100, number: ' w1234567890'},
            {banknots: 'Dollars', nominal: 100, number: ' e1234567890'},
            {banknots: 'Dollars', nominal: 50, number: ' c1234567890'},
            {banknots: 'RUBLS', nominal: 100, number: ' r1234567890'},
            {banknots: 'Dollars', nominal: 50, number: ' x1234567890'},
            {banknots: 'RUBLS', nominal: 50, number: ' v1234567890'}
        ]
    )

    let [filter, setFilter] = useState<MoneyType[]>(money);

    function filterResult(filtered: any) {
        if (filtered == 'all') {
            filter = money.filter(c => c.banknots == 'Dollars' || c.banknots == 'RUBLS')
            setFilter(filter)
        }
        if (filtered == 'RUBLS') {
            filter = money.filter(c => c.banknots == 'RUBLS')
            setFilter(filter)
        }
        if (filtered == 'Dollars') {
            filter = money.filter(c => c.banknots == 'Dollars')
            setFilter(filter)
        }
    }

    return (

        <div className="App">
            <Component
                filter={filter}
                filterResult={filterResult}
            />
        </div>
    );
}

export default App;
