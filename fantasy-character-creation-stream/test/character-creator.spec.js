const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    // Array of character data
    const characters = [
      "class : Warrior, gender:male, fact:I like dogs",
      "class : Mage, gender: female, fact: Green eyes are awseome",
      "class Rouge gender: male, fact:Pie is yummy"
    ]

    //Loop through each element and write it to the stream
    characters.forEach(character => characterCreator.write(character));

    // Listen for ddata and perfrom the test
    characterCreator.on('data', (data) => {
      const character = characters.shift();
      expect(data.toString().trim()).toBe(`The character detail is ${character}`);
      if (characters.length === 0) done();
    });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    // Write bad data to the stream
    characterCreator.write("");

    // Listen for the error
    characterCreator.on('error', (err)=>{
      expect(err.message).toBe("Invalid data");
      done();
    })
    
  });

  test("should transform data correctly when written to", (done) => {
    // Data used for charecter testing
    const character = "class : Warrior, gender:male, fact:I like dogs";

    // Expexcted output for the test
    const expectedOutput = "The character detail is class : Warrior, gender:male, fact:I like dogs";

    // Write the data to the stream using utf8 encoding and verify the output
    characterCreator.write(character,'utf8', ()=>{
      characterCreator.on('data', (data) => {
        expect(data.toString().trim()).toBe(expectedOutput);
        done();
      });
    })
  });
});