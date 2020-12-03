// const { connection, startPrompt } = require("../app");

function viewAllDepartments() {
    connection.query("SELECT department_name, first_name, last_name From employee"), function (err, res) {
        if (err)
            throw err;
        console.table(res);
        startPrompt();
    };
}
exports.viewAllDepartments = viewAllDepartments;
