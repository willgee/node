// game-characters.js
const { spawn } = require("child_process");
const { join } = require("path");
const dataFile = join(__dirname, "game-characters-data.js");

class GameCharacters {
  constructor(scriptPath = dataFile) {
    // Set the script file path
    this.scriptPath = scriptPath;
  }

  getCharacters(callback) {
    // Implementation for fetching the character data
    // Declare a child process
    const child = spawn("node",[this.scriptPath]);

    // Fetch and return the data
    child.stdout.on("data",(data)=>{
      const characterData = JSON.parse(data.toString());
      callback(characterData,null);
    });

    // Handle when data script is not found
    child.stderr.on("data",(data)=>{
      console.error(`stderr: ${data}`);
      callback(null, new Error(data.toString()));
    });

    // Handle when data script fails
    child.on("error",(error)=>{
      console.error(`spawn error: ${error}`);
      callback(null,error);
    });
  }
}

module.exports = { GameCharacters };