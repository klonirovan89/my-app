import React, {ChangeEvent, useState} from 'react';
import {filteredType, MoneyType} from "./App";


type PropsType = {
    tasksForTodoList: MoneyType[],
    filterResult: (filtered: filteredType) => void,
    addTask: (title: string) => void,
    deleteMoney: (number: string) => void
}

const Component: React.FC<PropsType> = ({tasksForTodoList, filterResult, addTask, deleteMoney}) => {

    function setALLFilterMoney() {
        filterResult('all')
    }

    function setRubFilterMoney() {
        filterResult('RUB')
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
                        <span><b>Banknot:</b> {a.banknots} </span>
                        <span><b>Nominal:</b> {a.nominal} </span>
                        {/*<span>NUMBER: {a.number} </span>*/}
                        <button onClick={() => deleteMoney(a.number)}>x</button>
                    </li>)}
            </div>
            <div>
                <button onClick={setALLFilterMoney}>All</button>
                <button onClick={setRubFilterMoney}>Rub</button>
                <button onClick={setDollarFilterMoney}>Dollar</button>
            </div>
            <div>
                <input value={title} onChange={handleChange}/>
                <button onClick={addTasks}>SUBMIT</button>
            </div>
        </div>
    );
};

export default Component;