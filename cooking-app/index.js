/**
 * Author:
 * Date:
 * File Name:
 * Description:
*/

// TODO: Import your module using require
const {createRecipe, setTimer, quit} = require("./recipes");


// TODO: Implement your CLI program here
function main() {
   console.log(createRecipe(["Eggs", "Flour", "Butter"]));
   console.log(setTimer(20));
   console.log(quit());
}

main();