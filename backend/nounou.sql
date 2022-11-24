-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: localhost    Database: nounous
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `child`
--

DROP TABLE IF EXISTS `child`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `child` (
  `idKid` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) NOT NULL,
  `prenom` varchar(45) NOT NULL,
  `birthdate` date NOT NULL,
  PRIMARY KEY (`idKid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `child`
--

LOCK TABLES `child` WRITE;
/*!40000 ALTER TABLE `child` DISABLE KEYS */;
INSERT INTO `child` VALUES (1,'D','Margot','2020-10-18');
/*!40000 ALTER TABLE `child` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Contract`
--

DROP TABLE IF EXISTS `Contract`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Contract` (
  `idContract` int NOT NULL,
  `startingDate` date NOT NULL,
  PRIMARY KEY (`idContract`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contract`
--

LOCK TABLES `Contract` WRITE;
/*!40000 ALTER TABLE `Contract` DISABLE KEYS */;
INSERT INTO `Contract` VALUES (1,'2021-09-01');
/*!40000 ALTER TABLE `Contract` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `idEvent` int NOT NULL AUTO_INCREMENT,
  `eventType` varchar(45) DEFAULT NULL COMMENT '- Garde prévue\n- Durée Supplémentaire\n- Absence nounou\n- Absence enfant\n- Congé\n- Férié payé\n- Férié travaillé \n- Férié gratuit\n- Formation nounou',
  `unit` varchar(10) DEFAULT NULL COMMENT 'Heures\nJours\nSemaines\n',
  PRIMARY KEY (`idEvent`),
  UNIQUE KEY `idEvent_UNIQUE` (`idEvent`),
  UNIQUE KEY `eventType_UNIQUE` (`eventType`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (1,'garde','jour'),(2,'absence nounou','jour'),(3,'absence enfant','jour'),(4,'congé','jour'),(5,'heure supplémentaire','heure'),(6,'férié payé','jour'),(7,'férié travaillé','jour'),(8,'férié gratuit','jour'),(9,'formation','jour'),(10,'heure complémentaire','heure');
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nounou`
--

DROP TABLE IF EXISTS `nounou`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nounou` (
  `idnounou` int NOT NULL,
  `nom` varchar(45) DEFAULT NULL,
  `prenom` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idnounou`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nounou`
--

LOCK TABLES `nounou` WRITE;
/*!40000 ALTER TABLE `nounou` DISABLE KEYS */;
/*!40000 ALTER TABLE `nounou` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `idRole` int NOT NULL AUTO_INCREMENT,
  `role` varchar(45) DEFAULT NULL COMMENT 'Admin\nParent\nassMat\n',
  PRIMARY KEY (`idRole`),
  UNIQUE KEY `id_role_UNIQUE` (`idRole`),
  UNIQUE KEY `role_UNIQUE` (`role`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (3,'admin'),(2,'assistante maternelle'),(1,'parent');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedule` (
  `id_annexe` int NOT NULL,
  `idCycle` int DEFAULT NULL COMMENT 'Numéro de la semaine d’un cycle de plusieurs semaines',
  `day` int NOT NULL COMMENT '1: lundi\n2: mardi\n3: mercredi\n4: jeudi\n5: vendredi\n6: samedi\n7: dimanche\n8: lundi + mardi + jeudi + vendredi\n9: L M M J V',
  `start` datetime NOT NULL COMMENT 'Heure de début de ce jour',
  `end` datetime NOT NULL COMMENT 'Heure de fin de ce jour',
  `gouter` int DEFAULT NULL COMMENT 'Nombre de goûter/collation de ce jour\n',
  `repas` int DEFAULT NULL COMMENT 'Nombre de repas de ce jour\n',
  PRIMARY KEY (`id_annexe`),
  CONSTRAINT `id_Annexe` FOREIGN KEY (`id_annexe`) REFERENCES `annexe` (`idAnnexe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `typeVacation`
--

DROP TABLE IF EXISTS `typeVacation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `typeVacation` (
  `idTypeVacation` int NOT NULL,
  `description` varchar(45) NOT NULL COMMENT 'Congés annuels: 0\nCongés familiaux: 1',
  PRIMARY KEY (`idTypeVacation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `typeVacation`
--

LOCK TABLES `typeVacation` WRITE;
/*!40000 ALTER TABLE `typeVacation` DISABLE KEYS */;
/*!40000 ALTER TABLE `typeVacation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) DEFAULT NULL,
  `prenom` varchar(45) NOT NULL,
  `role` int NOT NULL COMMENT 'Parent = TRUE\nassmat = FALSE\n',
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `id_user_UNIQUE` (`idUser`),
  KEY `id_role_idx` (`role`),
  CONSTRAINT `id_role` FOREIGN KEY (`role`) REFERENCES `role` (`idRole`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'D','Damien',1),(2,'Schotter','Isabelle',2);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userContract`
--

DROP TABLE IF EXISTS `userContract`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userContract` (
  `id_contract` int NOT NULL COMMENT 'Id contrat FK',
  `id_user` int NOT NULL COMMENT 'Parent ou assmat',
  `id_kid` int NOT NULL COMMENT 'Enfant concerné par le contrat',
  `isMain` tinyint NOT NULL COMMENT 'Contrat principal TRUE\nContrat de remplacement FALSE',
  KEY `id_kid_idx` (`id_kid`),
  KEY `id_user_idx` (`id_user`),
  KEY `id_contract_idx` (`id_contract`),
  CONSTRAINT `id_contract` FOREIGN KEY (`id_contract`) REFERENCES `Contract` (`idContract`),
  CONSTRAINT `id_kid` FOREIGN KEY (`id_kid`) REFERENCES `child` (`idKid`),
  CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userContract`
--

LOCK TABLES `userContract` WRITE;
/*!40000 ALTER TABLE `userContract` DISABLE KEYS */;
INSERT INTO `userContract` VALUES (1,1,1,1),(1,2,1,1);
/*!40000 ALTER TABLE `userContract` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacation`
--

DROP TABLE IF EXISTS `vacation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacation` (
  `idVacation` int NOT NULL,
  `id_Contrat` int NOT NULL,
  `dateAcquis` date DEFAULT NULL,
  `dateTaken` date DEFAULT NULL,
  `dateLimit` date DEFAULT NULL,
  `quantity` decimal(2,0) DEFAULT NULL COMMENT '2,5 par mois',
  `type` int NOT NULL,
  PRIMARY KEY (`idVacation`),
  KEY `idContrat_idx` (`id_Contrat`),
  CONSTRAINT `idContrat` FOREIGN KEY (`id_Contrat`) REFERENCES `Contract` (`idContract`),
  CONSTRAINT `idEvent` FOREIGN KEY (`idVacation`) REFERENCES `calendar` (`idEvent`),
  CONSTRAINT `idTypeVacation` FOREIGN KEY (`idVacation`) REFERENCES `typeVacation` (`idTypeVacation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacation`
--

LOCK TABLES `vacation` WRITE;
/*!40000 ALTER TABLE `vacation` DISABLE KEYS */;
/*!40000 ALTER TABLE `vacation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-15 23:12:46
