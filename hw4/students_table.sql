CREATE TABLE `students` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(16) NOT NULL,
    `st_id` INT NOT NULL,
    `admission_year` INT NOT NULL,
    `major` VARCHAR(20) NOT NULL,
    `phone_number` VARCHAR(11) NOT NULL,
    `address` VARCHAR(80) NOT NULL,
    `is_in_school` TINYINT(1) NOT NULL DEFAULT 1
    `credit` INT NOT NULL DEFAULT 0,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;