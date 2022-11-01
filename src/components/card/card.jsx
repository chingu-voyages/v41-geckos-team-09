import React from 'react'
import './card.css'
import { CardLogic } from '../../TripLogic';

/* display functions */


const Card = (props) => {
    return (
        <div className='card'>
            <h1>{props.title}</h1>
            <CardExpensesView/>
            <CardInfoView />
            <CardTimesView/>
        </div>
    );
}

/* seperate views for conditional rendering: */

const CardExpensesView = (props) => {
    return (
        <div>
                test
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