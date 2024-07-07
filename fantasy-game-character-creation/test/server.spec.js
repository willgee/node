const http = require('http');
const server = require('../src/server');
const { hostname } = require('os');
const path = require('path');


// TODO: Implement your tests here
describe("server", () => {
    
    afterAll(()=>{
        server.close();
    })

    //Test for createCharacter POST
    test('responds to /create POST request with query parameter', () => {
        const options = {
            hostname:  'localhost',
            port: 3000,
            path: '/create?character=Zelda',
            method: 'POST'
        }

        const req = http.request(options, res => {
            let data = '';
            res.on('data', chunk => {
                data += chunk;
            });
            res.on('end', () => {
                expect(data).toBe('Fantasy character Zelda has been created');
            });
           
        });

        req.end();
    });
});