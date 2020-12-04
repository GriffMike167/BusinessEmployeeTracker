const { connection, startPrompt } = require("../app");
const mysql = require("mysql");
function viewAllDepartments() {
    connection.query("SELECT department_name, first_name, last_name From employee", function (err, res) {
        
        console.table(res);
        startPrompt();
    });
}
exports.viewAllDepartments = viewAllDepartments;

function multiSearch() {
    var query = "SELECT department_name FROM employee";
    connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i]);
      }
      runSearch();
    });
  }

  choices: [ 
    "Sales Manager",
    "Legal Department",
    "Engeneering Manger",
    "Sales Lead",
    "Salesperson",
    "Lawyer",
    "Paralegal",
    "Software Engineer",
    "Intern"

    const roleChoice = [];
    function chooseRole(){
        connection.query("SELECT * From role", function(err, res) {
            if (err) throw err
            for (var i = 0; i < res.length; i++) {
                roleChoice
            }
        }
    }