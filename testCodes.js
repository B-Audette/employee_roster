
//setting example aside for self later

const response = [
    {
        id:1,
         title:"Ash",
    },
   {
         id:2,
        name:"Misty"
    }
 ]

 const nameChoices = response.map( ({id, name }) => ({
    name,
    value:id

 }))

 console.log(nameChoices);

 inquirer.prompt([

    {
        type:"list",
        name: "name_id",
         message: "Which trainer would you chose",
         choices: nameChoices
     }
 ]).then( (response)=>console.log(response.name_id) )

 


//psuedo code

// Ask user  
// view department -> VIEW_DEPT
// add department -> ADD_DEPT
// view roles -> VIEW_ROLES
// add a role -> ADD_ROLE
// view employees -> VIEW_EMP
// add employees -> ADD_EMP

// VIEW_DEPT
// select * from department
// console.table(results)

// ADD_DEPT
// ask the for a name
// insert into department table

// VIEW_ROLES
// select * from role
// console.table(results)

// ADD_ROLE
// select * from department
// add user for title, salary, department
// insert into role table

// VIEW_EMP
// select * from employee
// console.table(results)

// ADD_EMP
// select * from role
// ask user for first_name, last_name, role
// insert into employee table

