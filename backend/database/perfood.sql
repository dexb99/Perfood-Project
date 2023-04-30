-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 30, 2023 at 06:26 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perfood`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `Admin_ID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Username` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Password` varchar(15) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`Admin_ID`, `Username`, `Password`) VALUES
('ADMIN_01', 'admin', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `choice`
--

CREATE TABLE `choice` (
  `Choice_ID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Choice_text` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Choice_Score` int(10) NOT NULL,
  `Question_ID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `choice`
--

INSERT INTO `choice` (`Choice_ID`, `Choice_text`, `Choice_Score`, `Question_ID`) VALUES
('CH1_A', 'ต้องการได้รับประทานอาหารท้องถิ่นที่ชื่น', 1, 1),
('CH1_B', 'ต้องการพักผ่อน และสัมผัสบรรยากาศ/วิถีชีวิตวัฒนธรรมท้องถิ่น', 2, 1),
('CH1_C', 'ต้องการร่วมกิจกรรมการท่องเที่ยวชองชุมชนท้องถิ่น', 3, 1),
('CH1_D', 'ต้องการร่วมกิจกรรมของชุมชน และรับประทานอาหารท้องถิ่น', 4, 1),
('CH10_A', 'อิ่มอร่อยไปกับอาหารท้องถิ่น', 1, 10),
('CH10_B', 'ดื่มด่ำความสวยงามของบรรยากาศริมแม่น้ำโขง', 2, 10),
('CH10_C', 'สนุกกับการทำกิจกรรมร่วมกับชุมชน', 3, 10),
('CH10_D', 'ฟินกับการทำกิจกรรมพร้อมเปิดประสบการณ์ใหม่ในการกิน', 4, 10),
('CH11_A', 'รีวิวอาหารสุดฟินกินอร่อย ', 1, 11),
('CH11_B', 'รีวิวสถานที่พักผ่อนสุดชิล บรรยากาศผ่อนคลาย', 2, 11),
('CH11_C', 'รีวิวกิจกรรมในแหล่งท่องเที่ยว', 3, 11),
('CH11_D', 'รีวิวกิจกรรมที่สร้างการเรียนรู้วิถีชีวิตและวัฒนธรรมท้องถิ่นสำหรับนักท่องเที่ยว', 4, 11),
('CH12_A', 'เน้นกิน ไม่เน้นเที่ยว ขอนั่งเคี้ยวอย่างเดียวพอ', 1, 12),
('CH12_B', 'ท่องเที่ยวแบบชิล ๆ ไม่อินกับการกินและกิจกรรม', 2, 12),
('CH12_C', 'เที่ยวสนุกทุกกิจกรรม แต่ไม่นำด้วยของกิน', 3, 12),
('CH12_D', 'ชอบกิน ชอบเที่ยว ชอบเฟี้ยวทุกกิจกรรม', 4, 12),
('CH2_A', 'รายชื่อร้านอาหารที่ต้องไปชิม', 1, 2),
('CH2_B', 'รายชื่อที่พักที่บรรยากาศดี เหมาะกับการพักผ่อน', 2, 2),
('CH2_C', 'รายชื่อแหล่งท่องเที่ยวที่มีกิจกรรมให้กับนักท่องเที่ยว', 3, 2),
('CH2_D', 'รายชื่อชุมชนที่มีกิจกรรมถ่ายทอดวิถีชีวิตและวัฒนธรรมท้องถิ่น', 4, 2),
('CH3_A', 'จอดทุกที่ที่มีของกิน', 1, 3),
('CH3_B', 'ใช้เวลาเดินทางสั้น มุ่งมั่นการพักผ่อน', 2, 3),
('CH3_C', 'จอยทุกที่ที่มีกิจกรรม', 3, 3),
('CH3_D', 'แวะเสริมประสบการณ์ ร่วมทำอาหารกับชุมชน', 4, 3),
('CH4_A', 'แหล่งท่องเที่ยวมีอาหารท้องถิ่นหลากหลาย', 1, 4),
('CH4_B', 'แหล่งท่องเที่ยวที่มีทัศนียภาพที่สวยงาม', 2, 4),
('CH4_C', 'แหล่งท่องเที่ยวที่มีกิจกรรมของชุมชนที่หลากหลาย', 3, 4),
('CH4_D', 'แหล่งท่องเที่ยวที่ได้มีส่วนร่วมเรียนรู้วิถีชีวิตและวัฒนธรรมท้องถิ่น', 4, 4),
('CH5_A', 'ร้านอาหารที่มีเมนูอาหารขึ้นชื่อ', 1, 5),
('CH5_B', 'ร้านอาหารที่มีบรรยากาศดี', 2, 5),
('CH5_C', 'ร้านอาหารท้องถิ่นที่มีกิจกรรมที่เปิดโอกาสให้มีส่วนร่วม', 3, 5),
('CH5_D', 'ร้านอาหารที่มีกิจกรรมให้มีส่วนร่วมชิมและปรุงอาหารเอง', 4, 5),
('CH6_A', 'ตะลอนชิมอาหารท้องถิ่น', 1, 6),
('CH6_B', 'เข้าโรงแรมที่พักเพื่อพักผ่อน หรือนั่งชมบรรยากาศ', 2, 6),
('CH6_C', 'ทำกิจกรรมร่วมกับคนในชุมชน เช่น รำวงโบราณ ทำอาหารท้องถิ่น ล่องเรือหาปลาฯ', 3, 6),
('CH6_D', 'ร่วมทำกิจกรรม เช่น ทำอาหารท้องถิ่นเพื่อรับประทาน', 4, 6),
('CH7_A', 'อาหารตามกระแสนิยมจากการรีวิวในโซเชียลมีเดีย', 1, 7),
('CH7_B', 'อาหารที่เคยรับประทาน', 2, 7),
('CH7_C', 'ไม่เน้นอาหาร เน้นการมีส่วนร่วมกับกิจกรรมของท้องถิ่น', 3, 7),
('CH7_D', 'เน้นอาหารท้องถิ่นจากการมีส่วนร่วมด้วยตนเอง', 4, 7),
('CH8_A', 'ชิมอาหารขึ้นชื่อ เช่น ข้าวปุ้น น้ำแจ่ว ข้าวต้มมัด ปลาเนื้ออ่อนลุ่มน้ำโขง ฯ', 1, 8),
('CH8_B', 'พักผ่อน เช่น ชมบรรยากาศริมโขง ปั่นจักรยานตามเส้นทางเลียบน้ำโขง ฯ', 2, 8),
('CH8_C', 'ทำกิจกรรมการท่องเที่ยวร่วมกับชุมชน เช่น ทำผาสาดลอยเคราะห์ ทอผ้า หน้ากากผีขนน้ำ', 3, 8),
('CH8_D', 'มีส่วนร่วมกับกิจกรรมอาหารท้องถิ่น เช่น ร่วมทำข้าวปุ้น-น้ำแจ่ว ห่อข้าวต้มมัด', 4, 8),
('CH9_A', 'แชร์ภาพอาหารลงใน Social Media', 1, 9),
('CH9_B', 'พักผ่อน', 2, 9),
('CH9_C', 'เล่าประสบการณ์เกี่ยวกับการทำกิจกรรมที่ประทับใจให้ผู้อื่นฟัง', 3, 9),
('CH9_D', 'มอบของฝากหรือของที่ระลึกจากการ D.I.Y ให้กับคนใกล้ชิด', 4, 9);

-- --------------------------------------------------------

--
-- Stand-in structure for view `num_personal`
-- (See below for the actual view)
--
CREATE TABLE `num_personal` (
`Personal_Name` varchar(30)
,`Number` bigint(21)
);

-- --------------------------------------------------------

--
-- Table structure for table `personal`
--

CREATE TABLE `personal` (
  `Personal_ID` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `Personal_Name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Personal_Detail` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Personal_IMG` varchar(70) COLLATE utf8_unicode_ci NOT NULL,
  `Threshold` int(10) NOT NULL,
  `Suggest_IMG` varchar(60) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `personal`
--

INSERT INTO `personal` (`Personal_ID`, `Personal_Name`, `Personal_Detail`, `Personal_IMG`, `Threshold`, `Suggest_IMG`) VALUES
('PER_1', 'Big Eater', 'adfsdf', 'image_personal1.png', 12, ''),
('PER_2', 'Shrugger', 'lorem', 'image_personal2.png', 24, ''),
('PER_3', 'Activist', 'lorem', 'image_personal3.png', 36, ''),
('PER_4', 'Super Taster', 'lorem', 'image_personal4.png', 48, '');

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `Question_ID` int(15) NOT NULL COMMENT 'รหัสคำถาม',
  `Question_Text` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'ตัวคำถาม',
  `Survey_ID` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`Question_ID`, `Question_Text`, `Survey_ID`) VALUES
(1, 'สิ่งที่ทำให้คุณอยากออกไปเที่ยวคืออะไร', 'SVY_01'),
(2, 'การวางแผนก่อนเดินทางท่องเที่ยวเชียงคาน คุณเน้นอะไรมากที่สุด', 'SVY_01'),
(3, 'กิจกรรมระหว่างเดินทางที่คุณมักจะทำ', 'SVY_01'),
(4, 'ลักษณะของแหล่งท่องเที่ยวที่คุณชื่นชอบ', 'SVY_01'),
(5, 'ถ้าคุณเดินทางมาท่องเที่ยวเชียงคาน คุณจะเลือกร้านอาหารแบบไหน', 'SVY_01'),
(6, 'สิ่งแรกที่คุณทำเมื่อมาถึงเชียงคาน', 'SVY_01'),
(7, 'ในระหว่างเดินทางท่องเที่ยว คุณเลือกรับประทานอาหารแบบไหน', 'SVY_01'),
(8, 'กิจกรรมการท่องเที่ยวในเชียงคานที่คุณให้ความสนใจมากที่สุด', 'SVY_01'),
(9, 'หลังจากเดินทางกลับจากการเที่ยวเชียงคานคุณทำสิ่งใด', 'SVY_01'),
(10, 'ประสบการณ์ที่ประทับใจในการเที่ยวเชียงคาน', 'SVY_01'),
(11, 'คอนเทนต์แบบไหนที่คุณชื่นชอบ', 'SVY_01'),
(12, 'สโลแกนในการท่องเที่ยวของคุณคืออะไร', 'SVY_01');

-- --------------------------------------------------------

--
-- Table structure for table `question_score`
--

CREATE TABLE `question_score` (
  `Score_ID` int(15) NOT NULL,
  `Response_ID` int(15) NOT NULL,
  `Question_ID` int(15) NOT NULL,
  `Choice_ID` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Question_Score` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `question_score`
--

INSERT INTO `question_score` (`Score_ID`, `Response_ID`, `Question_ID`, `Choice_ID`, `Question_Score`) VALUES
(24, 29, 1, 'CH1_A', 1),
(25, 29, 7, 'CH7_C', 3),
(26, 29, 2, 'CH2_D', 4),
(27, 29, 8, 'CH8_B', 2),
(28, 29, 10, 'CH10_A', 1),
(29, 29, 9, 'CH9_D', 4),
(30, 29, 11, 'CH11_B', 2),
(31, 29, 12, 'CH12_C', 3),
(32, 29, 3, 'CH3_B', 2),
(33, 29, 4, 'CH4_A', 1),
(34, 29, 5, 'CH5_D', 4),
(35, 29, 6, 'CH6_D', 4),
(36, 35, 2, 'CH2_A', 1),
(37, 35, 1, 'CH1_A', 1),
(38, 35, 12, 'CH12_A', 1),
(39, 35, 3, 'CH3_A', 1),
(40, 35, 4, 'CH4_A', 1),
(41, 35, 5, 'CH5_A', 1),
(42, 35, 6, 'CH6_A', 1),
(43, 35, 7, 'CH7_A', 1),
(44, 35, 8, 'CH8_A', 1),
(45, 35, 11, 'CH11_A', 1),
(46, 35, 10, 'CH10_A', 1),
(47, 35, 9, 'CH9_A', 1),
(48, 42, 1, 'CH1_D', 4),
(49, 42, 3, 'CH3_B', 2),
(50, 42, 2, 'CH2_B', 2),
(51, 42, 4, 'CH4_D', 4),
(52, 42, 5, 'CH5_D', 4),
(53, 42, 6, 'CH6_B', 2),
(54, 42, 7, 'CH7_C', 3),
(55, 42, 8, 'CH8_B', 2),
(56, 42, 12, 'CH12_A', 1),
(57, 42, 11, 'CH11_C', 3),
(58, 42, 10, 'CH10_B', 2),
(59, 42, 9, 'CH9_B', 2),
(60, 44, 1, 'CH1_A', 1),
(61, 44, 7, 'CH7_A', 1),
(62, 44, 2, 'CH2_A', 1),
(63, 44, 8, 'CH8_A', 1),
(64, 44, 9, 'CH9_A', 1),
(65, 44, 10, 'CH10_A', 1),
(66, 44, 11, 'CH11_A', 1),
(67, 44, 3, 'CH3_A', 1),
(68, 44, 12, 'CH12_D', 4),
(69, 44, 4, 'CH4_A', 1),
(70, 44, 5, 'CH5_A', 1),
(71, 44, 6, 'CH6_A', 1),
(72, 45, 1, 'CH1_D', 4),
(73, 45, 5, 'CH5_D', 4),
(74, 45, 2, 'CH2_D', 4),
(75, 45, 3, 'CH3_D', 4),
(76, 45, 9, 'CH9_D', 4),
(77, 45, 10, 'CH10_D', 4),
(78, 45, 11, 'CH11_D', 4),
(79, 45, 12, 'CH12_D', 4),
(80, 45, 4, 'CH4_D', 4),
(81, 45, 8, 'CH8_D', 4),
(82, 45, 7, 'CH7_D', 4),
(83, 45, 6, 'CH6_D', 4),
(84, 46, 1, 'CH1_C', 3),
(85, 46, 2, 'CH2_C', 3),
(86, 46, 3, 'CH3_C', 3),
(87, 46, 7, 'CH7_C', 3),
(88, 46, 8, 'CH8_C', 3),
(89, 46, 12, 'CH12_D', 4),
(90, 46, 4, 'CH4_C', 3),
(91, 46, 5, 'CH5_C', 3),
(92, 46, 11, 'CH11_D', 4),
(93, 46, 6, 'CH6_C', 3),
(94, 46, 10, 'CH10_C', 3),
(95, 46, 9, 'CH9_D', 4),
(96, 56, 1, 'CH1_D', 4),
(97, 56, 2, 'CH2_C', 3),
(98, 56, 4, 'CH4_B', 2),
(99, 56, 3, 'CH3_D', 4),
(100, 56, 5, 'CH5_A', 1),
(101, 56, 6, 'CH6_D', 4),
(102, 56, 7, 'CH7_C', 3),
(103, 56, 8, 'CH8_C', 3),
(104, 56, 9, 'CH9_C', 3),
(105, 56, 10, 'CH10_A', 1),
(106, 56, 11, 'CH11_A', 1),
(107, 56, 12, 'CH12_D', 4),
(108, 56, 1, 'CH1_D', 4),
(109, 56, 2, 'CH2_C', 3),
(110, 56, 3, 'CH3_D', 4),
(111, 56, 4, 'CH4_B', 2),
(112, 56, 5, 'CH5_A', 1),
(113, 56, 6, 'CH6_D', 4),
(114, 56, 7, 'CH7_C', 3),
(115, 56, 8, 'CH8_C', 3),
(116, 56, 9, 'CH9_C', 3),
(117, 56, 10, 'CH10_A', 1),
(118, 56, 11, 'CH11_A', 1),
(119, 56, 12, 'CH12_D', 4),
(120, 56, 1, 'CH1_D', 4),
(121, 56, 2, 'CH2_C', 3),
(122, 56, 3, 'CH3_D', 4),
(123, 56, 4, 'CH4_B', 2),
(124, 56, 5, 'CH5_A', 1),
(125, 56, 6, 'CH6_D', 4),
(126, 56, 7, 'CH7_C', 3),
(127, 56, 8, 'CH8_C', 3),
(128, 56, 9, 'CH9_C', 3),
(129, 56, 10, 'CH10_A', 1),
(130, 56, 11, 'CH11_A', 1),
(131, 56, 12, 'CH12_D', 4),
(132, 56, 1, 'CH1_D', 4),
(133, 56, 2, 'CH2_C', 3),
(134, 56, 3, 'CH3_D', 4),
(135, 56, 4, 'CH4_B', 2),
(136, 56, 5, 'CH5_A', 1),
(137, 56, 6, 'CH6_D', 4),
(138, 56, 7, 'CH7_C', 3),
(139, 56, 8, 'CH8_C', 3),
(140, 56, 9, 'CH9_C', 3),
(141, 56, 10, 'CH10_A', 1),
(142, 56, 11, 'CH11_A', 1),
(143, 56, 12, 'CH12_D', 4),
(144, 56, 1, 'CH1_D', 4),
(145, 56, 9, 'CH9_C', 3),
(146, 56, 2, 'CH2_C', 3),
(147, 56, 10, 'CH10_A', 1),
(148, 56, 11, 'CH11_A', 1),
(149, 56, 12, 'CH12_D', 4),
(150, 56, 3, 'CH3_D', 4),
(151, 56, 4, 'CH4_B', 2),
(152, 56, 5, 'CH5_A', 1),
(153, 56, 6, 'CH6_D', 4),
(154, 56, 7, 'CH7_C', 3),
(155, 56, 8, 'CH8_C', 3),
(156, 56, 1, 'CH1_D', 4),
(157, 56, 2, 'CH2_C', 3),
(158, 56, 3, 'CH3_D', 4),
(159, 56, 4, 'CH4_B', 2),
(160, 56, 5, 'CH5_A', 1),
(161, 56, 6, 'CH6_D', 4),
(162, 56, 7, 'CH7_C', 3),
(163, 56, 8, 'CH8_C', 3),
(164, 56, 9, 'CH9_C', 3),
(165, 56, 10, 'CH10_A', 1),
(166, 56, 11, 'CH11_A', 1),
(167, 56, 12, 'CH12_D', 4),
(168, 56, 1, 'CH1_D', 4),
(169, 56, 2, 'CH2_C', 3),
(170, 56, 3, 'CH3_D', 4),
(171, 56, 4, 'CH4_B', 2),
(172, 56, 5, 'CH5_A', 1),
(173, 56, 6, 'CH6_D', 4),
(174, 56, 7, 'CH7_C', 3),
(175, 56, 8, 'CH8_C', 3),
(176, 56, 9, 'CH9_C', 3),
(177, 56, 10, 'CH10_A', 1),
(178, 56, 11, 'CH11_A', 1),
(179, 56, 12, 'CH12_D', 4);

-- --------------------------------------------------------

--
-- Table structure for table `response`
--

CREATE TABLE `response` (
  `Response_ID` int(15) NOT NULL,
  `Survey_ID` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `TimeStamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `User_Rate` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `response`
--

INSERT INTO `response` (`Response_ID`, `Survey_ID`, `TimeStamp`, `User_Rate`) VALUES
(47, 'SVY_01', '2023-04-30 12:58:04', 0),
(48, 'SVY_01', '2023-04-30 12:58:34', 0),
(49, 'SVY_01', '2023-04-30 13:07:18', 0),
(50, 'SVY_01', '2023-04-30 13:07:18', 0),
(51, 'SVY_01', '2023-04-30 13:07:18', 0),
(52, 'SVY_01', '2023-04-30 13:07:23', 0),
(53, 'SVY_01', '2023-04-30 13:07:30', 0),
(54, 'SVY_01', '2023-04-30 13:16:11', 0),
(55, 'SVY_01', '2023-04-30 13:18:26', 0),
(56, 'SVY_01', '2023-04-30 13:40:47', 5);

-- --------------------------------------------------------

--
-- Stand-in structure for view `response_result`
-- (See below for the actual view)
--
CREATE TABLE `response_result` (
`Response_ID` int(30)
,`resultScore` int(20)
,`Personal_Name` varchar(30)
);

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE `result` (
  `id` int(20) NOT NULL,
  `Response_ID` int(30) NOT NULL,
  `resultScore` int(20) NOT NULL,
  `Personal_ID` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `result`
--

INSERT INTO `result` (`id`, `Response_ID`, `resultScore`, `Personal_ID`) VALUES
(1, 29, 31, 'PER_3'),
(2, 35, 12, 'PER_1'),
(3, 42, 31, 'PER_3'),
(4, 44, 15, 'PER_2'),
(5, 45, 48, 'PER_4'),
(6, 46, 39, 'PER_4'),
(7, 56, 33, 'PER_3'),
(8, 56, 33, 'PER_3'),
(9, 56, 33, 'PER_3'),
(10, 56, 33, 'PER_3'),
(11, 56, 33, 'PER_3'),
(12, 56, 33, 'PER_3'),
(13, 56, 33, 'PER_3');

-- --------------------------------------------------------

--
-- Table structure for table `survey`
--

CREATE TABLE `survey` (
  `Survey_ID` varchar(10) COLLATE utf8_unicode_ci NOT NULL COMMENT 'รหัสแบบสอบถาม',
  `Survey_Name` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'ชื่อแบบสอบถาม',
  `Survey_Status` enum('on','off') CHARACTER SET utf8 NOT NULL DEFAULT 'on' COMMENT 'สถานะแบบสอบถาม'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `survey`
--

INSERT INTO `survey` (`Survey_ID`, `Survey_Name`, `Survey_Status`) VALUES
('SVY_01', 'แบบสอบถามเพื่อการวิจัย \"การยกระดับการท่องเที่ยวโดยชุมชนเพื่อสร้างประสบการณ์ของนักท่องเที่ยวตาม บุคลักษณ์ของนักท่องเที่ยวเชิงอาหาร ในอำเภอเชียงคาน จังหวัดเลย\"', 'on');

-- --------------------------------------------------------

--
-- Structure for view `num_personal`
--
DROP TABLE IF EXISTS `num_personal`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `num_personal`  AS SELECT `response_result`.`Personal_Name` AS `Personal_Name`, count(0) AS `Number` FROM `response_result` GROUP BY `response_result`.`Personal_Name` ;

-- --------------------------------------------------------

--
-- Structure for view `response_result`
--
DROP TABLE IF EXISTS `response_result`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `response_result`  AS SELECT `result`.`Response_ID` AS `Response_ID`, `result`.`resultScore` AS `resultScore`, `personal`.`Personal_Name` AS `Personal_Name` FROM (`result` join `personal` on(`result`.`Personal_ID` = `personal`.`Personal_ID`)) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`Admin_ID`);

--
-- Indexes for table `choice`
--
ALTER TABLE `choice`
  ADD PRIMARY KEY (`Choice_ID`),
  ADD KEY `Question_ID` (`Question_ID`);

--
-- Indexes for table `personal`
--
ALTER TABLE `personal`
  ADD PRIMARY KEY (`Personal_ID`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`Question_ID`),
  ADD KEY `Survey_ID` (`Survey_ID`);

--
-- Indexes for table `question_score`
--
ALTER TABLE `question_score`
  ADD PRIMARY KEY (`Score_ID`),
  ADD KEY `Question_ID` (`Question_ID`),
  ADD KEY `Response_ID` (`Response_ID`),
  ADD KEY `Choice_ID` (`Choice_ID`);

--
-- Indexes for table `response`
--
ALTER TABLE `response`
  ADD PRIMARY KEY (`Response_ID`),
  ADD KEY `Survey_ID` (`Survey_ID`);

--
-- Indexes for table `result`
--
ALTER TABLE `result`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Response_ID` (`Response_ID`),
  ADD KEY `Personal_ID` (`Personal_ID`);

--
-- Indexes for table `survey`
--
ALTER TABLE `survey`
  ADD PRIMARY KEY (`Survey_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `Question_ID` int(15) NOT NULL AUTO_INCREMENT COMMENT 'รหัสคำถาม', AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `question_score`
--
ALTER TABLE `question_score`
  MODIFY `Score_ID` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=180;

--
-- AUTO_INCREMENT for table `response`
--
ALTER TABLE `response`
  MODIFY `Response_ID` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `result`
--
ALTER TABLE `result`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `choice`
--
ALTER TABLE `choice`
  ADD CONSTRAINT `choice_ibfk_1` FOREIGN KEY (`Question_ID`) REFERENCES `question` (`Question_ID`);

--
-- Constraints for table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`Survey_ID`) REFERENCES `survey` (`Survey_ID`);

--
-- Constraints for table `question_score`
--
ALTER TABLE `question_score`
  ADD CONSTRAINT `question_score_ibfk_3` FOREIGN KEY (`Question_ID`) REFERENCES `question` (`Question_ID`),
  ADD CONSTRAINT `question_score_ibfk_4` FOREIGN KEY (`Response_ID`) REFERENCES `response` (`Response_ID`),
  ADD CONSTRAINT `question_score_ibfk_5` FOREIGN KEY (`Choice_ID`) REFERENCES `choice` (`Choice_ID`);

--
-- Constraints for table `response`
--
ALTER TABLE `response`
  ADD CONSTRAINT `response_ibfk_1` FOREIGN KEY (`Survey_ID`) REFERENCES `survey` (`Survey_ID`);

--
-- Constraints for table `result`
--
ALTER TABLE `result`
  ADD CONSTRAINT `result_ibfk_1` FOREIGN KEY (`Response_ID`) REFERENCES `response` (`Response_ID`),
  ADD CONSTRAINT `result_ibfk_2` FOREIGN KEY (`Personal_ID`) REFERENCES `personal` (`Personal_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
