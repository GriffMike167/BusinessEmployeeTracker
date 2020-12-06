const inquirer = require("inquirer");
const { chooseRole, chooseManager, connection, startPrompt } = require("../app");

function addEmployee() {
    inquirer.prompt([
        {
            name: "firstname",
            type: "input",
            message: "Enter first name of employee: "
        },
        {
            name: "lastname",
            type: "input",
            message: "Enter last name of employee: ",
        },
        {
            name: "choice",
            type: "list",
            message: "Enter their role: ",
            choices: chooseRole()
        },
        {
            name: "manager",
            type: "list",
            message: "Enter their Manager: ",
            choices: chooseManager()
        }
    ])
        .then(function (val) {
            // var roleId = chooseRole().indexOf(val.choice) + 1
            var managerId = chooseManager().indexOf(val.manager) + 1;
            connection.query("INSERT INTO employee SET ?",
                {
                    first_name: val.firstname,
                    last_name: val.lastname,
                    department_name: val.choice,
                    // role_id: roleId,
                    manager_id: managerId,
                },
                function (err) {
                    if (err)
                        throw err;
                    console.table(val);
                    startPrompt();
                });

        });
}
exports.addEmployee = addEmployee;
