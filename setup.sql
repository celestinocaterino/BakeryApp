CREATE TABLE IF NOT EXISTS `products` (
  `id` int NOT NULL AUTO_INCREMENT, 
  `name` varchar(255) NOT NULL, 
  `description` varchar(255) NOT NULL, 
  `price` float NOT NULL, 
  `to_remove` int DEFAULT(0),
  `discount` float DEFAULT(NULL),
  `currency` varchar(255) NOT NULL, 
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), 
  PRIMARY KEY (`id`)) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `product_ingredient` (
  `id` int NOT NULL AUTO_INCREMENT, 
  `product_id` int NOT NULL, 
  `ingredient_id` int NOT NULL, 
  `quantity` int NOT NULL, 
  `unit_of_measure` varchar(255) NOT NULL, 
  PRIMARY KEY (`id`)) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `ingredients` (
  `id` int NOT NULL AUTO_INCREMENT, 
  `name` varchar(255) NOT NULL, 
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), 
  PRIMARY KEY (`id`)) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT, 
  `email` varchar(255) NOT NULL, 
  `password` varchar(255) NOT NULL, 
  PRIMARY KEY (`id`)) ENGINE=InnoDB;

ALTER TABLE `products` ADD `quantity` int NOT NULL;

ALTER TABLE `product_ingredient` ADD CONSTRAINT `FK_d6fd52ba735eee4514d0a9a92cc` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

ALTER TABLE `product_ingredient` ADD CONSTRAINT `FK_1525d4cd30cd2af9de7952a0fe2` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

INSERT INTO `users` (email, password)
VALUES ('admin@admin.com', '$2a$10$.yT0NBjUOKAsx5ps03FRD.oYgoNiJiY.YsJPQHjlqUyuKG8LELKlW');