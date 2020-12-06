const { connection, roleChoice } = require("../app");

function chooseRole() {
    connection.query("SELECT name From department", function (err, res) {
        if (err)
            throw err;
        for (var i = 0; i < res.length; i++) {
            roleChoice.push(res[i].name);
        }
    });
    return roleChoice;

}
