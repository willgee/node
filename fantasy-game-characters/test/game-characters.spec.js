// game-characters.spec.js
const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  // Define a variable for the GameCharacters object
  let gameCharacters;

  beforeEach(() => {
    // Intialize the GameCharacters object
    gameCharacters = new GameCharacters();
  });

  test("should return game characters data", (done) => {
    //Verify the retrieval of game character data
    gameCharacters.getCharacters((data,error)=>{
      expect(error).toBeNull();
      expect(data).toEqual([{Class:"Warrior", Gender:"Male", Fact:"I like pie"},
      {Class:"Mage", Gender:"Male", Fact:"I'm scared of monsters"},
      {Class:"Rogue", Gender:"Female", Fact:"I'm allergic to gluten"}
      ]);
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    // Verify errors are handled correctly if the script is not found
    const characters = new GameCharacters("nonexistent-data-file.js");
    characters.getCharacters((data,error)=>{
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    // Verify errors are handled corrrectly should ther be failure when executing the data sccript
    const characters = new GameCharacters("failing-script.js");
    characters.getCharacters((data,error)=>{
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
});