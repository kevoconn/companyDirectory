use tracker;

INSERT INTO department
    (name)
VALUES
    ('Facilities Management'),
    ('Engineering'),
    ('Electrical'),
    ('Plumbing');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Director', 100000, 1),
    ('Chief Engineer', 80000, 1),
    ('Engineer Foreman', 150000, 2),
    ('Engineer', 120000, 2),
    ('Electrician Foreman', 160000, 3),
    ('Electrician', 125000, 3),
    ('Plumbing Foreman', 250000, 4),
    ('Plumber', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Harry', 'Potter', 1, NULL),
    ('Hermione', 'Granger', 2, 1),
    ('Ron', 'Weasley', 3, NULL),
    ('Sirius', 'Black', 4, 3),
    ('Remus', 'Lupin', 5, NULL),
    ('Albus', 'Dumbledore', 6, 5),
    ('Neville', 'Longbottom', 7, NULL),
    ('Tom', 'Riddle', 8, 7);