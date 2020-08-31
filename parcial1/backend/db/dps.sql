-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema id14021897_dps
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema id14021897_dps
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `id14021897_dps` DEFAULT CHARACTER SET utf8 ;
USE `id14021897_dps` ;

-- -----------------------------------------------------
-- Table `id14021897_dps`.`tallerCliente`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `id14021897_dps`.`tallerCliente` ;

CREATE TABLE IF NOT EXISTS `id14021897_dps`.`tallerCliente` (
  `dui` VARCHAR(10) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `total_visitas` INT NOT NULL,
  PRIMARY KEY (`dui`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `id14021897_dps`.`tallerVehiculo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `id14021897_dps`.`tallerVehiculo` ;

CREATE TABLE IF NOT EXISTS `id14021897_dps`.`tallerVehiculo` (
  `placa` VARCHAR(10) NOT NULL,
  `marca` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`placa`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `id14021897_dps`.`tallerVisitas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `id14021897_dps`.`tallerVisitas` ;

CREATE TABLE IF NOT EXISTS `id14021897_dps`.`tallerVisitas` (
  `dui_cliente` VARCHAR(10) NOT NULL,
  `placa_vehiculo` VARCHAR(10) NOT NULL,
  `costo` DOUBLE NULL,
  `motivo` VARCHAR(100) NULL,
  INDEX `FK_placa_idx` (`placa_vehiculo` ASC),
  PRIMARY KEY (`dui_cliente`, `placa_vehiculo`),
  CONSTRAINT `FK_dui`
    FOREIGN KEY (`dui_cliente`)
    REFERENCES `id14021897_dps`.`tallerCliente` (`dui`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `FK_placa`
    FOREIGN KEY (`placa_vehiculo`)
    REFERENCES `id14021897_dps`.`tallerVehiculo` (`placa`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
