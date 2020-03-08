var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "holly123",
    database: "employeeTracker"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});

function start() {
    inquirer
        .prompt({
            name: "startscreen",
            type: "list",
            message: "Would you like to [VIEW], [ADD], or [UPDATE] employees?",
            choices: ["VIEW", "ADD", "UPDATE", "EXIT"]
        })
        .then(function (answer) {
            if (answer.startscreen === "VIEW") {
                viewEmployees();
            }
            else if (answer.startscreen === "ADD") {
                addEmployees();
            }
            else if (answer.startscreen === "UPDATE") {
                updateEmployee();
            }
            else {
                connection.end();
            }
        });
}

function viewEmployees() {
    console.log("Selecting all employees...\n");
    connection.query("SELECT * FROM employees", function (err, res) {
        if (err) throw err;
        console.log(res);
        start();
    });
}

function addEmployees() {
    // prompt for info about the item being put up for auction
    inquirer
        .prompt([
            {
                name: "firstname",
                type: "input",
                message: "What is the employee's first name?"
            },
            {
                name: "lastname",
                type: "input",
                message: "What is the employee's last name?"
            },
            {
                name: "role",
                type: "input",
                message: "What is the employee's role? General Manager=1, Sales Associate=2, Team Lead=3, and CEO=4",
            },
            {
                name: "manager",
                type: "input",
                message: "Who is the employee's manager? General Manager=1, Sales Associate=2, Team Lead=3, and CEO=4",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (answer) {
      
            connection.query(
                "INSERT INTO Employees SET?",
                {
                    first_name: answer.firstname,
                    last_name: answer.lastname,
                    role_id: answer.role,
                    manager_id: answer.manager,
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your employee was added successfully!");
                    start();
                }
            );
        });
}
