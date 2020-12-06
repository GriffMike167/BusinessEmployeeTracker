const inquirer = require("inquirer");
const { connection, startPrompt } = require("../app");

function addRole() {
    connection.query("ALTER TABLE employee ADD phoneNumber CHAR(10)", function (err, res) {
        inquirer.prompt([
            {
                name: "Title",
                type: "input",
                message: "What is the Role Title?"
            },
            {
                name: "Department",
                type: "input",
                message: "What is the Department Id?"
            },
            {
                name: "Salary",
                type: "input",
                message: "What is the Salary?"
            }
        ]).then(function (res) {
            connection.query("INSERT INTO department SET ?",
                {
                    name: res.Title,
                },

                function (err) {
                    if (err)
                        throw err;
                    console.table(res);
                    startPrompt();
                });
        });
    });
}
exports.addRole = addRole;
