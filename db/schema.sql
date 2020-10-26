DROP DATABASE IF EXISTS employeeRosterdb;
CREATE DATABASE employeeRosterdb;

USE employeeRosterdb;

CREATE TABLE department (
  deptId INT AUTO_INCREMENT PRIMARY KEY,
  dept VARCHAR(30),
);

CREATE TABLE role (
  roleId INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  -- reference department employee belongs to
  department_id INT
  
);

CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  --refernce role employee has
  role_id INT,
  -- reference another employee(manager) may be NULL
  manager_id INT,
);
