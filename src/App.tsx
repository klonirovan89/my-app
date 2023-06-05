import React, {useState} from 'react';
import './App.css';
import Component from "./Component";
import {v1} from 'uuid';


export type MoneyType = {
    banknots: string,
    nominal: number,
    number: string
}

export type filteredType = "all" | "Dollars" | "RUB";

const App = () => {

    let [money, setMoney] = useState<MoneyType[]>([
            {banknots: 'Dollars', nominal: 100, number: v1()},
            {banknots: 'Dollars', nominal: 50, number: v1()},
            {banknots: 'RUB', nominal: 100, number: v1()},
            {banknots: 'Dollars', nominal: 100, number: v1()},
            {banknots: 'Dollars', nominal: 50, number: v1()},
            {banknots: 'RUB', nominal: 100, number: v1()},
            {banknots: 'Dollars', nominal: 50, number: v1()},
            {banknots: 'RUB', nominal: 50, number: v1()}
        ]
    )

    let [tasksForTodoList, setFilter] = useState<MoneyType[]>(money);

    const addTask = (title: string) => {
        if (title != "RUB" && title != "Dollars") {
            alert("Введите верное значение")
        }
        if (title == "RUB" || title == "Dollars") {
            let task = {banknots: title, nominal: 1, number: v1()};
            let newTasks = [task, ...tasksForTodoList];
            setMoney(newTasks);
            setFilter(newTasks)
        }
    }

    const deleteMoney = (number: string) => {
        setMoney(tasksForTodoList.filter(c => c.number != number))
        setFilter(tasksForTodoList.filter(c => c.number != number))
    }

    const filterResult = (filtered: filteredType) => {

        if (filtered == 'all') {
            setFilter(money.filter(c => c.banknots == 'Dollars' || c.banknots == 'RUB'))
        }
        if (filtered == 'RUB') {
            setFilter(money.filter(c => c.banknots == 'RUB'))
        }
        if (filtered == 'Dollars') {
            setFilter(money.filter(c => c.banknots == 'Dollars'))
        }
    }

    return (
        <div className="App">
            <Component
                tasksForTodoList={tasksForTodoList}
                filterResult={filterResult}
                addTask={addTask}
                deleteMoney={deleteMoney}
            />
        </div>
    );
}

export default App;

