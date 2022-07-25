CREATE DATABASE IF NOT EXISTS Hallpass;
USE Hallpass;


DROP TABLE IF EXISTS teachers;
CREATE TABLE IF NOT EXISTS teachers (
  id INT(10) unsigned NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
INSERT INTO teachers(name)
VALUES ('Zea, A.'),
  ('Graham, M.'),
  ('Giuliano, A.');


DROP TABLE IF EXISTS students;
CREATE TABLE IF NOT EXISTS students (
  id INT(10) unsigned NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
INSERT INTO students(FirstName, LastName)
VALUES
  ('Ed', 'Hines'),
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


DROP TABLE IF EXISTS courses;
CREATE TABLE IF NOT EXISTS courses (
  id INT(10) unsigned NOT NULL,
  TeacherID INT(10) unsigned NOT NULL,
  StudentID INT(10) unsigned NOT NULL,
  PRIMARY KEY (id, TeacherID, StudentID),
  FOREIGN KEY (TeacherID) REFERENCES teachers (id) ON DELETE CASCADE,
  FOREIGN KEY (StudentID) REFERENCES students (id) ON DELETE CASCADE  
);
INSERT INTO courses(id, TeacherID, StudentID)
VALUES (1, 1, 1);


DROP TABLE IF EXISTS destinations;
CREATE TABLE IF NOT EXISTS destinations (
  id INT(10) unsigned NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
INSERT INTO destinations(name)
VALUES ('Bathroom'),
  ('Main Office');