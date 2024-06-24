"use srict"

const assert = require('assert');
const TacoStand = require('../src/taco-stand');

//Funtin to test the serve method
function testServe() {
    try {

        //Derclare a new instance of TacoStand
        const tacoStand = new TacoStand();

        //Create the listener for the serve event
        tacoStand.on("serve", (customer) => {
            console.log("Taco Stand serves: " + customer);
        });

        //Call the serveCustomer method
        tacoStand.serveCustomer("John");
        console.info("Passed testServe");
        return true;
    } catch (error) {
        console.error(`Failed testServe: ${error.message}`);
        return false;
    }
}


//Funtion to test the prepare method
function testPrepare() {
    try {

        //Derclare a new instance of TacoStand
        const tacoStand = new TacoStand();

        //Create the listener for the prepare event
        tacoStand.on("prepare", (taco) => {
            console.log("Taco Stand prepares: " + taco);
        });

        //Call the prepareTaco method
        tacoStand.prepareTaco("taco");
        console.info("Passed testPrepare");
        return true;
    } catch (error) {
        console.error(`Failed testPrepare: ${error.message}`);
        return false;
    }
}

//Function to test the rush method
function testRush() {
    try {

        //Derclare a new instance of TacoStand
        const tacoStand = new TacoStand();

        //Create the listener for the rush event
        tacoStand.on("rush", (rush) => {
            console.log("Taco Stand handles rush: " + rush);
        });

         //Call the handleRush method
        tacoStand.handleRush("lunch");
        console.info("Passed testRush");
        return true;
    } catch (error) {
        console.error(`Failed testRush: ${error.message}`);
        return false;
    }
}


//Call the test functions
testServe();
testPrepare();
testRush();