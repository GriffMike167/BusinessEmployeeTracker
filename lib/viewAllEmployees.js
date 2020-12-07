const { connection, startPrompt } = require("../app");
const mysql = require("mysql");

function viewAllEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err)
            throw err;
        console.table(res);
        startPrompt();
    });
}
// function viewAllEmployees() {
    //     connection.query("SELECT * FROM employee", function (err, res) {
    //         if (err)
    //             throw err;
    //         console.table(res);
    //         startPrompt();
    //     });
    // }
exports.viewAllEmployees = viewAllEmployees;
