"use strict";

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
const fs = require('fs');

// For promises:
// const fs = require('fs').promises;

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();

    //Set up mock implementation for readFile and writeFile
    jest.spyOn(fs, 'readFile').mockImplementation((file, options, callback) => callback(null, "Warrior\nMale\nI like cheese\n"));
    jest.spyOn(fs, 'writeFile').mockImplementation((file, data, callback) => callback(null));
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });


  // TODO: Write your tests here. You should have at least three tests:
  // 1. Test that createCharacter writes a new character to the file
  // 2. Test that getCharacters reads characters from the file
  // 3. Test that createCharacter handles errors when writing to the file
  test("write characters to a file", (done) => {
    createCharacter(["Warrior", "Male", "I like cheese"], (err) => {
      expect(err).toBeNull();
      done();
    });
  });

  test("handle errors when writing to a file", (done) => {
    fs.writeFile.mockImplementationOnce((file, options, callback) => callback(new Error("Can't connect to file")));
    createCharacter(["Warrior", "Male", "I like cheese"], (err) => {
      expect(err).not.toBeNull();
      expect(err.message).toBe("Can't connect to file");
      done();
    });

  });

  test("read characters from a file", (done) => {
    getCharacters((err, characters) => {
      expect(err).toBeNull();
      expect(characters).toEqual(["Warrior", "Male", "I like cheese"]);
      done();
    });
  });
});