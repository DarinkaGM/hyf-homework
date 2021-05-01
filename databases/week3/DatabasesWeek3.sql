USE `Meal_sharing_app`;
SET NAMES utf8mb4;

CREATE TABLE `Meal` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT(500) NULL,
  `location` VARCHAR(255) NOT NULL,
  `when` DATETIME NOT NULL,
  `max_reservations` INT NOT NULL,
  `price` DECIMAL(6,2) NOT NULL,
  `created_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  
  CREATE TABLE `Reservation`(
 `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `number_of_guests` int NOT NULL,
 `meal_id` int UNSIGNED NOT NULL,
 `created_date` DATETIME NOT NULL default NOW(),
 contact_phonenumber VARCHAR(255) NOT NULL,
 contact_name VARCHAR(255) NOT NULL,
 contact_email VARCHAR(255) UNIQUE NOT NULL,
 CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`) REFERENCES `Meal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
)  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Review`
(
 `id` int
 NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `title` VARCHAR
(255) NOT NULL,
 `description` text NULL DEFAULT NULL,
 `meal_id` int UNSIGNED NOT NULL,
 `stars` int NOT NULL,
 `created_date` DATETIME NOT NULL default NOW(),
 CONSTRAINT `fk_meal_review` FOREIGN KEY
(`meal_id`) REFERENCES `Meal`
(`id`) ON
DELETE CASCADE ON
UPDATE CASCADE
 )  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Meal
SELECT *
FROM Meal;
insert into Meal (title, description, location, when, max_reservations, price, created_date)
values
  ('Tacos', 'Beef tacos', 'Mexican street 37', '2021-04-21  19:00:00', 10, 10.50, '2021-04-21'),
  ('Sushi', 'Salmon sushi', 'Strandvejen 70', '2021-04-19  18:30:00', 10, 40.75, '2021-04-19');


-- Reservation
insert into Reservation
  (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name , contact_email)
values( 2, 1, '2021-04-21', 43654009, Anna B, annab@gmail.com);
insert into Reservation
  ( number_of_guests,meal_id,created_date, contact_phonenumber, contact_name , contact_email)
values( 4, 2, '2021-04-21', 32653425, Stephany E, stephanye@gmail.com);


-- Review
insert into Review
  (id, title, description, meal_id, stars,created_date)
values
  (1, 'Taco review', 'Best tacos in town!', 1, 5, '2021-04-22');
insert into Review
  (id, 
  title, description, meal_id, stars,created_date)
values
  (2, 'Sushi review', 'Ok. A bit pricy.', 2, 2, '2021-04-20');


-- QUERIES. MEAL 1)Get all meals
SELECT *
FROM Meal;

-- 2)Add a new meal
insert into Meal
  ( title, description, location, when, max_reservations, price, created_date)
values
  ( 'Hamburger', 'Veggie hamburger', 'Osterbrogade 54', '2025-24-04 20:29:13', 15, '15.50', '2025-24-04');

-- 3)Get a meal with any id
SELECT *
FROM Meal
WHERE id = 1;

-- 4)Update a meal with any id
UPDATE Meal
SET title = 'Veggie burger',
description = "Veggie burger lentils based"
WHERE id = 3;

-- 5)Delete a meal with any id, fx 1
DELETE FROM Meal
WHERE id = 3;

-- 1)Get all reservations
SELECT *
FROM Reservation;

-- 2)Add a new reservation
insert into Reservation
  ( number_of_guests,meal_id,created_date)
values( 6, 5, '2020-05-30');

-- 3)Get a reservation with any id, fx 1
SELECT *
FROM Reservation
WHERE id = 2;

-- 4)Update a reservation with any id
UPDATE Reservation
SET number_of_guests = '10'
WHERE id = 2;

-- 5)Delete a reservation with any id, fx 1
DELETE FROM Reservation
WHERE id = 3;


-- 1)Get all reviews
SELECT *
FROM Review;

-- 2)Add a new review
insert into Review
  ( title, description, meal_id, stars,created_date)
values
  ( 'Hamburger review', 'The best veggie burger Ive had so far', 3, 5, '2021-04-28');

-- 3)Get a review with any id, fx 1
SELECT *
FROM Review
WHERE id = 2;

-- 4)Update a review with any id
UPDATE Review
SET description = 'Good sushi, fresh ingridients'
WHERE id = 2;

-- 5)Delete a review with any id
DELETE FROM Review
WHERE id = 2;

-- Additional Queries
-- Meal
insert into Meal ( title, description, location, when, max_reservations, price, created_date)
values
  ( 'Nachos', 'Tex-mex nachos with beans', 'Kobenhavn k', '2021-04-29 12:00:00', 20, 120.27, '2021-04-29');


-- Reservation
insert into Reservation
  ( number_of_guests, meal_id, created_date)
values( 12, 1, '2020-03-21');


-- Review
insert into Review
  (title, description, meal_id, stars,created_date)
values
  ('Nachos review', 'Tasty!', 4, 5, '2021-04-28');




-- QUERIES
-- 1)Get meals that has a price smaller than a specific price fx 90
SELECT meal.title, meal.price
FROM Meal
WHERE price < 90;

-- 2)Get meals that still has available reservations
SELECT (meal.max_reservations - reservation.number_of_guests) AS reservation_available, meal.title, meal.description
FROM reservation
INNER JOIN meal ON reservation.id=meal.id
WHERE max_reservations - number_of_guests;

-- 3)Get meals that partially match a title.
SELECT *
FROM meal
WHERE title LIKE '%Nacho%';

-- 4)Get meals that has been created between two dates
SELECT *
FROM meal
WHERE created_date BETWEEN '2021-04-01 12:00:00' AND '2021-04-30 12:00:00';

-- 5)Get only specific number of meals fx return only 5 meals
SELECT *
FROM meal
LIMIT 3;

-- 6)Get the meals that have good reviews
SELECT review.stars, meal.title
FROM review
INNER JOIN meal ON meal.id=review.meal_id
WHERE stars > 3;

-- 7)Get reservations for a specific meal sorted by created_date
SELECT *
FROM reservation 
  JOIN meal
  ON reservation.id=meal.id
  JOIN review 
  ON reservation.id=reservation.meal_id
WHERE meal.id = 2
ORDER BY review.created_date DESC;

-- 8)Sort all meals by average number of stars in the reviews
SELECT  meal.id, meal.title, meal.description, avg(review.stars) as average_review
FROM meal 
  INNER JOIN review 
  ON meal.id = review.meal_id
GROUP BY review.meal_id
ORDER BY average_review DESC;
  