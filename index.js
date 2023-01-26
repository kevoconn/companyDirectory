const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
require("dotenv").config();

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "Admin",
    database: "tracker",
  },
  console.log(`Connected to the tracker database.`)
);

function viewDepartments() {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
  });
  console.log("success");
}

function viewRoles() {
  db.query("SELECT * FROM role", function (err, results) {
    console.table(results);
  });
}

function viewEmployees() {
  db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
});
}

inquirer
  .prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "choice",
      choices: [
        { name: "View all departments", value: "VIEW_DEPARTMENTS" },
        { name: "View all roles", value: "VIEW_ROLES" },
        { name: "View all employees", value: "VIEW_EMPLOYEES" },
      ],
    },
  ])

  .then((response) => {
    console.log(response.choice);
    if (response.choice === "VIEW_DEPARTMENTS") {
      viewDepartments();
    }
    if (response.choice === "VIEW_ROLES") {
      viewRoles();
    }
    if (response.choice === "VIEW_EMPLOYEES") {
      viewEmployees();
    }
  });
