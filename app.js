const mysql = require("mysql");
const inquirer = require("inquirer");

// const { viewAllEmployees } = require("./lib/viewAllEmployees");


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
                "View All Employees By Managers?",
                "View All Employess by Roles?",
                "Add an Employee?",
                "Delete an Employee?",
                "Add a Department?",
                "Delete a Department?",
                "Add a Role?",
                "Delete a Role?"
            ]}

            ]).then(function(val) {
                switch (val.choice){
                    case "View All Employees?":
                        // console.log("View All Employees");
                        // startPrompt();
                    viewAllEmployees();
                    break;

                    case "View All Employees By Managers?":
                    viewByManager();
                    break;

                    case "View All Employess by Roles?":
                    viewAllRoles();
                    break;
                    
                    case "Add an Employee?":
                    addEmployee();
                    break;

                    case "Delete an Employee?":
                    deleteEmployee();
                    break;

                    case "Add a Department?":
                    addDepartment();
                    console.log("Add a Department?")
                    break;
                    case "Delete a Department?":
                    deleteDepartment();
                    break;
                    case "Add a Role?":
                    addRole();
                    console.log("Add a Role?")
                    break;
                    case "Delete a Role?":
                    deleteRole();
                    break;
                }
            })};
        exports.startPrompt = startPrompt;
        
        function viewByManager() {
            connection.query("SELECT manager_id, first_name, last_name From employee where manager_id IS NOT NULL order by manager_id", function (err, res) {
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
            connection.query("SELECT department_name, role_id, first_name, last_name From employee order by role_id", function (err, res) {
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
                    name: "department",
                    type: "list",
                    message: "Enter their department: ",
                    choices: chooseDepartment()
                },
                {
                    name: "role",
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
                var roleId = chooseRole().indexOf(val.role) + 1
                var managerId = chooseManager().indexOf(val.manager) + 1
                connection.query("INSERT INTO employee SET ?", 
                {
                    first_name: val.firstname,
                    last_name: val.lastname,
                    department_name: val.role,
                    role_id: roleId,
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
        connection.query("SELECT title From role", function(err, res) {
            if (err) throw err
            for (var i = 0; i < res.length; i++) {
                roleChoice.push(res[i].title);
            }
        })
        return roleChoice;
        
    };
    var departmentChoice = [];
    function chooseDepartment(){
        connection.query("SELECT name From department", function(err, res) {
            if (err) throw err
            for (var i = 0; i < res.length; i++) {
                departmentChoice.push(res[i].name);
            }
        })
        return departmentChoice;
        
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
        connection.query("ALTER TABLE Employee ADD phoneNumber VARCHAR(10)", function (err, res) {
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
                name: "phonenumber",
                type: "input",
                message: "Enter their phone number: ",
                
            },
            
        ]).then(function (res) {
            
            connection.query("UPDATE employee SET = ?", 
            {
                
                phoneNumber: res.phonenumber,
            
            },
           
                 function(err){
                    if (err) throw err
                    console.table(val)
                    startPrompt()
            });
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
function addDepartment() {
    connection.query("Select * FROM department", function (err, res) {
        inquirer.prompt([
            {
                name: "Title",
                type: "input",
                message: "What is the Department Title?"

            },
            
           
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
    function addRole() {
        connection.query("Select * FROM department", function (err, res) {
            inquirer.prompt([
                {
                    name: "title",
                    type: "input",
                    message: "What is the Role Title?"
    
                },
                {
                    name: "salary",
                    type: "input",
                    message: "What is the Role Salary?"
    
                },
                {
                    name: "id",
                    type: "list",
                    message: "What is the Role ID?",
                    choices: chooseDepartment()
    
                },
                
               
            ]).then(function(res){
                var roleId = chooseDepartment().indexOf(res.id) + 0

                connection.query("INSERT INTO role SET ?",
                    {
                        title: res.title,
                        salary: res.salary,
                        department_id: roleId
                    },
                    
                    function (err) {
                        if (err) throw err
                        console.table(res);
                        startPrompt();
                    })
            })
            })
        }
        
        function deleteDepartment() {
            connection.query("Select * FROM department", function (err, res) {
                inquirer.prompt([
                    {
                        name: "department",
                        type: "input",
                        message: "What is the Department Title?",
                        
                    },
                    
                   
                ])
                .then(function(res){
                    connection.query("DELETE FROM department WHERE ?",
                        {
                            name: res.department,
                        },
                        
                        function (err) {
                            if (err) throw err
                            console.table(res);
                            startPrompt();
                        })
                })
            });
            }
            function deleteRole() {
                connection.query("Select * FROM role", function (err, res) {
                    inquirer.prompt([
                        {
                            name: "role",
                            type: "input",
                            message: "What is the Role",
                            
                        },
                        
                       
                    ])
                    .then(function(res){
                        connection.query("DELETE FROM role WHERE ?",
                            {
                                title: res.role,
                            },
                            
                            function (err) {
                                if (err) throw err
                                console.table(res);
                                startPrompt();
                            })
                    })
                });
                }
                function deleteEmployee() {
                    connection.query("Select * FROM employee", function (err, res) {
                        inquirer.prompt([
                            {
                                name: "firstname",
                                type: "input",
                                message: "What is the employees first name: ",
                                
                            },
                            {
                                name: "lastname",
                                type: "input",
                                message: "What is the employees last name: ",
                                
                            },
                            
                           
                        ])
                        .then(function(res){
                            connection.query("DELETE FROM employee WHERE ?",
                                {
                                    first_name: res.firstname,
                                    last_name: res.lastname
                                },
                                
                                function (err) {
                                    if (err) throw err
                                    console.table(res);
                                    startPrompt();
                                })
                        })
                    });
                    }