const inquirer = require("inquirer");
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'Admin',
      // MySQL password
      password: 'Admin',
      database: 'classlist_db'
    },
    console.log(`Connected to the classlist_db database.`)
  );
  
  // Query database
  db.query('SELECT * FROM students', function (err, results) {
    console.log(results);
  });


function viewDepartments() {
    console.log('it worked')
}

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'choice',
      choices: [{name: 'View all departments', value: 'VIEW_DEPARTMENTS'}]
         }])
  .then((response) =>{
    console.log(response.choice)
    if (response.choice === 'VIEW_DEPARTMENTS') {
        viewDepartments();

    }
 
  });