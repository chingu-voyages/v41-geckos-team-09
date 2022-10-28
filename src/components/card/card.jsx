import React from 'react'

const Card = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <CardExpensesView/>
            <CardInfoView />
            <CardTimesView/>
            <button>Expenses</button>
            <button>Info</button>
            <button>Times</button>
        </div>
    );
}

/* seperate views for conditional rendering: */

const CardExpensesView = (props) => {
    return (
        <div>

        </div>
    )
}

const CardInfoView = (props) => {
    return (
         <div>

        </div>
    )
}

const CardTimesView = (props) => {
    return (
        <div>
            
        </div>
    )
}

export default Card;