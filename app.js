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
                "Update an Employee?",
                "Add an Employee?",
                "Add a Department?",
                "Ass a Role?"
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

                    case "Update an Employee?":
                    console.log("Update an Employee?")
                    break;

                    case "Add an Employee?":
                    addEmployee();
                    break;

                    case "Add a Department?":
                    console.log("Add a Department?")
                    break;

                    case "Ass a Role?":
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
        // function viewDepartment() {
        //     connection.query("SELECT department_name, first_name, last_name From employee", function (err, res) {
        //         if (err)
        //             throw err;
        //         console.table(res);
        //         startPrompt();
        //     });
        // }
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
                    type: "rawlist",
                    message: "Enter their role: ",
                    choices: chooseRole()
                },
                {
                    name: "manager",
                    type: "rawlist",
                    message: "Enter their Manager: ",
                    choices: chooseManager()
                }
            ])
            .then(function (val) {
                var roleId = chooseRole().answer
                console.log(chooseRole().answer)
                // var managerId = chooseManager().indexOf(val.choice) + 1
                connection.query("INSERT INTO employee SET ?", 
                {
                    first_name: val.firstname,
                    last_name: val.lastname,
                    department_name: val.choice,

                    // manager_id: managerId,
                    // role_id: roleId
                    
                }, function(err){
                    if (err) throw err
                    console.table(val)
                    startPrompt()
                })
          
            })
        }
          

    var roleChoice = [];
    function chooseRole(){
        connection.query("SELECT * From department", function(err, res) {
            if (err) throw err
            for (var i = 0; i < res.length; i++) {
                roleChoice.push(res[i].name);
            }
        })
        return roleChoice;
        // chooseManager()
        
    };
    var managerChoice = [];
    function chooseManager(){
        connection.query("SELECT first_name, last_name FROM employee where manager_id IS NULL", function(err, res) {
            if (err) throw err
            for (var i = 0; i < res.length; i++) {
                managerChoice.push(res[i].first_name  +  res[i].last_name);
            }
        })
        return managerChoice;
        
    };
    // var departmentChoice = [];
    // function (){
    //     connection.query("SELECT first_name, last_name FROM employee where manager_id IS NULL", function(err, res) {
    //         if (err) throw err
    //         for (var i = 0; i < res.length; i++) {
    //             managerChoice.push(res[i].first_name);
    //         }
    //     })
    //     return managerChoice;
        
    // };
        
                // ].then(function(val) {
                //     switch (val.choice){
                //         case "Sales Manager":
                //             console.log("4")
                        
                            // inquirer.prompt([
                            //     {
                            //         name: "manager",
                            //         type: "list",
                            //         message: "Whats their manager name: ",
                            //         choice: [
                            //             "Michael Griffith",
                            //             "Daniel Johns",
                            //             "Debrah LeMaster"
                            //         ],
                            //     }
                            // ])
                    //     }
                    // }),
                    // )};

                                
                // {
                //     name: "manager",
                //     type: "list",
                //     message: "Whats their manager name: ",
                //     choice: [
                //         "Michael Griffith",
                //         "Daniel Johns",
                //         "Debrah LeMaster"
                //     ]
                


            // ]).then(function (val) {
            //     connection.query("INSERT INTO employee SET ?",
            //      {
            //          first_name: val.firstname,
            //          last_name: val.lastname,
            //          department_name: val.choice,
            //         //  manager_id: val.role_id
                     
            //      }
            //     )
            // })
        
        