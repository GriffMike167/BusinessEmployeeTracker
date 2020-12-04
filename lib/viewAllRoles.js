const { connection, startPrompt } = require("../app");
const mysql = require("mysql");

function viewAllRoles() {
    connection.query("SELECT role_id, first_name, last_name From employee", function (err, res) {
        if (err)
            throw err;
        console.table(res);
        startPrompt();
    });
}
exports.viewAllRoles = viewAllRoles;
