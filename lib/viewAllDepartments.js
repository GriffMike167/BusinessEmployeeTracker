const { connection, startPrompt } = require("../app");
const mysql = require("mysql");
function viewAllDepartments() {
    connection.query("SELECT department_name, first_name, last_name From employee", function (err, res) {
        
        console.table(res);
        startPrompt();
    });
}
exports.viewAllDepartments = viewAllDepartments;
