/**
 * Author:
 * Date:
 * File Name:
 * Description:
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  var recipe = "Recipe created with ingredients: ";
  let ingredientsList = "";
  for (let ingredient of ingredients) {
    ingredientsList = ingredientsList.concat(ingredient + ", "); 
  }

  return recipe + ingredientsList.slice(0, -2);
}

// Define the setTimer function
function setTimer(minutes) {
  return "Timer set for " + minutes + " minutes";
}

// Define the quit function
function quit() {
  return "Program exited"
}

// TODO: Export the functions
module.exports = {createRecipe, setTimer, quit}