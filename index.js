const { prompt } = require("inquirer");
const inquirer = require("inquirer");
const mysql = require("mysql");
require("console.table")

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "rootroot",
  database: "employeerosterdb"
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
        ]}).then(function(data) {
            console.log(data)
            switch(data.menuOptions) {
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
        
         
async function readDept() {
    console.log("Reading all departments ... \n");
    let departments = await connection.query("SELECT * from department", function(err, res) {
    if (err) throw err;
    let departments = res.map(({name}) => name)
    console.table(departments)
 menu();
})
}

async function addDept() {
    console.log("Preparing to add department ... \n");
    let department = await prompt([
        {
            name: "name",
            message: "What is the name of the department?"
        }
    ])
    await connection.query("INSERT INTO department SET ?", department)
    console.log(`Added ${department.name} to employeerosterdb`);
    menu();
}

async function readRoles() {
    console.log("Reading all roles ... \n");
    let roles = await connection.query("SELECT * from role", function(err, res) {
    if (err) throw err;
    let roles = res.map(({title}) => title)
    console.table(roles)
 menu();
})
}

async function addRoles() {
    console.log("Preparing to add new role ... \n");
    let departments = await connection.query("SELECT * from department", function(err, res) {
        if (err) throw err;
        return res.map(({name}) => name)})
        console.table(departments)
    let role = await prompt([
        {
            name: "title",
            message: "What is the title for this role?"
        },
        {
            name: "salary",
            message: "What salary will this role make?"
        },
        {
            type: "list",
            name: "department_id",
            message: "What department will this role be assigned to?",
            choices: departments
        }])
    await connection.query("INSERT INTO role SET ?", role)
    console.log(`Added ${role.name} to employeerosterdb`);
    
    menu();
}


