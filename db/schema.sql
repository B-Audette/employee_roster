DROP DATABASE IF EXISTS employeeRosterdb;
CREATE DATABASE employeeRosterdb;

USE employeeRosterdb;

CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
);

CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  -- reference department employee belongs to
  department_id INT
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  -- refernce role employee has
  role_id INT
);

SELECT * from department;
SELECT * from role;
SELECT * from employee;

INSERT INTO department (name)
VALUES ('Ash'), ('Gary'), ('Red'), ('Leon');

INSERT INTO role (title, salary, department_ID)
VALUES ('Fire', 1000, 1), ('Water', 50000, 2), ('Electric', 60000, 3), ('Grass', 60000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES  ('Char', 'mander', 1), ('Pika', 'chu', 2), ('Bulba', 'saur', 3), ('Squir', 'tle', 4);
