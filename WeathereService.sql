-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 10, 2018 at 11:44 AM
-- Server version: 5.7.23-0ubuntu0.16.04.1
-- PHP Version: 7.0.32-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `WeathereService`
--

-- --------------------------------------------------------

--
-- Table structure for table `sensors`
--

CREATE TABLE `sensors` (
  `sensor_ID` int(11) NOT NULL,
  `station_ID` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `latest_measurement` double(4,2) DEFAULT NULL,
  `error` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sensor_data`
--

CREATE TABLE `sensor_data` (
  `station_ID` int(11) NOT NULL,
  `time` datetime DEFAULT NULL,
  `latest_measurement` double(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sensor_data`
--

INSERT INTO `sensor_data` (`station_ID`, `time`, `latest_measurement`) VALUES
(1, '2018-10-01 13:05:41', 3.40),
(2, '2018-10-01 13:10:46', 3.40),
(3, '2018-10-01 13:11:22', 3.40),
(4, '2018-10-01 14:50:51', 3.40),
(5, '2018-10-01 15:26:39', 3.40),
(6, '2018-10-01 15:26:45', 3.40);

-- --------------------------------------------------------

--
-- Table structure for table `stations`
--

CREATE TABLE `stations` (
  `station_ID` int(11) NOT NULL,
  `manager_ID` int(11) DEFAULT NULL,
  `GPS` varchar(255) DEFAULT NULL,
  `error` tinyint(1) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `data_pulse_interval` int(11) DEFAULT NULL,
  `connectionType` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stations`
--

INSERT INTO `stations` (`station_ID`, `manager_ID`, `GPS`, `error`, `status`, `data_pulse_interval`, `connectionType`) VALUES
(5, 4, '"45,50"', 0, 1, 10, '"3g"');

-- --------------------------------------------------------

--
-- Table structure for table `station_managers`
--

CREATE TABLE `station_managers` (
  `manager_ID` int(11) NOT NULL,
  `nanager_name` varchar(20) NOT NULL,
  `station_id` int(11) NOT NULL,
  `login` varchar(10) NOT NULL,
  `password` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `station_managers`
--

INSERT INTO `station_managers` (`manager_ID`, `nanager_name`, `station_id`, `login`, `password`) VALUES
(1, 'Tero', 1, 'tero', 'terotero');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sensors`
--
ALTER TABLE `sensors`
  ADD PRIMARY KEY (`sensor_ID`);

--
-- Indexes for table `sensor_data`
--
ALTER TABLE `sensor_data`
  ADD PRIMARY KEY (`station_ID`);

--
-- Indexes for table `stations`
--
ALTER TABLE `stations`
  ADD PRIMARY KEY (`station_ID`);

--
-- Indexes for table `station_managers`
--
ALTER TABLE `station_managers`
  ADD PRIMARY KEY (`manager_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sensor_data`
--
ALTER TABLE `sensor_data`
  MODIFY `station_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `station_managers`
--
ALTER TABLE `station_managers`
  MODIFY `manager_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
