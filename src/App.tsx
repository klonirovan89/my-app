import React, {useState} from 'react';
import './App.css';
import Component from "./Component";
import {v1} from 'uuid';


export type MoneyType = {
    banknots: string,
    nominal: number,
    number: string
}

export type filteredType = "all" | "Dollars" | "RUBLS";

function App() {

    let [money, setMoney] = useState<MoneyType[]>([
            {banknots: 'Dollars', nominal: 100, number: v1()},
            {banknots: 'Dollars', nominal: 50, number: v1()},
            {banknots: 'RUBLS', nominal: 100, number: v1()},
            {banknots: 'Dollars', nominal: 100, number: v1()},
            {banknots: 'Dollars', nominal: 50, number: v1()},
            {banknots: 'RUBLS', nominal: 100, number: v1()},
            {banknots: 'Dollars', nominal: 50, number: v1()},
            {banknots: 'RUBLS', nominal: 50, number: v1()}
        ]
    )
    let [tasksForTodoList, setFilter] = useState<MoneyType[]>(money);

    function addTask(title: string) {
        if (title != "RUBLS" && title != "Dollars") {
            alert("Введите верное значение")
        }
        if (title == "RUBLS" || title == "Dollars") {
            let task = {banknots: title, nominal: 1, number: v1()};
            let newTasks = [task, ...tasksForTodoList];
            setMoney(newTasks);
            setFilter(newTasks)
        }
    }


    function filterResult(filtered: filteredType) {

        if (filtered == 'all') {
            tasksForTodoList = money.filter(c => c.banknots == 'Dollars' || c.banknots == 'RUBLS')
            setFilter(tasksForTodoList)
        }
        if (filtered == 'RUBLS') {
            tasksForTodoList = money.filter(c => c.banknots == 'RUBLS')
            setFilter(tasksForTodoList)
        }
        if (filtered == 'Dollars') {
            tasksForTodoList = money.filter(c => c.banknots == 'Dollars')
            setFilter(tasksForTodoList)
        }
    }

    return (
        <div className="App">
            <Component
                tasksForTodoList={tasksForTodoList}
                filterResult={filterResult}
                addTask={addTask}
            />
        </div>
    );
}

export default App;

