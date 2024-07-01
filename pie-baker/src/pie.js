/**
 * Author: Lisa Gee
 * Date: Jun 29, 2024
 * File Name: pie.js
 * Description: pie module
 */
"use strict";


function bakePie(pieType, ingredients) {
  const essentialIngredients = [
    "flour",
    "sugar",
    "butter"
  ]
  
  essentialIngredients.forEach(essentialIngredient => {
    if (ingredients.includes(essentialIngredient) == false) {
      console.log(`WARNING: ${essentialIngredient} not found in the list` )
      process.exit(1);  
    }
  });

  console.log(`${pieType} pie has been baked.` )
}


module.exports = { bakePie };