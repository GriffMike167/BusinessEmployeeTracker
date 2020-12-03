DROP DATABASE IF EXISTS employee_databaseDB;

CREATE DATABASE employee_databaseDB;

USE employee_databaseDB;

CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT, 
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)

);

CREATE TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)

);

INSERT INTO department (name)
VALUE ("Finance");
INSERT INTO department (name)
VALUE ("Sales");
INSERT INTO department (name)
VALUE ("Legal");
INSERT INTO department (name)
VALUE ("Engineering");


INSERT INTO role (title, salary, department_id)
VALUE ("Sales Manager", 125000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Sales Lead", 225000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Legal Dept. Manager", 325000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Engineering Manager", 175000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Intern", 55000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Salesperson", 70000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 125000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Paralegal", 55000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Software Engineer", 100000, 3);


INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Sales Manager
VALUE ("Michael", "Griffith", null, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Legal Dept Manager
VALUE ("Daniel", "Johns", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Engeneering Manager
VALUE ("Debrah", "LeMaster", null, 3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Sales Lead
VALUE ("Jeffrey", "Clay", 1, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Sales Lead
VALUE ("Bo", "Jackson", 1, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Salesperson
VALUE ("Don", "Beebe", 4, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Salesperson
VALUE ("George", "Brett", 4, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- -- Salesperson
VALUE ("Lisa", "Leslie", 4, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Salesperson
VALUE ("Kevin", "Hart", 4, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Lawyer
VALUE ("Beth", "Harmon", 2, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Lawyer
VALUE ("Araminta", "Ross", 2, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Paralegal
VALUE ("Eric", "Davis", 6, 7);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Paralegal
VALUE ("Tom", "Monahand", 6, 7);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Paralegal
VALUE ("Chipper", "Jones", 6, 7);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Software Engineer
VALUE ("Joe", "Jackson", 3, 8);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Software Engineer
VALUE ("Mike", "Lowrey", 3, 8);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Software Engineer
VALUE ("Wes", "Welker", 3, 8);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Software Engineer
VALUE ("Jerry", "West", 3, 8);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Intern
VALUE ("Pete", "Rose", 8, 9);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Intern
VALUE ("Frances", "Bean", 8, 9);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
-- Intern
VALUE ("Charlie", "Bucket", 8, 9);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;