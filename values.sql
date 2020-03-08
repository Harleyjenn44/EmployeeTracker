use employeeTracker;
INSERT INTO department (name)
VALUES  ("Human Resources"), 
        ("Style"), 
        ("Grocery"), 
        ("Electronics"), 
        ("Guest Services");
INSERT INTO role (title, salary, department_id)
VALUE   ("General Manager", 70000, 1), 
        ("Sales Associate", 25000, 2), 
        ("Team Lead", 50000, 3),   
        ("CEO", 100000, 4); 
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUE   ("Ashton", "Beaudoin", 2, 3), 
        ("Jeremy", "Rosenbaum", 2, 3),
        ("Jim", "Stewart", 1, 4),
        ("Matt", "Harley", 3, 1),
        ("Patrick", "Starr", 2, 3),
        ("Spongebob", "Squarepants", 3, 1),
        ("Mr", "Krabs", 4, 4);
       