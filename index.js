const inquirer = require("inquirer");
const mysql = require("mysql");
require("console.table")

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "rootroot",
  database: "employeeRosterdb"
});

// set up the connection and gather in the functions that will use the connection here to access the DB
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId +"\n");
    menu();
})

 // ask user questions -- ideally getting the lists from the returned responses that are set to variables as my choice lists.
async function menu() {
     inquirer .prompt({
            name: "menuOptions",
            type: "list",
            message: "What would you like to do?",
            choices: [
                {name:"View Departments",
                value: "viewDept",
                },
                {name:"Add Department",
                value: "addDept",
                },
                {name:"View Roles",
                value: "viewRoles",
                },
                {name:"Add Roles",
                value: "addRoles",
            },
                {name:"View Employees",
                value: "viewEmployees",
                },
                {name:"Add Employee",
                value: "AddEmployee",
                },
                {name:"Exit",
                value: "exit",
            }
            ]
        }).then(function(response) {
            console.log(response)
            switch(response) {
                case "viewDept":
                    return readDept();
                case "addDept":
                    return addDept();
                case "viewRoles":
                    return readRoles();
                case "addRoles":
                    return addRoles();
                case "viewEmployes":
                    return readEmployees();
                case "addEmployee":
                    return addEmployee();
                case "exit":
                    return exitMenu()
            }
        })
}
        


         
// function to read the departments  so we can get the data to set to variable?
async function readDept() {
    console.log("Reading all departments ... \n");
    connection.query("SELECT * from department", function(err, res) {
    if (err) throw err;
    printTable(department)
 
})
menu();
}

async function addDept() {
    console.log("Reading all departments ... \n");
    connection.query("SELECT * from department", function(err, res) {
    if (err) throw err;
     //get response and set it to a variable
     let departments = department.map( ({id, name }) => ({
            name,
            value:id
     }));
 
})
}

