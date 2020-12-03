const { connection, startPrompt } = require("../app");

function viewAllEmployees() {
    connection.query("SELECT * FROM employee"), function (err, res) {
        if (err)
            throw err;
        console.table(res);
        startPrompt();
    };
}
exports.viewAllEmployees = viewAllEmployees;
