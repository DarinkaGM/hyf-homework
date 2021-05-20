SET NAMES utf8mb4;
CREATE DATABASE Podcasts;
USE Podcasts;

CREATE TABLE `Host` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(50) NOT NULL,
  `host_id` INT UNSIGNED,
  PRIMARY KEY (`id`))
  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  
  CREATE TABLE `Genre` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Genre` VARCHAR(100) NOT NULL,
  `genre_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`))
  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  
  CREATE TABLE `Episodes`(
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `minutes` VARCHAR(255) NOT NULL,
  `date` DATE NOT NULL,
  `topic` VARCHAR(255) NOT NULL,
  `times_played` VARCHAR(255) NOT NULL,
    `podcast_id` INT UNSIGNED NOT NULL,
  CONSTRAINT `fk_podcast_episodes` FOREIGN KEY (`podcast_id`) REFERENCES `Podcast`(`id`) ON DELETE CASCADE,
  PRIMARY KEY (`id`))
  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  
  CREATE TABLE `Podcast` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `suscribers` VARCHAR(255) NOT NULL,
  `daily_listeners` VARCHAR(255) NOT NULL,
  `podcast_id` INT UNSIGNED NOT NULL,
  CONSTRAINT `fk_podcast_genre` FOREIGN KEY (`genre_id`) REFERENCES `Genre`(`id`) ON DELETE CASCADE,
CONSTRAINT `fk_podcast_host` FOREIGN KEY (`host_id`) REFERENCES `Host`(`id`) ON DELETE CASCADE,

  PRIMARY KEY (`id`))
  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  
  