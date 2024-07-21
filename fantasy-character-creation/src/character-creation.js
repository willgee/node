"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For callbacks:

const fs = require('fs');
const { join } = require("path");
const CHARACTER_FILE = join(__dirname, "characters.txt");

function createCharacter(character, callback) {
  // Implementation for writing characters to a file
  const characterData = character.join("\n");
  fs.writeFile(CHARACTER_FILE, characterData, (err) => {
    callback(err);
  })
}

function getCharacters(callback) {
  //Implementation for reading characters from a file
  fs.readFile(CHARACTER_FILE, { encoding: "utf8" }, (err, data) => {
    if (err) {
      callback(err);
    } else {
      const characters = data.split("\n").filter(character=>character);
      callback(null,characters);
    }
  });
}


// For promises:
/*
const fs = require('fs').promises;

async function createCharacter(character) {
  // TODO: Implement this function
}

async function getCharacters() {
  // TODO: Implement this function
}
*/

// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

module.exports = { createCharacter, getCharacters }; // For callbacks
// module.exports = { createCharacter, getCharacters }; // For promises