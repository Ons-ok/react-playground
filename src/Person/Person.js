import React from 'react'
import classes from './Person.module.css'

const Person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.changeList}>my name is {props.name} and I am {props.age} years old </p>
            <p><button onClick={props.delete}>X</button></p>

            <input type='text' onChange={props.changed} />
        </div>
    )

}
export default Person