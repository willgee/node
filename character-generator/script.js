/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author:
  Date:
  Filename:
*/

"use strict";

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values
  let heroName = document.getElementById("heroName").value;
  let heroGender = document.getElementById("heroGender").value;
  let heroClass = document.getElementById("heroClass").value;

  let character = createCharacter(heroName,heroGender,heroClass);

  console.log(character.getName());

  

  // TODO: Create character
  function createCharacter(name, gender, heroClass) {
    //console.log(heroClass, gender, name);

    return {
      getName: function() {
        return name;
      },

      getGender: function() {
        return gender;
      },

      getClass: function() {
        return heroClass;
      }
    }
  }

  // TODO: Display character information
  let outputName = document.getElementById("outputName");
  outputName.innerHTML = character.getName();

  let outputGender = document.getElementById("outputGender");
  outputGender.innerHTML = character.getGender();

  let outputClass = document.getElementById("outputClass");
  outputClass.innerHTML = character.getClass();
});