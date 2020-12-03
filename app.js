const inquirer = require("inquirer");
const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    port: 3301,
    user: "root",
    password:"rootroot",
    database: "employee_databaseDB"
});

connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as" + connection.threadID)
});

function startPrompt() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                "View All Employees?",
                "View All Employees By Departments?",
                "View All Employess by Roles?",
                "Update an Employee?",
                "Add an Employee?",
                "Add a Department?",
                "Ass a Role?"
            ]}

            ]).then(function(val) {
                switch (val.choice){
                    case "View All Employees?":
                    viewAllEmployees();
                    break;

                    case "View All Employees By Departments?":
                    viewAllDepartments();
                    break;

                    case "View All Employess by Roles?":
                    console.log("View All Employess by Roles?")
                    break;

                    case "Update an Employee?":
                    console.log("Update an Employee?")
                    break;

                    case "Add an Employee?":
                    console.log("Add an Employee?")
                    break;

                    case "Add a Department?":
                    console.log("Add a Department?")
                    break;

                    case "Ass a Role?":
                    console.log("Ass a Role?")
                    break;
                }
            })
        };
function viewAllEmployees(){
    connection.query("SELECT * FROM employee"), function (err, res) {
        if (err) throw err 
        console.table(res)
        startPrompt()
    }
};
function viewAllDepartments(){
    connection.query("SELECT department_name, first_name, last_name From employee"), function (err, res) {
        if (err) throw err 
        console.table(res)
        startPrompt()
    }
};
function viewAllEmployees(){
    connection.query("SELECT * FROM employee"), function (err, res) {
        if (err) throw err 
        console.table(res)
        startPrompt()
    }
};
