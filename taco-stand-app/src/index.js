"use srict"

const process = require('process');
const TacoStand = require('./taco-stand'); //import the tsco stand class
const tacoStand = new TacoStand(); //Create a new intance of TacoStand

//Listener for the serve event
tacoStand.on("serve", (customer) => {
    console.log("Taco Stand serves: " + customer);
})

//Listener for the prepare event
tacoStand.on("prepare", (taco) => {
    console.log("Taco Stand prepares: " + taco);
})

//Listener for the rush event
tacoStand.on("rush", (rush) => {
    console.log("Taco Stand handles rush: " + rush);
})


function main() {
    if (process.argv.length < 4) { // check for the appropriate CLI argiment length
        console.log('Usage: Please enter a command');
        process.exit(1);
    }


    //Control execution flow based on the specific command given. Call the approptiate method based on the command
    switch (process.argv[2]) { 
        case "serve":
            tacoStand.serveCustomer(process.argv[3]);
            break;
        case "prepare":
            tacoStand.prepareTaco(process.argv[3]);
            break;
        case "rush":
            tacoStand.handleRush(process.argv[3]);
            break;

        default:
            console.log('Usage: Please enter a valid command');
            process.exit(1);
            break;
    }
}



main();