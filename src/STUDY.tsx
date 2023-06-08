import React, {useState} from 'react';
import './App.css';

type studentsType = {
    name: string,
    age: number,
    city: string
}

const students: studentsType[] = [
    {
        name: "Pasha",
        age: 30,
        city: "Brest"
    },
    {
        name: "Misha",
        age: 32,
        city: "Minsk"
    },
    {
        name: "Sasha",
        age: 50,
        city: "Homel"
    }
]

const STUDY = () => {

    return (
        <div>
            {students.map(a =>
                <div><b>Name:</b> {a.name}, <b>Age:</b> {a.age}, <b>City:</b> {a.city}</div>


            )}
        </div>
    )
}

export default STUDY;

