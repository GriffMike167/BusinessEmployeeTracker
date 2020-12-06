const inquirer = require("inquirer");
const { connection, chooseEmployee, startPrompt } = require("../app");

function updateEmployee() {
    connection.query("ALTER TABLE employee ADD phoneNumber CHAR(10)", function (err, res) {
        inquirer.prompt([
            {
                name: "summary",
                type: "confirm",
                message: "You want update Employyes ",
            },
            {
                name: "choice",
                type: "list",
                message: "Choose employee: ",
                choices: chooseEmployee()
            },
            {
                name: "salary",
                type: "input",
                message: "Enter updated salary: ",
            },
            {
                name: "phonenumber",
                type: "input",

                message: "Enter their phone number: ",
            },
        ]).then(function (val) {
            connection.query("INSERT INTO role SET ?",
                {
                    salary: val.salary,
                },
                ("INSERT INTO employee SET ?",
                {
                    phoneNumber: val.phonenumber,
                },
                    function (err) {
                        if (err)
                            throw err;
                        console.table(val);
                        startPrompt();
                    }));
        });
    });
}
exports.updateEmployee = updateEmployee;
