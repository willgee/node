"use strict";

const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testEarthToMars() {
  try {
    assert.strictEqual(calculateDistance("Earth", "Mars"), 0.5);
    console.info("Passed testEarthToMars");
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}


function testMarsToSaturn() {
  try {
    assert.strictEqual(calculateDistance("Saturn", "Mars"), 8.1);
    console.info("Passed testMarsToSaturn");
    return true;
  } catch (error) {
    console.error(`Failed testMarsToSaturn: ${error.message}`);
    return false;
  }
}


function testSaturnToJupitor() {
  try {
    assert.strictEqual(calculateDistance("Saturn", "Jupitor"), 4.4);
    console.info("Passed testSaturnToJupitor");
    return true;
  } catch (error) {
    console.error(`Failed testSaturnToJupitor: ${error.message}`);
    return false;
  }
}

// Call your test functions here
testEarthToMars();
testMarsToSaturn();
testSaturnToJupitor();