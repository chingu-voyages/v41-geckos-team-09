/* Functions pertaining to internal trip data. */
import { v4 as uuidv4 } from 'uuid';

class TripLogic {
    constructor() {
        stacks = {};
    }
};

class CardLogic {
    constructor(title, description) {
        if (title === null) {
            title = "New Card";
        }

        if (description === null) {
            description = "Enter a description for your card."
        }
        
        let expenses = [];
        let times = [];

        let uuid = uuidv4();
    }

    addExpense(price, currency, description) {
        const expense = {price: price, currency: currency, description: description}
        this.expenses.push(expense)
    }

    addTimeslot(startTime, endTime) {
        const timeslot = {startTime: startTime, endTime: endTime}
        this.times.push(timeslot);
    }

    formatExpenses() {
        let formattedString = "y";
        formattedString.concat('test');

        return formattedString;
    }

    formatTimes() {

    }
};

class StackLogic {
    constructor() {
        cards = {};
    }
};

export default { TripLogic, CardLogic, StackLogic };