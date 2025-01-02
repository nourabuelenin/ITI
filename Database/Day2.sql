-- DML 
INSERT INTO employee (SSN, Fname, Lname, Bdate, Address, Gender, Salary, SuperSSN, DNO)
VALUES (101010, 'Nour', 'Abuelenin', '2001-04-21', 'MyAddress', 'F', 10000, 112233);

INSERT INTO employee (SSN, Fname, Lname, Bdate, Address, Gender, DNO)
VALUES (202020, 'Hasanat', 'Hasan', '2001-05-15', 'FriendAddress', 'F', 23);

UPDATE employee
SET Salary = Salary * 1.2
WHERE SSN = 102672;

-- Queries
SELECT * FROM employee;

SELECT SSN, Fname, Lname
FROM employee
WHERE Salary > 1000;

SELECT SSN, Fname, Lname
FROM employee
WHERE Gender = 'F';

SELECT Pnumber , Pname , Plocation
FROM project
WHERE Dnum = 10;