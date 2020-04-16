CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(30),
    password VARCHAR(250)

);

CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(20)
);

CREATE TABLE classes(
    class_id SERIAL PRIMARY KEY,
    title VARCHAR(30)
);

CREATE TABLE enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(student_id)
    class_id INT REFERENCES classes(class_id)
);

ALTER TABLE students
ADD last_name VARCHAR(20)