-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 06, 2012 at 03:45 PM
-- Server version: 5.5.25
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `cloudcredit`
--

-- --------------------------------------------------------

--
-- Table structure for table `authenticate`
--

CREATE TABLE `authenticate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(50) DEFAULT NULL,
  `pwd` char(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=29 ;

--
-- Dumping data for table `authenticate`
--

INSERT INTO `authenticate` (`id`, `name`, `pwd`) VALUES
(1, 'skdfjbsdfnjsdkj', '8a1e12a75c2b03ba7a31a1b651477f1c29b60e2f'),
(2, '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709'),
(3, '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709'),
(4, '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709'),
(5, '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709'),
(6, '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709'),
(7, 'mistamatt', 'd09305d9f3cb8a35dbf44f52784738ed7b40f03c'),
(8, '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709'),
(9, 'asd', 'f10e2821bbbea527ea02200352313bc059445190'),
(10, 'create', 'ca20728d35f00c3a4c21b1fc8b0086b59f89df2d'),
(11, 'Asd', '92bb7ada5b0678a6fc022698dba8350ead2ef84e'),
(12, '098098', '3e69773713767ad7c7c6169f8bc50bb8ac0d0ee2'),
(13, '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709'),
(14, '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709'),
(15, '89', '81af919ad7eab32118707875fddeada316aef830'),
(16, '98y9898y', 'd2245365b8696314d8132b0de4494b1850e81fdb'),
(17, '989', 'a3725688eb00564158ba69cfe4852183676727a0'),
(18, 'name', '37fa265330ad83eaa879efb1e2db6380896cf639'),
(19, 'name', '37fa265330ad83eaa879efb1e2db6380896cf639'),
(20, 'name', '37fa265330ad83eaa879efb1e2db6380896cf639'),
(21, 'name', '37fa265330ad83eaa879efb1e2db6380896cf639'),
(22, 'name', '37fa265330ad83eaa879efb1e2db6380896cf639'),
(23, 'name', '37fa265330ad83eaa879efb1e2db6380896cf639'),
(24, 'name', '37fa265330ad83eaa879efb1e2db6380896cf639'),
(25, 'name', '37fa265330ad83eaa879efb1e2db6380896cf639'),
(26, 'name', '37fa265330ad83eaa879efb1e2db6380896cf639'),
(27, 'name', '37fa265330ad83eaa879efb1e2db6380896cf639'),
(28, 'name', '37fa265330ad83eaa879efb1e2db6380896cf639');

-- --------------------------------------------------------

--
-- Table structure for table `contactform`
--

CREATE TABLE `contactform` (
  `fname` varchar(20) DEFAULT NULL,
  `mname` varchar(20) DEFAULT NULL,
  `lname` varchar(20) DEFAULT NULL,
  `emailaddress` varchar(20) DEFAULT NULL,
  `workphone` varchar(20) DEFAULT NULL,
  `oname` varchar(20) DEFAULT NULL,
  `otype` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contactform`
--

INSERT INTO `contactform` (`fname`, `mname`, `lname`, `emailaddress`, `workphone`, `oname`, `otype`) VALUES
('987', '987', '987', '98', '798', '0', '0'),
('iou', 'oiu', 'io', 'uoi', 'uoi', '', ''),
('kjh', 'kjh', 'kjh', 'jkh', 'jk', '', ''),
('jkh', 'hkjh', 'kj', 'hkj', 'h', '', ''),
('m', ' n', ' mn', 'mn', ' ', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `leadform`
--

CREATE TABLE `leadform` (
  `date` varchar(30) DEFAULT NULL,
  `loanOfficer` varchar(10) DEFAULT NULL,
  `fName` varchar(10) DEFAULT NULL,
  `mName` varchar(30) DEFAULT NULL,
  `lName` varchar(30) DEFAULT NULL,
  `bDate` varchar(15) DEFAULT NULL,
  `nationality` varchar(30) DEFAULT NULL,
  `rStatus` varchar(30) DEFAULT NULL,
  `mStatus` varchar(30) DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `IDproof` varchar(10) DEFAULT NULL,
  `aProof` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `leadform`
--

INSERT INTO `leadform` (`date`, `loanOfficer`, `fName`, `mName`, `lName`, `bDate`, `nationality`, `rStatus`, `mStatus`, `gender`, `IDproof`, `aProof`) VALUES
('5/18/2012', '1', 'Bob', 'Tyler', 'Douglas', '5/23/2012', 'American', 'American', 'S', 'M', '', 'DrivingLic'),
('5/18/2012', '1', 'Matt', 'Edwards', 'Devico', '7/14/1990', 'American', 'American', 'M', 'M', '', 'VoterID'),
('6/13/2012', '1', 'Agha', 'Jitan', 'Saraaf', '4/15/2016', 'INdian', 'Indian', 'S', 'F', '', 'DrivingLic'),
('5/12/2012', '1', 'William', 'Tyler', 'Shelton', '5/12/2987', 'American', 'American', 'M', 'F', '', 'PANCard');

-- --------------------------------------------------------

--
-- Table structure for table `loanform`
--

CREATE TABLE `loanform` (
  `bankName` varchar(20) DEFAULT NULL,
  `branchName` varchar(20) DEFAULT NULL,
  `accountNum` varchar(20) DEFAULT NULL,
  `accountType` varchar(20) DEFAULT NULL,
  `peakTurnover` varchar(20) DEFAULT NULL,
  `leanTurnover` varchar(20) DEFAULT NULL,
  `averageTurnover` varchar(20) DEFAULT NULL,
  `cogs` varchar(20) DEFAULT NULL,
  `mExpense` varchar(20) DEFAULT NULL,
  `sContractor` varchar(20) DEFAULT NULL,
  `lCharges` varchar(20) DEFAULT NULL,
  `salaries` varchar(20) DEFAULT NULL,
  `mSalary` varchar(20) DEFAULT NULL,
  `wages` varchar(20) DEFAULT NULL,
  `loan1` varchar(20) DEFAULT NULL,
  `loan2` varchar(20) DEFAULT NULL,
  `loan3` varchar(20) DEFAULT NULL,
  `loan4` varchar(20) DEFAULT NULL,
  `rent` varchar(20) DEFAULT NULL,
  `electricity` varchar(20) DEFAULT NULL,
  `gas` varchar(20) DEFAULT NULL,
  `telephone` varchar(20) DEFAULT NULL,
  `water` varchar(20) DEFAULT NULL,
  `maintenance` varchar(20) DEFAULT NULL,
  `fuelExpense` varchar(20) DEFAULT NULL,
  `marketing` varchar(20) DEFAULT NULL,
  `shipping` varchar(20) DEFAULT NULL,
  `security` varchar(20) DEFAULT NULL,
  `insurance` varchar(20) DEFAULT NULL,
  `chitFund` varchar(20) DEFAULT NULL,
  `familyExpense` varchar(20) DEFAULT NULL,
  `sundryExpense` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `loanform`
--

INSERT INTO `loanform` (`bankName`, `branchName`, `accountNum`, `accountType`, `peakTurnover`, `leanTurnover`, `averageTurnover`, `cogs`, `mExpense`, `sContractor`, `lCharges`, `salaries`, `mSalary`, `wages`, `loan1`, `loan2`, `loan3`, `loan4`, `rent`, `electricity`, `gas`, `telephone`, `water`, `maintenance`, `fuelExpense`, `marketing`, `shipping`, `security`, `insurance`, `chitFund`, `familyExpense`, `sundryExpense`) VALUES
('89768', '7687', '678', '687', '6', '786', '876', '876', '87', '678', '687', '', '687', '687', '6', '876', '87', '678', '687', '678', '678', '6', '786', '87', '76', '87', '678', '6786', '876', '786', '', '0'),
('7987', '987', '98', '79', '79', '878', '97', '987', '987', '987', '9', '', '8798', '798', '798', '789', '789', '79', '7', '987', '987', '987', '987', '97', '89', '798', '98', '798', '7987', '8976', '', ''),
('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('9o', 'ljk', 'hkj', 'lk', 'jlk', 'jlk', 'jlk', 'jl', 'kj', 'lkj', 'jlk', '', 'jlk', 'j', 'lkj', 'lk', 'jlk', 'jlk', 'jlk', 'j', 'l', 'jkl', 'jlk', 'jlk', 'jkl', 'j', 'lkj', 'lk', 'jlk', 'jlk', '', ''),
('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
('98', '797', '987', '987', '98', '798', '7', '897', '987', '987', '98', '798', '798', '7', '897', '987', '98', '798', '798', '7', '987', '89', '79', '', '789', '7', '97', '987', '98', '7', '', ''),
('iuy', 'iuy', 'iuy', 'iu', 'yui', 'y', 'iuy', 'iu', 'yiu', 'y', 'iuy', 'iu', 'yiu', 'y', 'iuy', 'iuy', 'iuy', 'ui', 'yiu', 'yiu', 'y', 'iuy', 'i', '', 'yi', 'uy', 'iu', 'yiu', 'yi', 'uy', '', ''),
('h', 'khu', 'ih', 'iuh', 'iuh', 'iu', 'hiu', 'h', 'iuh', 'iuh', 'ui', 'hiu', 'h', 'iuh', 'iuh', 'iu', 'hiu', 'h', 'iuh', 'ih', 'iu', 'hiu', 'h', '', 'iihu', '', 'iuh', 'iu', 'hiu', 'hiuh', '', ''),
('kjhk', 'jh', 'kjh', 'kjh', 'kjh', 'jk', 'hkj', 'hk', 'jh', 'kjh', 'kj', 'hjk', 'h', 'kjh', 'hjk', 'h', 'kj', 'hkj', 'hk', 'jh', 'jh', 'k', 'hkj', '', 'hjk', 'hk', 'jh', 'kjh', 'jk', 'hjkk', '', ''),
('nbkj', 'bkkj', 'bjk', 'bkj', 'njk', 'n', 'kj', 'nkj', 'nkj', 'nkj', 'njk', 'nk', 'nkj', 'nkj', 'njk', 'kj', 'nkj', 'nkj', 'n', 'kjn', 'kjn', 'kj', 'nkj', '', 'kjn', 'njk', 'knj', 'knj', 'kjnknj', 'kjn', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `screenform`
--

CREATE TABLE `screenform` (
  `landline` varchar(10) DEFAULT NULL,
  `mobilephone` varchar(10) DEFAULT NULL,
  `permanentaddress` varchar(255) DEFAULT NULL,
  `permAddressCity` varchar(20) DEFAULT NULL,
  `permAddressState` varchar(20) DEFAULT NULL,
  `permAddressDistrict` varchar(20) DEFAULT NULL,
  `permAddressPinCode` varchar(10) DEFAULT NULL,
  `presaddress` varchar(255) DEFAULT NULL,
  `presAddressCity` varchar(20) DEFAULT NULL,
  `presAddressState` varchar(20) DEFAULT NULL,
  `presAddressDistrict` varchar(20) DEFAULT NULL,
  `presAddressPinCode` varchar(10) DEFAULT NULL,
  `cType` varchar(20) DEFAULT NULL,
  `incomeType` varchar(20) DEFAULT NULL,
  `bLine` varchar(20) DEFAULT NULL,
  `constitution` varchar(20) DEFAULT NULL,
  `nEmployees` varchar(20) DEFAULT NULL,
  `sYear` varchar(20) DEFAULT NULL,
  `dRegistration` varchar(10) DEFAULT NULL,
  `rOffice` varchar(20) DEFAULT NULL,
  `rLocation` varchar(20) DEFAULT NULL,
  `website` varchar(20) DEFAULT NULL,
  `competition` varchar(20) DEFAULT NULL,
  `wPermit` varchar(30) DEFAULT NULL,
  `gIncome` varchar(20) DEFAULT NULL,
  `rExpense` varchar(20) DEFAULT NULL,
  `fIncome` varchar(20) DEFAULT NULL,
  `oExpense` varchar(20) DEFAULT NULL,
  `oIncome` varchar(20) DEFAULT NULL,
  `tAssets` varchar(20) DEFAULT NULL,
  `tLiabilities` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `screenform`
--

INSERT INTO `screenform` (`landline`, `mobilephone`, `permanentaddress`, `permAddressCity`, `permAddressState`, `permAddressDistrict`, `permAddressPinCode`, `presaddress`, `presAddressCity`, `presAddressState`, `presAddressDistrict`, `presAddressPinCode`, `cType`, `incomeType`, `bLine`, `constitution`, `nEmployees`, `sYear`, `dRegistration`, `rOffice`, `rLocation`, `website`, `competition`, `wPermit`, `gIncome`, `rExpense`, `fIncome`, `oExpense`, `oIncome`, `tAssets`, `tLiabilities`) VALUES
('0', '0', '0', '876', '786', '876', '0', '0', '687', '678', '87', '0', '678', '0', '0', '6', '878', '76', '87', '678', '678', '678', '0', '786', '786', '786', '678', '786', '786', '876', '768'),
('987', '987', '89', '798', '7', '987', '897', '', '7', '897', '987', '98', '79', '1', '0', '798', '789', '7', '987', '98', '798', '7', '0', '987', '987', '98', '798', '79', '87', '987', ''),
('987', '987', '897', '98', '798', '7', '987', '', '89', '798', '7', '987', '98', '1', '0', '987', '98', '98', '79', '87', '897', '987', '0', '78', '97', '987', '98', '798', '78', '997', '98'),
('98', '98', '09', '890', '8', '098', '9', '', '80', '98', '098', '90', '89', '1', '0', '809', '80', '98', '098', '09', '809', '8', '0', '098', '09', '809', '8', '098', '0', '098', '098'),
('lkm', 'lk', 'kln', 'lkn', 'kln', 'kl', 'nlk', '', 'nlk', 'n', 'lkn', 'kln', 'lkn', '1', '0', 'lk', 'nlk', 'nlk', 'nlk', 'nkl', 'nl', 'kknl', '2', 'nlk', 'nlk', 'nlk', 'n', 'lnkl', 'nklkn', 'lnk', 'ln'),
('kj', 'kjh', 'kjh', 'jkh', 'kjh', 'jk', 'hjk', '', 'kjh', 'kjh', 'kj', 'hkj', 'hk', '1', '0', 'kjh', 'kjh', 'kj', 'hjk', 'hk', 'jh', 'kjh', '0', 'kjh', 'kj', 'hkj', 'hkj', 'hkj', 'h', 'kjh', 'jkhkj'),
('iuhiuh', 'iuh', 'iuh', 'iu', 'hiu', 'h', 'iuh', '', 'iu', 'hiu', 'h', 'iuh', 'iuh', '1', '0', 'iuh', 'iuh', 'uih', 'iuh', 'iuh', 'ihu', 'iu', '0', 'hiu', 'hiu', 'hiu', 'h', 'iiu', 'hi', 'uh', 'iu');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
