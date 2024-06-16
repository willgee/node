"use strict";

const planetDistance = {
  "Earth" : 1.0,
  "Mars" : 1.5,
  "Mercury" : 0.4,
  "Venus": 0.7,
  "Jupitor" : 5.2,
  "Saturn" : 9.6,
  "Uranus" : 19.2,
  "Neptune": 30,
  "Pluto": 39.5
}

function calculateDistance(planet1, planet2) {
  // TODO: Implement this function
  return parseFloat(Math.abs(planetDistance[planet1] - planetDistance[planet2]).toFixed(1));
}

module.exports = calculateDistance;