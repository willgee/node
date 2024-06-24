"use strict"

const EventEmitter = require('events');


//Declare a class the extends EventEmmitter
class TacoStand extends EventEmitter {
    constructor() {
        super();
    }

    //Method to serve customer and emit the serve event
    serveCustomer(customer) {
        this.emit("serve", customer);
    }

    //Method to prepare taco and emit the prepare event
    prepareTaco(taco) {
        this.emit("prepare", taco);
    }

    //Method to handle rush and emit the rush event
    handleRush(rush) {
        this.emit("rush", rush);
    }
}

//Export the TacoStand class as a module
module.exports = TacoStand;