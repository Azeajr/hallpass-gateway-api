CREATE DATABASE IF NOT EXISTS Hallpass;
USE Hallpass;
DROP TABLE IF EXISTS hallpasses;
DROP TABLE IF EXISTS destinations;
DROP TABLE IF EXISTS rosters;
DROP TABLE IF EXISTS rosterNames;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS teachers;
CREATE TABLE IF NOT EXISTS teachers (
  id INT(10) unsigned NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS students (
  id INT(10) unsigned NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS rosterNames (
  id INT(10) unsigned NOT NULL AUTO_INCREMENT,
  rosterName VARCHAR(255) NOT NULL,
  teacherId INT(10) unsigned NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (teacherId) REFERENCES teachers (id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS rosters (
  id INT(10) unsigned NOT NULL,
  teacherId INT(10) unsigned NOT NULL,
  studentId INT(10) unsigned NOT NULL,
  PRIMARY KEY (id, teacherId, studentId),
  FOREIGN KEY (teacherId) REFERENCES teachers (id) ON DELETE CASCADE,
  FOREIGN KEY (studentId) REFERENCES students (id) ON DELETE CASCADE,
  FOREIGN KEY (id) REFERENCES rosterNames (id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS destinations (
  id INT(10) unsigned NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS hallpasses(
  id INT(10) unsigned NOT NULL AUTO_INCREMENT,
  date DATETIME NOT NULL,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  origin VARCHAR(255) NOT NULL,
  destination VARCHAR (255) NOT NULL,
  timer INT(10) unsigned NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO teachers(name)
VALUES ('Zea, A.'),
  ('Graham, M.'),
  ('Giuliano, A.');
INSERT INTO students(FirstName, LastName)
VALUES ('Ed', 'Hines'),
  ('Mattie', 'Patton'),
  ('Joey', 'Armstrong'),
  ('Guadalupe', 'Coleman'),
  ('Fredrick', 'Osborne'),
  ('Carole', 'Wise'),
  ('Kathleen', 'Holloway'),
  ('Brian', 'George'),
  ('Audrey', 'Scott'),
  ('Opal', 'Evans'),
  ('Lauren', 'Benson'),
  ('Ginger', 'Norton'),
  ('Amy', 'Cross'),
  ('Darryl', 'Dixon'),
  ('Edwin', 'Munoz'),
  ('Frances', 'Carson');
INSERT INTO rosterNames (rosterName, teacherId)
VALUES ('Block 1', 1),
  ('Block 2', 1),
  ('Block 3', 1),
  ('Civics', 2),
  ('Philosophy', 2),
  ('U.S. History', 2),
  ('Advisory', 3);
INSERT INTO rosters(id, teacherId, studentId)
VALUES (1, 1, 1),
  (1, 1, 2),
  (1, 1, 3),
  (1, 1, 4),
  (1, 1, 5),
  (2, 1, 6),
  (2, 1, 7),
  (2, 1, 8),
  (2, 1, 9),
  (3, 1, 10),
  (3, 1, 11),
  (3, 1, 12),
  (3, 1, 13),
  (3, 1, 14),
  (4, 2, 1),
  (4, 2, 3),
  (4, 2, 5),
  (4, 2, 7),
  (4, 2, 9),
  (5, 2, 2),
  (5, 2, 4),
  (5, 2, 6),
  (5, 2, 8),
  (6, 2, 10),
  (6, 2, 11),
  (6, 2, 12),
  (6, 2, 13),
  (6, 2, 14),
  (6, 2, 15),
  (6, 2, 16),
  (7, 3, 1),
  (7, 3, 2),
  (7, 3, 3),
  (7, 3, 4),
  (7, 3, 5),
  (7, 3, 6),
  (7, 3, 7),
  (7, 3, 8),
  (7, 3, 9),
  (7, 3, 10),
  (7, 3, 11),
  (7, 3, 12),
  (7, 3, 13),
  (7, 3, 14),
  (7, 3, 15),
  (7, 3, 16);
INSERT INTO destinations(name)
VALUES ('Bathroom'), ('Nurse'),
  ('Main Office');

-- INSERT INTO hallpasses(date, firstName, lastName, origin, destination, timer)
-- VALUES ('2022-08-15 16:43:04','Mattie', 'Patton', 'Zea, A.', 'Bathroom', 10),
-- ('2022-08-15 16:43:04','Joey', 'Armstrong', 'Zea, A.', 'Bathroom', 10),
-- ('2022-08-15 16:43:04','Guadalupe', 'Coleman', 'Graham, M.','Zea, A.', 3),
-- ('2022-08-15 16:43:04','Fredrick', 'Osborne', 'Nurse','Zea, A.', 3);