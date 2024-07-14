const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // create a que for the stream
    this.que = [];
  }

  _write(chunk, encoding, callback) {
    // Implementation ffor writing data to the stream using push
    const character = chunk.toString().trim();
    if (!character) {
      callback(new Error("Invalid data"));
      return;
    }

    this.que.push(`The character detail is ${character}`);
    callback();

  }

  _read(size) {
    // Implementation for read using push and shifting the que
    if (this.que.length) {
      this.push(this.que.shift() + "\n");
    } else {
      this.push(null);
    }
  }
}

module.exports = CharacterCreator;