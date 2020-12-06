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
    first_name VARCHAR(30),
    last_name VARCHAR(30),
	department_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,


    -- FOREIGN KEY (department_name) REFERENCES department(name),
    -- FOREIGN KEY (role_id) REFERENCES role(id),
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
VALUE ("Legal Dept. Manager", 325000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Engineering Manager", 175000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Sales Lead", 225000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Salesperson", 70000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 125000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Paralegal", 55000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Software Engineer", 100000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Intern", 55000, 3);



INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Sales Manager
VALUE ("Michael", "Griffith", "Sales Manager", 1, null);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Legal Dept Manager
VALUE ("Daniel", "Johns", "Legal Dept Manage", 2, null);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Engeneering Manager
VALUE ("Debrah", "LeMaster", "Engeneering Manager", 3, null);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Sales Lead
VALUE ("Jeffrey", "Clay", "Sales Lead", 4, 1);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Sales Lead
VALUE ("Bo", "Jackson", "Sales Lead", 4, 1);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Salesperson
VALUE ("Don", "Beebe", "Salesperson", 5, 1);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Salesperson
VALUE ("George", "Brett", "Salesperson", 5, 1);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- -- Salesperson
VALUE ("Lisa", "Leslie", "Salesperson",  5, 1);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Salesperson
VALUE ("Kevin", "Hart", "Salesperson", 5, 1);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Lawyer
VALUE ("Beth", "Harmon", "Lawyer", 6, 2);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Lawyer
VALUE ("Araminta", "Ross", "Lawyer", 6, 2);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Paralegal
VALUE ("Eric", "Davis", "Paralegal", 7, 2);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Paralegal
VALUE ("Tom", "Monahand", "Paralegal", 7, 2);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Paralegal
VALUE ("Chipper", "Jones", "Paralegal", 7, 2);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Software Engineer
VALUE ("Joe", "Jackson", "Software Engineer", 8, 3);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Software Engineer
VALUE ("Mike", "Lowrey", "Software Engineer", 8, 3);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Software Engineer
VALUE ("Wes", "Welker", "Software Engineer",  8, 3);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Software Engineer
VALUE ("Jerry", "West", "Software Engineer", 8, 3);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Intern
VALUE ("Pete", "Rose", "Intern", 9, 3);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Intern
VALUE ("Frances", "Bean", "Intern", 9, 3);
INSERT INTO employee (first_name, last_name, department_name, role_id, manager_id)
-- Intern
VALUE ("Charlie", "Bucket", "Intern", 9, 3);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;