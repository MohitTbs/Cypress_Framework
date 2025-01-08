let fs = require('fs');
let path = require('path');

export function generateRandomString() {
    //Can change 7 to 2 for longer results.
    let r = (Math.random() + 1).toString(36).substring(7);
    console.log("random", r);
    return r;
}

export function logger(log) {
    cy.writeFile('./Logging/logs.log', log + '\n', { flag: 'a+' })
}

export function removeFiles() {


    const pp = path.join(__dirname, '..', 'Logging', 'logs.log')

    fs.unlink(pp, function (err) {
        console.log(err)
    });


}