import React from 'react'

export default function Show({ fruit }) {
    return(
        <div>
            <h1>Show Page</h1>
            The {fruit.name} is {fruit.color} <br/>
            {fruit.readyToEat ? 'It is ready to eat': 'It is not ready to eat... cant touch this'}
        </div>
    )
}