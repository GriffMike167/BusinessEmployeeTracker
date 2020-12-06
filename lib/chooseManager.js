const { connection, managerChoice } = require("../app");

function chooseManager() {
    connection.query("SELECT role_id, first_name, last_name FROM employee where manager_id IS NULL", function (err, res) {
        if (err)
            throw err;
        for (var i = 0; i < res.length; i++) {
            managerChoice.push(res[i].first_name + res[i].last_name);
        }
    });
    return managerChoice;

}
