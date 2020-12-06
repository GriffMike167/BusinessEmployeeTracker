const { connection, employeeChoice } = require("../app");

function chooseEmployee() {
    connection.query("SELECT first_name, last_name FROM employee", function (err, res) {
        if (err)
            throw err;
        for (var i = 0; i < res.length; i++) {
            employeeChoice.push(res[i].first_name + res[i].last_name);
        }
    });
    return employeeChoice;

}
