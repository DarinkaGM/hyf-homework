-- PART 1

-- 1) Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id

INSERT INTO task(
title, 
description,
created,
updated,
due_date,
status_id)
VALUES(
'Study French',
'Study 1hour a day',
'2021-04-16 22:35:00',
'2021-04-16 22:35:00',
'2021-04-28 12:00:00',
2,
3);

-- 2) Change the title of a task

UPDATE task
SET title = 'Study for JS exam'
WHERE id = 1;

-- 3)Change a task due date

UPDATE task
SET due_date = '2021-04-30 12:00:00'
WHERE id = 1;

-- 4) Change a task status

UPDATE task
SET status_id = '1'
WHERE id = 1;

-- 5) Mark a task as complete

UPDATE task
SET status_id = '3'
WHERE id = 1;

-- 6) Delete a task

DELETE 
FROM task
WHERE id = 2;
 
 
 -- PART 2. 1) Create a new database containing the following tables: Class: with the columns: id, name, begins (date), ends (date) 
CREATE DATABASE school;

CREATE TABLE `Class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `begin_date` DATETIME NOT NULL,
  `end_date` DATETIME NOT NULL
);
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE `Student` (
 `id` int(15) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int(10) unsigned NOT NULL,
 FOREIGN KEY (`class_id`) 
);

  -- Create an index on the name column of the student table.
CREATE INDEX index_student
ON STUDENT(id);
  
  -- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished.
  ALTER TABLE Class
  ADD STATUS ENUM ('not-started','ongoing','finished');

-- Part 3. 1)Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.title AS user_tasks
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
WHERE user.email like '%@spotify.com';

-- 2)Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.title
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
WHERE user.name like 'Donald Duck' AND task.status_id = 1 ;

-- 3)Get all the tasks for 'Maryrose Meadows' that were created in september
SELECT task.title
FROM task
JOIN user_task on task.id = user_task.task_id
JOIN user on user_task.user_id = user.id
WHERE user.name = 'Maryrose Meadows' AND month(task.created) = '9' ;

-- 4)Find how many tasks where created in each month
 SELECT month(created),COUNT(*)
 FROM task
 GROUP BY month(created);