/**
 * Author: Lisa Gee
 * Date: Jun 29, 2024
 * File Name: pie.spec.js
 * Description: jest test suite
 */

"use strict";

//import the pir module
const { bakePie } = require("../src/pie");
const exit = jest.spyOn(process, 'exit').mockImplementation((code) => code)

describe("bakePie", () => {
    let log;

    beforeEach(() => {
        log = jest.spyOn(console, 'log');
    });

    afterEach(() => {
        log.mockRestore();
    });

    //Test for bakePie with apple and all essential ingredients
    test('execute bakePie with apple', () => {
        bakePie("apple", ['flour','butter','sugar']);
        expect(log).toHaveBeenCalledWith("apple pie has been baked.")
        expect(exit).not.toHaveBeenCalled();
    });

    //Test for bakePie with cherry and all essential ingredients
    test('execute bakePie with cherry', () => {
        bakePie("apple", ['flour','butter','sugar','cherries']);
        expect(log).toHaveBeenCalledWith("apple pie has been baked.")
        expect(exit).not.toHaveBeenCalled();
    });

    //Test for bakePie with apple and missing ingredients
    test('execute bakePie with missing ingredient', () => {
        bakePie("apple", ['flour','apple','sugar']);
        expect(log).toHaveBeenCalledWith("apple pie has been baked.")
        expect(exit).toHaveBeenCalled();
    });
});

