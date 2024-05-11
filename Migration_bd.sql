CREATE DATABASE IF NOT EXISTS `sw_tpfinal` CHARACTER SET = 'utf8mb4' COLLATE = 'utf8mb4_unicode_ci';

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE `utilisateur` (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `nom` VARCHAR(30),
  `prenom` VARCHAR(30),
  `courriel` VARCHAR(100) UNIQUE,
  `cle_api` VARCHAR(50),
  `password` VARCHAR(100)
);

DROP TABLE IF EXISTS `taches`;
CREATE TABLE `taches`(
	`id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `utilisateur_id` INTEGER,
    `titre` VARCHAR(100),
    `description` VARCHAR(500),
    `date_debut` DATE,
    `date_echeance` DATE,
    `complete` TINYINT(1) DEFAULT 0,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `sous_taches`;
CREATE TABLE `sous_taches` (
	`id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `tache_id` INTEGER,
    `titre` VARCHAR(100),
    `complete` TINYINT(1) DEFAULT 0,
    FOREIGN KEY (tache_id) REFERENCES taches(id)
);
