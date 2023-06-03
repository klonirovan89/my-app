import React, {ChangeEvent, useState} from 'react';
import {filteredType, MoneyType} from "./App";

type PropsType = {
    tasksForTodoList: MoneyType[],
    filterResult: (filtered: filteredType) => void,
    addTask: (title: string) => void
}

const Component: React.FC<PropsType> = ({tasksForTodoList, filterResult, addTask}) => {

    function setALLFilterMoney() {
        filterResult('all')
    }

    function setRublFilterMoney() {
        filterResult('RUBLS')
    }

    function setDollarFilterMoney() {
        filterResult('Dollars')
    }

    let [title, setTitle] = useState('')

    function addTasks() {
        addTask(title)
        setTitle('')
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.currentTarget.value)
    }

    return (
        <div>
            <div>
                {tasksForTodoList.map((a, index) =>
                    <li key={index}>
                        <span>BANKNOT: {a.banknots}</span>
                        <span>NOMINAL: {a.nominal}</span>
                        <span>NUMBER: {a.number}</span>
                    </li>)}
            </div>
            <div>
                <button onClick={setALLFilterMoney}>All</button>
                <button onClick={setRublFilterMoney}>Rubl</button>
                <button onClick={setDollarFilterMoney}>Dollar</button>
            </div>
            <div>
                <input value={title} onChange={handleChange}/>
                <button onClick={addTasks}>+</button>
            </div>
        </div>
    );
};

export default Component;