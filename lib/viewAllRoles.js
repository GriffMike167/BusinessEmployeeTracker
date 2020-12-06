const { connection, startPrompt } = require("../app");

function viewAllRoles() {
    connection.query("SELECT role_id, department_name, first_name, last_name From employee", function (err, res) {
        if (err)
            throw err;
        console.table(res);
        startPrompt();
    });
}
exports.viewAllRoles = viewAllRoles;
