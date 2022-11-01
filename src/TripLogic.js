/* Functions pertaining to internal trip data. */
import { v4 as uuidv4 } from 'uuid';

class TripLogic {
    constructor() {
        this.stacks = [];
    }

    addStack(stack) {
        if (this.getStackByName(stack.stackName) !== null) {
            this.stacks.push(stack);

            return this.stacks.length-1;
        }
    }

    deleteStack(stackName) {
        const stack = this.getStackByName(stackName)

        this.stacks.splice(stack, 1);
    }

    getStackByName(stackName) {
        for (let i = 0; i < this.stacks.length; i++)  { 
            if (this.stacks[i].stackName == stackName)
                return i;
            else { return null };
        } 
    }

    getCardByUUID(uuid) {
        for (let i = 0; i < this.stacks.length; i++) {
            card = this.stacks[i].getCardInStack(uuid);
            if (card) {
                return card;
            } else {
                return null;
            }
        }
    }
};

class CardLogic {
    constructor(title, description, uuid) {
        if (uuid === false) {
            this.uuid = uuidv4();
        } else {
            this.uuid = uuid;
        }
        
        if (title === null) {
           this. title = "New Card";
        } else {
            this.title = title;
        }

        if (description === null) {
            this.description = "Enter a description for your card."
        } else {
            this.description = description;
        }
        
        this.expenses = [];
        this.times = [];
        this.notices = [];
    }

    addExpense(price, currency, description) {
        const expense = {price: price, currency: currency, description: description}
        this.expenses.push(expense)
    }

    addTimeslot(startTime, endTime) {
        const timeslot = {startTime: startTime, endTime: endTime}
        this.times.push(timeslot);
    }
};

class StackLogic { // stack names are implicitly unique, see TripLogic.
    constructor(stackName) {
        this.cards = [];
       this.stackName = stackName;
    }

    addCardToStack(name, description, uuid=false) {
        const card = new CardLogic(name, description, uuid);
        this.cards.push(card);

        return card.uuid;
    }

    removeCardFromStack(uuid) {
        let card = this.getCardInStack(uuid, true);

        this.cards.splice(card, 1);

        return;
    }

    getCardInStack(uuid, byIndex = false) {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i] !== null) {
                if (this.cards[i].uuid === uuid) {
                    if (byIndex == true) {
                        return i;
                    } else {
                    return this.cards[i];
                    }
                }
            }
        }
        return null;
    }
};

export { TripLogic, CardLogic, StackLogic };