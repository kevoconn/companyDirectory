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
    ('Director', 200000, 1),
    ('Chief Engineer', 115000, 1),
    ('Engineer Foreman', 110000, 2),
    ('Engineer', 105000, 2),
    ('Electrician Foreman', 110000, 3),
    ('Electrician', 105000, 3),
    ('Plumbing Foreman', 110000, 4),
    ('Plumber', 105000, 4);

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