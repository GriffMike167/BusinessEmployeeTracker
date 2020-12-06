const mysql = require("mysql");
const inquirer = require("inquirer");

// const { viewAllDepartments } = require("./lib/viewAllDepartments");
// const { viewAllEmployees } = require("./lib/viewAllEmployees");
// const { viewAllRoles } = require("./lib/viewAllRoles");


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:"rootroot",
    database: "employee_databaseDB"
});
exports.connection = connection;

connection.connect(function(err) {
    if (err) throw err
    // console.log("Connected as " + connection.threadID)
    startPrompt();
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
                "Add an Employee?",
                "Update an Employee?",
                "Add a Department?",
                "Add a Role?"
            ]}

            ]).then(function(val) {
                switch (val.choice){
                    case "View All Employees?":
                        // console.log("View All Employees");
                        // startPrompt();
                    viewAllEmployees();
                    break;

                    case "View All Employees By Departments?":
                        // console.log("View All Departments")
                    viewAllDepartments();
                    break;

                    case "View All Employess by Roles?":
                        // console.log("View All Roles")
                    viewAllRoles();
                    break;
                    case "View All Employess by Department?":
                        // console.log("View All Roles")
                    viewAllRoles();
                    break;
                    case "Add an Employee?":
                    addEmployee();
                    break;

                    case "Update an Employee?":
                    updateEmployee();
                    // console.log("Update an Employee?")
                    break;

                    case "Add a Department?":
                    console.log("Add a Department?")
                    break;

                    case "Add a Role?":
                    addRole();
                    console.log("Ass a Role?")
                    break;
                }
            })};
        exports.startPrompt = startPrompt;
        function viewAllDepartments() {
            connection.query("SELECT department_name, first_name, last_name From employee", function (err, res) {
                if (err)
                    throw err;
                console.table(res);
                startPrompt();
            });
        }
        function viewAllEmployees() {
            connection.query("SELECT * FROM employee", function (err, res) {
                if (err)
                    throw err;
                console.table(res);
                startPrompt();
            });
        }
        function viewAllRoles() {
            connection.query("SELECT role_id, department_name, first_name, last_name From employee", function (err, res) {
                if (err)
                    throw err;
                console.table(res);
                startPrompt();
            });
        }
     
        function addEmployee(){
            inquirer.prompt ([
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
                var managerId = chooseManager().indexOf(val.manager) + 1
                connection.query("INSERT INTO employee SET ?", 
                {
                    first_name: val.firstname,
                    last_name: val.lastname,
                    department_name: val.choice,
                    manager_id: managerId,
                }, 
                    function(err){
                    if (err) throw err
                    console.table(val)
                    startPrompt()
                })
          
            })
        }
    var roleChoice = [];
    function chooseRole(){
        connection.query("SELECT name From department", function(err, res) {
            if (err) throw err
            for (var i = 0; i < res.length; i++) {
                roleChoice.push(res[i].name);
            }
        })
        return roleChoice;
        
    };
    var managerChoice = [];
    function chooseManager(){
        connection.query("SELECT role_id, first_name, last_name FROM employee where manager_id IS NULL", function(err, res) {
            if (err) throw err
            for (var i = 0; i < res.length; i++) {
                managerChoice.push(res[i].first_name + res[i].last_name);
            }
        })
        return managerChoice;
        
    };
    
    function updateEmployee(){
        connection.query("ALTER TABLE employee ADD phoneNumber CHAR(10)", function (err, res) {
            inquirer.prompt ([
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
                 function(err){
                    if (err) throw err
                    console.table(val)
                    startPrompt()
            }));
        });
    });
};
    

    var employeeChoice = [];
    function chooseEmployee(){
        connection.query("SELECT first_name, last_name FROM employee", function(err, res) {
            if (err) throw err
            for (var i = 0; i < res.length; i++) {
                employeeChoice.push(res[i].first_name + res[i].last_name);
            }
        })
        return employeeChoice;
        
    };
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
        ]).then(function(res){
            connection.query("INSERT INTO department SET ?",
                {
                    name: res.Title,
                    // salary: res.Salary,
                    // department_id: res.Department
                },
                
                function (err) {
                    if (err) throw err
                    console.table(res);
                    startPrompt();
                })
        })
        })
    }
