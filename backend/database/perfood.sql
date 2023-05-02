-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2023 at 05:37 PM
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
-- Stand-in structure for view `num_response`
-- (See below for the actual view)
--
CREATE TABLE `num_response` (
`Done_Survey` varchar(4)
,`number` bigint(21)
);

-- --------------------------------------------------------

--
-- Table structure for table `personal`
--

CREATE TABLE `personal` (
  `Personal_ID` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `Personal_Name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Personal_Detail` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Personal_IMG` varchar(70) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Threshold` int(10) NOT NULL,
  `Suggest_IMG` varchar(60) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `personal`
--

INSERT INTO `personal` (`Personal_ID`, `Personal_Name`, `Personal_Detail`, `Personal_IMG`, `Threshold`, `Suggest_IMG`) VALUES
('PER_1', 'Big Eater', 'adfsdf', 'Personal_IMG_personal1.png', 12, 'Suggest_IMG_attraction1.jpg'),
('PER_2', 'Shrugger', 'lorem', 'Personal_IMG_personal2.png', 24, 'Suggest_IMG_attraction1.jpg'),
('PER_3', 'Activist', 'lorem', 'Personal_IMG_personal3.png', 36, 'Suggest_IMG_arcticons_toon-blast.png'),
('PER_4', 'Super Taster', 'lorem', 'Personal_IMG_personal4.png', 48, 'Suggest_IMG_people1.png');

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
(180, 1, 1, 'CH1_D', 4),
(181, 1, 3, 'CH3_B', 2),
(182, 1, 4, 'CH4_C', 3),
(183, 1, 5, 'CH5_B', 2),
(184, 1, 6, 'CH6_C', 3),
(185, 1, 7, 'CH7_D', 4),
(186, 1, 8, 'CH8_A', 1),
(187, 1, 9, 'CH9_C', 3),
(188, 1, 10, 'CH10_C', 3),
(189, 1, 11, 'CH11_A', 1),
(190, 1, 12, 'CH12_C', 3),
(191, 1, 2, 'CH2_B', 2),
(192, 1, 1, 'CH1_D', 4),
(193, 1, 2, 'CH2_B', 2),
(194, 1, 3, 'CH3_B', 2),
(195, 1, 4, 'CH4_C', 3),
(196, 1, 5, 'CH5_B', 2),
(197, 1, 6, 'CH6_C', 3),
(198, 1, 7, 'CH7_D', 4),
(199, 1, 8, 'CH8_A', 1),
(200, 1, 9, 'CH9_C', 3),
(201, 1, 10, 'CH10_C', 3),
(202, 1, 11, 'CH11_A', 1),
(203, 1, 12, 'CH12_C', 3),
(204, 1, 1, 'CH1_D', 4),
(205, 1, 2, 'CH2_B', 2),
(206, 1, 3, 'CH3_B', 2),
(207, 1, 4, 'CH4_C', 3),
(208, 1, 5, 'CH5_B', 2),
(209, 1, 6, 'CH6_C', 3),
(210, 1, 7, 'CH7_D', 4),
(211, 1, 8, 'CH8_A', 1),
(212, 1, 9, 'CH9_C', 3),
(213, 1, 10, 'CH10_C', 3),
(214, 1, 11, 'CH11_A', 1),
(215, 1, 12, 'CH12_C', 3),
(216, 1, 1, 'CH1_D', 4),
(217, 1, 2, 'CH2_B', 2),
(218, 1, 3, 'CH3_B', 2),
(219, 1, 4, 'CH4_C', 3),
(220, 1, 5, 'CH5_B', 2),
(221, 1, 6, 'CH6_C', 3),
(222, 1, 7, 'CH7_D', 4),
(223, 1, 8, 'CH8_A', 1),
(224, 1, 9, 'CH9_C', 3),
(225, 1, 10, 'CH10_C', 3),
(226, 1, 11, 'CH11_A', 1),
(227, 1, 12, 'CH12_C', 3),
(228, 2, 2, 'CH2_D', 4),
(229, 2, 10, 'CH10_D', 4),
(230, 2, 11, 'CH11_D', 4),
(231, 2, 12, 'CH12_B', 2),
(232, 2, 3, 'CH3_C', 3),
(233, 2, 2, 'CH2_D', 4),
(234, 2, 3, 'CH3_C', 3),
(235, 2, 4, 'CH4_A', 1),
(236, 2, 1, 'CH1_D', 4),
(237, 2, 4, 'CH4_A', 1),
(238, 2, 5, 'CH5_A', 1),
(239, 2, 6, 'CH6_A', 1),
(240, 2, 1, 'CH1_D', 4),
(241, 2, 7, 'CH7_B', 2),
(242, 2, 5, 'CH5_A', 1),
(243, 2, 8, 'CH8_D', 4),
(244, 2, 9, 'CH9_D', 4),
(245, 2, 10, 'CH10_D', 4),
(246, 2, 11, 'CH11_D', 4),
(247, 2, 12, 'CH12_B', 2),
(248, 2, 6, 'CH6_A', 1),
(249, 2, 7, 'CH7_B', 2),
(250, 2, 9, 'CH9_D', 4),
(251, 2, 8, 'CH8_D', 4),
(252, 2, 2, 'CH2_D', 4),
(253, 2, 3, 'CH3_C', 3),
(254, 2, 4, 'CH4_A', 1),
(255, 2, 1, 'CH1_D', 4),
(256, 2, 5, 'CH5_A', 1),
(257, 2, 6, 'CH6_A', 1),
(258, 2, 7, 'CH7_B', 2),
(259, 2, 8, 'CH8_D', 4),
(260, 2, 9, 'CH9_D', 4),
(261, 2, 10, 'CH10_D', 4),
(262, 2, 11, 'CH11_D', 4),
(263, 2, 12, 'CH12_B', 2),
(264, 2, 2, 'CH2_D', 4),
(265, 2, 3, 'CH3_C', 3),
(266, 2, 4, 'CH4_A', 1),
(267, 2, 1, 'CH1_D', 4),
(268, 2, 5, 'CH5_A', 1),
(269, 2, 6, 'CH6_A', 1),
(270, 2, 7, 'CH7_B', 2),
(271, 2, 8, 'CH8_D', 4),
(272, 2, 9, 'CH9_D', 4),
(273, 2, 10, 'CH10_D', 4),
(274, 2, 11, 'CH11_D', 4),
(275, 2, 12, 'CH12_B', 2),
(276, 2, 2, 'CH2_D', 4),
(277, 2, 3, 'CH3_C', 3),
(278, 2, 4, 'CH4_A', 1),
(279, 2, 1, 'CH1_D', 4),
(280, 2, 5, 'CH5_A', 1),
(281, 2, 6, 'CH6_A', 1),
(282, 2, 7, 'CH7_B', 2),
(283, 2, 8, 'CH8_D', 4),
(284, 2, 9, 'CH9_D', 4),
(285, 2, 10, 'CH10_D', 4),
(286, 2, 11, 'CH11_D', 4),
(287, 2, 12, 'CH12_B', 2),
(288, 3, 3, 'CH3_D', 4),
(289, 3, 12, 'CH12_D', 4),
(290, 3, 2, 'CH2_A', 1),
(291, 3, 1, 'CH1_D', 4),
(292, 3, 4, 'CH4_A', 1),
(293, 3, 5, 'CH5_D', 4),
(294, 3, 6, 'CH6_A', 1),
(295, 3, 7, 'CH7_D', 4),
(296, 3, 8, 'CH8_C', 3),
(297, 3, 3, 'CH3_D', 4),
(298, 3, 2, 'CH2_A', 1),
(299, 3, 9, 'CH9_D', 4),
(300, 3, 1, 'CH1_D', 4),
(301, 3, 4, 'CH4_A', 1),
(302, 3, 5, 'CH5_D', 4),
(303, 3, 10, 'CH10_C', 3),
(304, 3, 6, 'CH6_A', 1),
(305, 3, 7, 'CH7_D', 4),
(306, 3, 11, 'CH11_A', 1),
(307, 3, 8, 'CH8_C', 3),
(308, 3, 9, 'CH9_D', 4),
(309, 3, 10, 'CH10_C', 3),
(310, 3, 11, 'CH11_A', 1),
(311, 3, 12, 'CH12_D', 4),
(312, 3, 3, 'CH3_D', 4),
(313, 3, 2, 'CH2_A', 1),
(314, 3, 1, 'CH1_D', 4),
(315, 3, 4, 'CH4_A', 1),
(316, 3, 5, 'CH5_D', 4),
(317, 3, 6, 'CH6_A', 1),
(318, 3, 7, 'CH7_D', 4),
(319, 3, 8, 'CH8_C', 3),
(320, 3, 9, 'CH9_D', 4),
(321, 3, 10, 'CH10_C', 3),
(322, 3, 11, 'CH11_A', 1),
(323, 3, 12, 'CH12_D', 4),
(324, 3, 3, 'CH3_D', 4),
(325, 3, 2, 'CH2_A', 1),
(326, 3, 1, 'CH1_D', 4),
(327, 3, 4, 'CH4_A', 1),
(328, 3, 5, 'CH5_D', 4),
(329, 3, 6, 'CH6_A', 1),
(330, 3, 7, 'CH7_D', 4),
(331, 3, 8, 'CH8_C', 3),
(332, 3, 9, 'CH9_D', 4),
(333, 3, 10, 'CH10_C', 3),
(334, 3, 11, 'CH11_A', 1),
(335, 3, 12, 'CH12_D', 4),
(336, 4, 1, 'CH1_B', 2),
(337, 4, 8, 'CH8_C', 3),
(338, 4, 2, 'CH2_D', 4),
(339, 4, 9, 'CH9_D', 4),
(340, 4, 10, 'CH10_A', 1),
(341, 4, 11, 'CH11_D', 4),
(342, 4, 12, 'CH12_B', 2),
(343, 4, 3, 'CH3_A', 1),
(344, 4, 4, 'CH4_A', 1),
(345, 4, 5, 'CH5_A', 1),
(346, 4, 6, 'CH6_B', 2),
(347, 4, 7, 'CH7_C', 3),
(348, 4, 1, 'CH1_B', 2),
(349, 4, 2, 'CH2_D', 4),
(350, 4, 3, 'CH3_A', 1),
(351, 4, 4, 'CH4_A', 1),
(352, 4, 5, 'CH5_A', 1),
(353, 4, 6, 'CH6_B', 2),
(354, 4, 7, 'CH7_C', 3),
(355, 4, 8, 'CH8_C', 3),
(356, 4, 9, 'CH9_D', 4),
(357, 4, 10, 'CH10_A', 1),
(358, 4, 11, 'CH11_D', 4),
(359, 4, 12, 'CH12_B', 2),
(360, 4, 1, 'CH1_B', 2),
(361, 4, 2, 'CH2_D', 4),
(362, 4, 3, 'CH3_A', 1),
(363, 4, 4, 'CH4_A', 1),
(364, 4, 5, 'CH5_A', 1),
(365, 4, 6, 'CH6_B', 2),
(366, 4, 7, 'CH7_C', 3),
(367, 4, 8, 'CH8_C', 3),
(368, 4, 9, 'CH9_D', 4),
(369, 4, 10, 'CH10_A', 1),
(370, 4, 11, 'CH11_D', 4),
(371, 4, 12, 'CH12_B', 2),
(372, 4, 1, 'CH1_B', 2),
(373, 4, 2, 'CH2_D', 4),
(374, 4, 3, 'CH3_A', 1),
(375, 4, 4, 'CH4_A', 1),
(376, 4, 5, 'CH5_A', 1),
(377, 4, 6, 'CH6_B', 2),
(378, 4, 7, 'CH7_C', 3),
(379, 4, 8, 'CH8_C', 3),
(380, 4, 9, 'CH9_D', 4),
(381, 4, 10, 'CH10_A', 1),
(382, 4, 11, 'CH11_D', 4),
(383, 4, 12, 'CH12_B', 2),
(384, 5, 1, 'CH1_B', 2),
(385, 5, 9, 'CH9_A', 1),
(386, 5, 2, 'CH2_A', 1),
(387, 5, 10, 'CH10_D', 4),
(388, 5, 11, 'CH11_D', 4),
(389, 5, 3, 'CH3_D', 4),
(390, 5, 12, 'CH12_A', 1),
(391, 5, 4, 'CH4_A', 1),
(392, 5, 5, 'CH5_C', 3),
(393, 5, 6, 'CH6_B', 2),
(394, 5, 7, 'CH7_D', 4),
(395, 5, 8, 'CH8_A', 1),
(396, 5, 1, 'CH1_B', 2),
(397, 5, 2, 'CH2_A', 1),
(398, 5, 3, 'CH3_D', 4),
(399, 5, 4, 'CH4_A', 1),
(400, 5, 5, 'CH5_C', 3),
(401, 5, 6, 'CH6_B', 2),
(402, 5, 7, 'CH7_D', 4),
(403, 5, 8, 'CH8_A', 1),
(404, 5, 9, 'CH9_A', 1),
(405, 5, 10, 'CH10_D', 4),
(406, 5, 11, 'CH11_D', 4),
(407, 5, 12, 'CH12_A', 1),
(408, 5, 1, 'CH1_B', 2),
(409, 5, 2, 'CH2_A', 1),
(410, 5, 3, 'CH3_D', 4),
(411, 5, 4, 'CH4_A', 1),
(412, 5, 5, 'CH5_C', 3),
(413, 5, 6, 'CH6_B', 2),
(414, 5, 7, 'CH7_D', 4),
(415, 5, 8, 'CH8_A', 1),
(416, 5, 9, 'CH9_A', 1),
(417, 5, 10, 'CH10_D', 4),
(418, 5, 11, 'CH11_D', 4),
(419, 5, 12, 'CH12_A', 1),
(420, 5, 1, 'CH1_B', 2),
(421, 5, 2, 'CH2_A', 1),
(422, 5, 3, 'CH3_D', 4),
(423, 5, 4, 'CH4_A', 1),
(424, 5, 5, 'CH5_C', 3),
(425, 5, 6, 'CH6_B', 2),
(426, 5, 7, 'CH7_D', 4),
(427, 5, 8, 'CH8_A', 1),
(428, 5, 9, 'CH9_A', 1),
(429, 5, 10, 'CH10_D', 4),
(430, 5, 11, 'CH11_D', 4),
(431, 5, 12, 'CH12_A', 1),
(432, 6, 2, 'CH2_A', 1),
(433, 6, 1, 'CH1_D', 4),
(434, 6, 3, 'CH3_C', 3),
(435, 6, 4, 'CH4_D', 4),
(436, 6, 2, 'CH2_A', 1),
(437, 6, 5, 'CH5_A', 1),
(438, 6, 6, 'CH6_A', 1),
(439, 6, 9, 'CH9_C', 3),
(440, 6, 7, 'CH7_D', 4),
(441, 6, 8, 'CH8_A', 1),
(442, 6, 10, 'CH10_D', 4),
(443, 6, 11, 'CH11_B', 2),
(444, 6, 1, 'CH1_D', 4),
(445, 6, 12, 'CH12_B', 2),
(446, 6, 3, 'CH3_C', 3),
(447, 6, 4, 'CH4_D', 4),
(448, 6, 5, 'CH5_A', 1),
(449, 6, 6, 'CH6_A', 1),
(450, 6, 7, 'CH7_D', 4),
(451, 6, 8, 'CH8_A', 1),
(452, 6, 9, 'CH9_C', 3),
(453, 6, 10, 'CH10_D', 4),
(454, 6, 11, 'CH11_B', 2),
(455, 6, 12, 'CH12_B', 2),
(456, 6, 2, 'CH2_A', 1),
(457, 6, 1, 'CH1_D', 4),
(458, 6, 3, 'CH3_C', 3),
(459, 6, 4, 'CH4_D', 4),
(460, 6, 5, 'CH5_A', 1),
(461, 6, 6, 'CH6_A', 1),
(462, 6, 7, 'CH7_D', 4),
(463, 6, 8, 'CH8_A', 1),
(464, 6, 9, 'CH9_C', 3),
(465, 6, 10, 'CH10_D', 4),
(466, 6, 11, 'CH11_B', 2),
(467, 6, 12, 'CH12_B', 2),
(468, 6, 2, 'CH2_A', 1),
(469, 6, 1, 'CH1_D', 4),
(470, 6, 3, 'CH3_C', 3),
(471, 6, 4, 'CH4_D', 4),
(472, 6, 5, 'CH5_A', 1),
(473, 6, 6, 'CH6_A', 1),
(474, 6, 7, 'CH7_D', 4),
(475, 6, 8, 'CH8_A', 1),
(476, 6, 9, 'CH9_C', 3),
(477, 6, 10, 'CH10_D', 4),
(478, 6, 11, 'CH11_B', 2),
(479, 6, 12, 'CH12_B', 2),
(480, 7, 2, 'CH2_A', 1),
(481, 7, 1, 'CH1_C', 3),
(482, 7, 5, 'CH5_B', 2),
(483, 7, 10, 'CH10_D', 4),
(484, 7, 3, 'CH3_B', 2),
(485, 7, 9, 'CH9_D', 4),
(486, 7, 4, 'CH4_C', 3),
(487, 7, 11, 'CH11_D', 4),
(488, 7, 12, 'CH12_D', 4),
(489, 7, 8, 'CH8_A', 1),
(490, 7, 7, 'CH7_C', 3),
(491, 7, 6, 'CH6_C', 3),
(492, 7, 2, 'CH2_A', 1),
(493, 7, 1, 'CH1_C', 3),
(494, 7, 3, 'CH3_B', 2),
(495, 7, 4, 'CH4_C', 3),
(496, 7, 8, 'CH8_A', 1),
(497, 7, 7, 'CH7_C', 3),
(498, 7, 6, 'CH6_C', 3),
(499, 7, 5, 'CH5_B', 2),
(500, 7, 9, 'CH9_D', 4),
(501, 7, 10, 'CH10_D', 4),
(502, 7, 11, 'CH11_D', 4),
(503, 7, 12, 'CH12_D', 4),
(504, 7, 2, 'CH2_A', 1),
(505, 7, 1, 'CH1_C', 3),
(506, 7, 3, 'CH3_B', 2),
(507, 7, 4, 'CH4_C', 3),
(508, 7, 8, 'CH8_A', 1),
(509, 7, 7, 'CH7_C', 3),
(510, 7, 6, 'CH6_C', 3),
(511, 7, 5, 'CH5_B', 2),
(512, 7, 9, 'CH9_D', 4),
(513, 7, 10, 'CH10_D', 4),
(514, 7, 11, 'CH11_D', 4),
(515, 7, 12, 'CH12_D', 4),
(516, 7, 2, 'CH2_A', 1),
(517, 7, 1, 'CH1_C', 3),
(518, 7, 3, 'CH3_B', 2),
(519, 7, 4, 'CH4_C', 3),
(520, 7, 8, 'CH8_A', 1),
(521, 7, 7, 'CH7_C', 3),
(522, 7, 6, 'CH6_C', 3),
(523, 7, 5, 'CH5_B', 2),
(524, 7, 9, 'CH9_D', 4),
(525, 7, 10, 'CH10_D', 4),
(526, 7, 11, 'CH11_D', 4),
(527, 7, 12, 'CH12_D', 4),
(528, 8, 1, 'CH1_A', 1),
(529, 8, 5, 'CH5_A', 1),
(530, 8, 6, 'CH6_A', 1),
(531, 8, 2, 'CH2_A', 1),
(532, 8, 3, 'CH3_A', 1),
(533, 8, 7, 'CH7_A', 1),
(534, 8, 8, 'CH8_A', 1),
(535, 8, 9, 'CH9_A', 1),
(536, 8, 4, 'CH4_A', 1),
(537, 8, 10, 'CH10_A', 1),
(538, 8, 11, 'CH11_A', 1),
(539, 8, 12, 'CH12_A', 1),
(540, 8, 1, 'CH1_A', 1),
(541, 8, 2, 'CH2_A', 1),
(542, 8, 3, 'CH3_A', 1),
(543, 8, 4, 'CH4_A', 1),
(544, 8, 5, 'CH5_A', 1),
(545, 8, 6, 'CH6_A', 1),
(546, 8, 7, 'CH7_A', 1),
(547, 8, 8, 'CH8_A', 1),
(548, 8, 9, 'CH9_A', 1),
(549, 8, 10, 'CH10_A', 1),
(550, 8, 11, 'CH11_A', 1),
(551, 8, 12, 'CH12_A', 1),
(552, 8, 1, 'CH1_A', 1),
(553, 8, 2, 'CH2_A', 1),
(554, 8, 3, 'CH3_A', 1),
(555, 8, 4, 'CH4_A', 1),
(556, 8, 5, 'CH5_A', 1),
(557, 8, 6, 'CH6_A', 1),
(558, 8, 7, 'CH7_A', 1),
(559, 8, 8, 'CH8_A', 1),
(560, 8, 9, 'CH9_A', 1),
(561, 8, 10, 'CH10_A', 1),
(562, 8, 11, 'CH11_A', 1),
(563, 8, 12, 'CH12_A', 1),
(564, 8, 1, 'CH1_A', 1),
(565, 8, 2, 'CH2_A', 1),
(566, 8, 3, 'CH3_A', 1),
(567, 8, 4, 'CH4_A', 1),
(568, 8, 5, 'CH5_A', 1),
(569, 8, 6, 'CH6_A', 1),
(570, 8, 7, 'CH7_A', 1),
(571, 8, 8, 'CH8_A', 1),
(572, 8, 9, 'CH9_A', 1),
(573, 8, 10, 'CH10_A', 1),
(574, 8, 11, 'CH11_A', 1),
(575, 8, 12, 'CH12_A', 1),
(576, 9, 1, 'CH1_A', 1),
(577, 9, 2, 'CH2_A', 1),
(578, 9, 7, 'CH7_A', 1),
(579, 9, 8, 'CH8_A', 1),
(580, 9, 3, 'CH3_A', 1),
(581, 9, 9, 'CH9_A', 1),
(582, 9, 10, 'CH10_A', 1),
(583, 9, 4, 'CH4_A', 1),
(584, 9, 11, 'CH11_A', 1),
(585, 9, 5, 'CH5_A', 1),
(586, 9, 12, 'CH12_A', 1),
(587, 9, 6, 'CH6_A', 1),
(588, 9, 1, 'CH1_A', 1),
(589, 9, 2, 'CH2_A', 1),
(590, 9, 3, 'CH3_A', 1),
(591, 9, 4, 'CH4_A', 1),
(592, 9, 5, 'CH5_A', 1),
(593, 9, 6, 'CH6_A', 1),
(594, 9, 7, 'CH7_A', 1),
(595, 9, 8, 'CH8_A', 1),
(596, 9, 9, 'CH9_A', 1),
(597, 9, 10, 'CH10_A', 1),
(598, 9, 11, 'CH11_A', 1),
(599, 9, 12, 'CH12_A', 1),
(600, 9, 1, 'CH1_A', 1),
(601, 9, 2, 'CH2_A', 1),
(602, 9, 3, 'CH3_A', 1),
(603, 9, 4, 'CH4_A', 1),
(604, 9, 5, 'CH5_A', 1),
(605, 9, 6, 'CH6_A', 1),
(606, 9, 7, 'CH7_A', 1),
(607, 9, 8, 'CH8_A', 1),
(608, 9, 9, 'CH9_A', 1),
(609, 9, 10, 'CH10_A', 1),
(610, 9, 11, 'CH11_A', 1),
(611, 9, 12, 'CH12_A', 1),
(612, 9, 1, 'CH1_A', 1),
(613, 9, 2, 'CH2_A', 1),
(614, 9, 3, 'CH3_A', 1),
(615, 9, 4, 'CH4_A', 1),
(616, 9, 5, 'CH5_A', 1),
(617, 9, 6, 'CH6_A', 1),
(618, 9, 7, 'CH7_A', 1),
(619, 9, 8, 'CH8_A', 1),
(620, 9, 9, 'CH9_A', 1),
(621, 9, 10, 'CH10_A', 1),
(622, 9, 11, 'CH11_A', 1),
(623, 9, 12, 'CH12_A', 1),
(624, 10, 12, 'CH12_A', 1),
(625, 10, 1, 'CH1_A', 1),
(626, 10, 11, 'CH11_A', 1),
(627, 10, 10, 'CH10_A', 1),
(628, 10, 2, 'CH2_A', 1),
(629, 10, 3, 'CH3_A', 1),
(630, 10, 9, 'CH9_A', 1),
(631, 10, 4, 'CH4_A', 1),
(632, 10, 5, 'CH5_A', 1),
(633, 10, 6, 'CH6_A', 1),
(634, 10, 1, 'CH1_A', 1),
(635, 10, 2, 'CH2_A', 1),
(636, 10, 7, 'CH7_A', 1),
(637, 10, 3, 'CH3_A', 1),
(638, 10, 8, 'CH8_A', 1),
(639, 10, 4, 'CH4_A', 1),
(640, 10, 5, 'CH5_A', 1),
(641, 10, 6, 'CH6_A', 1),
(642, 10, 7, 'CH7_A', 1),
(643, 10, 8, 'CH8_A', 1),
(644, 10, 12, 'CH12_A', 1),
(645, 10, 11, 'CH11_A', 1),
(646, 10, 10, 'CH10_A', 1),
(647, 10, 9, 'CH9_A', 1),
(648, 10, 1, 'CH1_A', 1),
(649, 10, 2, 'CH2_A', 1),
(650, 10, 3, 'CH3_A', 1),
(651, 10, 4, 'CH4_A', 1),
(652, 10, 5, 'CH5_A', 1),
(653, 10, 6, 'CH6_A', 1),
(654, 10, 7, 'CH7_A', 1),
(655, 10, 8, 'CH8_A', 1),
(656, 10, 12, 'CH12_A', 1),
(657, 10, 11, 'CH11_A', 1),
(658, 10, 10, 'CH10_A', 1),
(659, 10, 9, 'CH9_A', 1),
(660, 10, 1, 'CH1_A', 1),
(661, 10, 2, 'CH2_A', 1),
(662, 10, 3, 'CH3_A', 1),
(663, 10, 4, 'CH4_A', 1),
(664, 10, 5, 'CH5_A', 1),
(665, 10, 6, 'CH6_A', 1),
(666, 10, 7, 'CH7_A', 1),
(667, 10, 8, 'CH8_A', 1),
(668, 10, 12, 'CH12_A', 1),
(669, 10, 11, 'CH11_A', 1),
(670, 10, 10, 'CH10_A', 1),
(671, 10, 9, 'CH9_A', 1),
(672, 14, 1, 'CH1_A', 1),
(673, 14, 2, 'CH2_A', 1),
(674, 14, 5, 'CH5_A', 1),
(675, 14, 6, 'CH6_A', 1),
(676, 14, 7, 'CH7_A', 1),
(677, 14, 8, 'CH8_A', 1),
(678, 14, 3, 'CH3_A', 1),
(679, 14, 9, 'CH9_A', 1),
(680, 14, 10, 'CH10_A', 1),
(681, 14, 11, 'CH11_A', 1),
(682, 14, 4, 'CH4_A', 1),
(683, 14, 12, 'CH12_A', 1),
(684, 14, 1, 'CH1_A', 1),
(685, 14, 2, 'CH2_A', 1),
(686, 14, 3, 'CH3_A', 1),
(687, 14, 4, 'CH4_A', 1),
(688, 14, 5, 'CH5_A', 1),
(689, 14, 6, 'CH6_A', 1),
(690, 14, 7, 'CH7_A', 1),
(691, 14, 8, 'CH8_A', 1),
(692, 14, 9, 'CH9_A', 1),
(693, 14, 10, 'CH10_A', 1),
(694, 14, 11, 'CH11_A', 1),
(695, 14, 12, 'CH12_A', 1),
(696, 14, 1, 'CH1_A', 1),
(697, 14, 2, 'CH2_A', 1),
(698, 14, 3, 'CH3_A', 1),
(699, 14, 4, 'CH4_A', 1),
(700, 14, 5, 'CH5_A', 1),
(701, 14, 6, 'CH6_A', 1),
(702, 14, 7, 'CH7_A', 1),
(703, 14, 8, 'CH8_A', 1),
(704, 14, 9, 'CH9_A', 1),
(705, 14, 10, 'CH10_A', 1),
(706, 14, 11, 'CH11_A', 1),
(707, 14, 12, 'CH12_A', 1),
(708, 14, 1, 'CH1_A', 1),
(709, 14, 2, 'CH2_A', 1),
(710, 14, 3, 'CH3_A', 1),
(711, 14, 4, 'CH4_A', 1),
(712, 14, 5, 'CH5_A', 1),
(713, 14, 6, 'CH6_A', 1),
(714, 14, 7, 'CH7_A', 1),
(715, 14, 8, 'CH8_A', 1),
(716, 14, 9, 'CH9_A', 1),
(717, 14, 10, 'CH10_A', 1),
(718, 14, 11, 'CH11_A', 1),
(719, 14, 12, 'CH12_A', 1),
(720, 17, 2, 'CH2_C', 3),
(721, 17, 6, 'CH6_B', 2),
(722, 17, 8, 'CH8_B', 2),
(723, 17, 1, 'CH1_D', 4),
(724, 17, 7, 'CH7_C', 3),
(725, 17, 10, 'CH10_D', 4),
(726, 17, 9, 'CH9_D', 4),
(727, 17, 11, 'CH11_C', 3),
(728, 17, 12, 'CH12_B', 2),
(729, 17, 3, 'CH3_A', 1),
(730, 17, 4, 'CH4_B', 2),
(731, 17, 5, 'CH5_A', 1),
(732, 17, 2, 'CH2_C', 3),
(733, 17, 1, 'CH1_D', 4),
(734, 17, 3, 'CH3_A', 1),
(735, 17, 4, 'CH4_B', 2),
(736, 17, 5, 'CH5_A', 1),
(737, 17, 6, 'CH6_B', 2),
(738, 17, 8, 'CH8_B', 2),
(739, 17, 7, 'CH7_C', 3),
(740, 17, 10, 'CH10_D', 4),
(741, 17, 9, 'CH9_D', 4),
(742, 17, 11, 'CH11_C', 3),
(743, 17, 12, 'CH12_B', 2),
(744, 17, 2, 'CH2_C', 3),
(745, 17, 1, 'CH1_D', 4),
(746, 17, 3, 'CH3_A', 1),
(747, 17, 4, 'CH4_B', 2),
(748, 17, 5, 'CH5_A', 1),
(749, 17, 6, 'CH6_B', 2),
(750, 17, 8, 'CH8_B', 2),
(751, 17, 7, 'CH7_C', 3),
(752, 17, 10, 'CH10_D', 4),
(753, 17, 9, 'CH9_D', 4),
(754, 17, 11, 'CH11_C', 3),
(755, 17, 12, 'CH12_B', 2),
(756, 17, 2, 'CH2_C', 3),
(757, 17, 1, 'CH1_D', 4),
(758, 17, 3, 'CH3_A', 1),
(759, 17, 4, 'CH4_B', 2),
(760, 17, 5, 'CH5_A', 1),
(761, 17, 6, 'CH6_B', 2),
(762, 17, 8, 'CH8_B', 2),
(763, 17, 7, 'CH7_C', 3),
(764, 17, 10, 'CH10_D', 4),
(765, 17, 9, 'CH9_D', 4),
(766, 17, 11, 'CH11_C', 3),
(767, 17, 12, 'CH12_B', 2),
(768, 1, 1, 'CH1_A', 1),
(769, 1, 2, 'CH2_A', 1),
(770, 1, 3, 'CH3_A', 1),
(771, 1, 4, 'CH4_A', 1),
(772, 1, 5, 'CH5_A', 1),
(773, 1, 6, 'CH6_A', 1),
(774, 1, 7, 'CH7_A', 1),
(775, 1, 8, 'CH8_A', 1),
(776, 1, 9, 'CH9_A', 1),
(777, 1, 10, 'CH10_A', 1),
(778, 1, 11, 'CH11_A', 1),
(779, 1, 12, 'CH12_A', 1),
(780, 1, 1, 'CH1_A', 1),
(781, 1, 2, 'CH2_A', 1),
(782, 1, 9, 'CH9_A', 1),
(783, 1, 10, 'CH10_A', 1),
(784, 1, 11, 'CH11_A', 1),
(785, 1, 12, 'CH12_A', 1),
(786, 1, 3, 'CH3_A', 1),
(787, 1, 4, 'CH4_A', 1),
(788, 1, 5, 'CH5_A', 1),
(789, 1, 6, 'CH6_A', 1),
(790, 1, 7, 'CH7_A', 1),
(791, 1, 8, 'CH8_A', 1),
(792, 1, 1, 'CH1_A', 1),
(793, 1, 2, 'CH2_A', 1),
(794, 1, 3, 'CH3_A', 1),
(795, 1, 4, 'CH4_A', 1),
(796, 1, 5, 'CH5_A', 1),
(797, 1, 6, 'CH6_A', 1),
(798, 1, 7, 'CH7_A', 1),
(799, 1, 8, 'CH8_A', 1),
(800, 1, 9, 'CH9_A', 1),
(801, 1, 10, 'CH10_A', 1),
(802, 1, 11, 'CH11_A', 1),
(803, 1, 12, 'CH12_A', 1),
(804, 2, 1, 'CH1_A', 1),
(805, 2, 2, 'CH2_A', 1),
(806, 2, 3, 'CH3_A', 1),
(807, 2, 4, 'CH4_A', 1),
(808, 2, 5, 'CH5_A', 1),
(809, 2, 6, 'CH6_A', 1),
(810, 2, 7, 'CH7_A', 1),
(811, 2, 8, 'CH8_A', 1),
(812, 2, 9, 'CH9_A', 1),
(813, 2, 10, 'CH10_A', 1),
(814, 2, 11, 'CH11_A', 1),
(815, 2, 12, 'CH12_A', 1),
(816, 3, 1, 'CH1_D', 4),
(817, 3, 7, 'CH7_D', 4),
(818, 3, 2, 'CH2_A', 1),
(819, 3, 3, 'CH3_A', 1),
(820, 3, 4, 'CH4_C', 3),
(821, 3, 5, 'CH5_B', 2),
(822, 3, 8, 'CH8_C', 3),
(823, 3, 9, 'CH9_A', 1),
(824, 3, 10, 'CH10_C', 3),
(825, 3, 11, 'CH11_D', 4),
(826, 3, 12, 'CH12_D', 4),
(827, 3, 6, 'CH6_D', 4),
(828, 3, 1, 'CH1_D', 4),
(829, 3, 2, 'CH2_A', 1),
(830, 3, 8, 'CH8_C', 3),
(831, 3, 9, 'CH9_A', 1),
(832, 3, 10, 'CH10_C', 3),
(833, 3, 11, 'CH11_D', 4),
(834, 3, 12, 'CH12_D', 4),
(835, 3, 3, 'CH3_A', 1),
(836, 3, 4, 'CH4_C', 3),
(837, 3, 5, 'CH5_B', 2),
(838, 3, 6, 'CH6_D', 4),
(839, 3, 7, 'CH7_D', 4),
(840, 3, 1, 'CH1_D', 4),
(841, 3, 2, 'CH2_A', 1),
(842, 3, 3, 'CH3_A', 1),
(843, 3, 4, 'CH4_C', 3),
(844, 3, 5, 'CH5_B', 2),
(845, 3, 6, 'CH6_D', 4),
(846, 3, 7, 'CH7_D', 4),
(847, 3, 8, 'CH8_C', 3),
(848, 3, 9, 'CH9_A', 1),
(849, 3, 10, 'CH10_C', 3),
(850, 3, 11, 'CH11_D', 4),
(851, 3, 12, 'CH12_D', 4),
(852, 4, 1, 'CH1_A', 1),
(853, 4, 11, 'CH11_D', 4),
(854, 4, 2, 'CH2_C', 3),
(855, 4, 4, 'CH4_C', 3),
(856, 4, 3, 'CH3_A', 1),
(857, 4, 12, 'CH12_C', 3),
(858, 4, 5, 'CH5_A', 1),
(859, 4, 6, 'CH6_B', 2),
(860, 4, 7, 'CH7_B', 2),
(861, 4, 8, 'CH8_D', 4),
(862, 4, 9, 'CH9_A', 1),
(863, 4, 10, 'CH10_D', 4),
(864, 5, 1, 'CH1_A', 1),
(865, 5, 6, 'CH6_B', 2),
(866, 5, 7, 'CH7_C', 3),
(867, 5, 8, 'CH8_D', 4),
(868, 5, 2, 'CH2_B', 2),
(869, 5, 9, 'CH9_A', 1),
(870, 5, 3, 'CH3_C', 3),
(871, 5, 10, 'CH10_B', 2),
(872, 5, 11, 'CH11_C', 3),
(873, 5, 12, 'CH12_B', 2),
(874, 5, 4, 'CH4_D', 4),
(875, 5, 5, 'CH5_B', 2),
(876, 5, 1, 'CH1_A', 1),
(877, 5, 2, 'CH2_B', 2),
(878, 5, 3, 'CH3_C', 3),
(879, 5, 4, 'CH4_D', 4),
(880, 5, 5, 'CH5_B', 2),
(881, 5, 6, 'CH6_B', 2),
(882, 5, 7, 'CH7_C', 3),
(883, 5, 8, 'CH8_D', 4),
(884, 5, 9, 'CH9_A', 1),
(885, 5, 10, 'CH10_B', 2),
(886, 5, 11, 'CH11_C', 3),
(887, 5, 12, 'CH12_B', 2),
(888, 7, 2, 'CH2_B', 2),
(889, 7, 8, 'CH8_A', 1),
(890, 7, 1, 'CH1_B', 2),
(891, 7, 9, 'CH9_C', 3),
(892, 7, 10, 'CH10_D', 4),
(893, 7, 11, 'CH11_A', 1),
(894, 7, 12, 'CH12_C', 3),
(895, 7, 3, 'CH3_C', 3),
(896, 7, 4, 'CH4_D', 4),
(897, 7, 5, 'CH5_C', 3),
(898, 7, 6, 'CH6_C', 3),
(899, 7, 7, 'CH7_B', 2),
(900, 7, 2, 'CH2_B', 2),
(901, 7, 4, 'CH4_D', 4),
(902, 7, 5, 'CH5_C', 3),
(903, 7, 1, 'CH1_B', 2),
(904, 7, 6, 'CH6_C', 3),
(905, 7, 3, 'CH3_C', 3),
(906, 7, 7, 'CH7_B', 2),
(907, 7, 8, 'CH8_A', 1),
(908, 7, 9, 'CH9_C', 3),
(909, 7, 10, 'CH10_D', 4),
(910, 7, 11, 'CH11_A', 1),
(911, 7, 12, 'CH12_C', 3),
(912, 8, 1, 'CH1_A', 1),
(913, 8, 2, 'CH2_A', 1),
(914, 8, 8, 'CH8_A', 1),
(915, 8, 11, 'CH11_A', 1),
(916, 8, 3, 'CH3_A', 1),
(917, 8, 10, 'CH10_A', 1),
(918, 8, 9, 'CH9_D', 4),
(919, 8, 4, 'CH4_A', 1),
(920, 8, 5, 'CH5_A', 1),
(921, 8, 6, 'CH6_D', 4),
(922, 8, 12, 'CH12_D', 4),
(923, 8, 7, 'CH7_B', 2),
(924, 8, 1, 'CH1_A', 1),
(925, 8, 2, 'CH2_A', 1),
(926, 8, 3, 'CH3_A', 1),
(927, 8, 4, 'CH4_A', 1),
(928, 8, 5, 'CH5_A', 1),
(929, 8, 6, 'CH6_D', 4),
(930, 8, 7, 'CH7_B', 2),
(931, 8, 8, 'CH8_A', 1),
(932, 8, 11, 'CH11_A', 1),
(933, 8, 10, 'CH10_A', 1),
(934, 8, 9, 'CH9_D', 4),
(935, 8, 12, 'CH12_D', 4),
(936, 9, 2, 'CH2_A', 1),
(937, 9, 3, 'CH3_B', 2),
(938, 9, 1, 'CH1_A', 1),
(939, 9, 4, 'CH4_A', 1),
(940, 9, 5, 'CH5_A', 1),
(941, 9, 6, 'CH6_A', 1),
(942, 9, 7, 'CH7_C', 3),
(943, 9, 8, 'CH8_A', 1),
(944, 9, 9, 'CH9_B', 2),
(945, 9, 10, 'CH10_C', 3),
(946, 9, 11, 'CH11_C', 3),
(947, 9, 12, 'CH12_D', 4),
(948, 9, 2, 'CH2_A', 1),
(949, 9, 3, 'CH3_B', 2),
(950, 9, 7, 'CH7_C', 3),
(951, 9, 8, 'CH8_A', 1),
(952, 9, 9, 'CH9_B', 2),
(953, 9, 10, 'CH10_C', 3),
(954, 9, 11, 'CH11_C', 3),
(955, 9, 12, 'CH12_D', 4),
(956, 9, 1, 'CH1_A', 1),
(957, 9, 4, 'CH4_A', 1),
(958, 9, 5, 'CH5_A', 1),
(959, 9, 6, 'CH6_A', 1),
(960, 10, 1, 'CH1_D', 4),
(961, 10, 2, 'CH2_D', 4),
(962, 10, 7, 'CH7_A', 1),
(963, 10, 3, 'CH3_D', 4),
(964, 10, 8, 'CH8_A', 1),
(965, 10, 9, 'CH9_A', 1),
(966, 10, 10, 'CH10_C', 3),
(967, 10, 4, 'CH4_D', 4),
(968, 10, 11, 'CH11_B', 2),
(969, 10, 5, 'CH5_D', 4),
(970, 10, 12, 'CH12_C', 3),
(971, 10, 6, 'CH6_A', 1),
(972, 12, 1, 'CH1_A', 1),
(973, 12, 10, 'CH10_B', 2),
(974, 12, 2, 'CH2_D', 4),
(975, 12, 11, 'CH11_C', 3),
(976, 12, 12, 'CH12_C', 3),
(977, 12, 3, 'CH3_B', 2),
(978, 12, 4, 'CH4_A', 1),
(979, 12, 5, 'CH5_C', 3),
(980, 12, 6, 'CH6_B', 2),
(981, 12, 7, 'CH7_D', 4),
(982, 12, 8, 'CH8_A', 1),
(983, 12, 9, 'CH9_A', 1),
(984, 13, 4, 'CH4_C', 3),
(985, 13, 1, 'CH1_B', 2),
(986, 13, 5, 'CH5_D', 4),
(987, 13, 6, 'CH6_D', 4),
(988, 13, 3, 'CH3_D', 4),
(989, 13, 2, 'CH2_A', 1),
(990, 13, 7, 'CH7_D', 4),
(991, 13, 8, 'CH8_D', 4),
(992, 13, 9, 'CH9_C', 3),
(993, 13, 10, 'CH10_D', 4),
(994, 13, 11, 'CH11_A', 1),
(995, 13, 12, 'CH12_B', 2),
(996, 15, 2, 'CH2_C', 3),
(997, 15, 1, 'CH1_B', 2),
(998, 15, 3, 'CH3_B', 2),
(999, 15, 8, 'CH8_C', 3),
(1000, 15, 10, 'CH10_C', 3),
(1001, 15, 9, 'CH9_C', 3),
(1002, 15, 4, 'CH4_D', 4),
(1003, 15, 5, 'CH5_B', 2),
(1004, 15, 11, 'CH11_B', 2),
(1005, 15, 6, 'CH6_B', 2),
(1006, 15, 12, 'CH12_A', 1),
(1007, 15, 7, 'CH7_C', 3),
(1008, 16, 1, 'CH1_B', 2),
(1009, 16, 10, 'CH10_B', 2),
(1010, 16, 2, 'CH2_A', 1),
(1011, 16, 3, 'CH3_B', 2),
(1012, 16, 12, 'CH12_D', 4),
(1013, 16, 11, 'CH11_D', 4),
(1014, 16, 4, 'CH4_D', 4),
(1015, 16, 5, 'CH5_C', 3),
(1016, 16, 6, 'CH6_A', 1),
(1017, 16, 8, 'CH8_C', 3),
(1018, 16, 7, 'CH7_C', 3),
(1019, 16, 9, 'CH9_C', 3),
(1020, 17, 2, 'CH2_A', 1),
(1021, 17, 3, 'CH3_C', 3),
(1022, 17, 1, 'CH1_C', 3),
(1023, 17, 4, 'CH4_B', 2),
(1024, 17, 5, 'CH5_D', 4),
(1025, 17, 6, 'CH6_D', 4),
(1026, 17, 8, 'CH8_A', 1),
(1027, 17, 7, 'CH7_D', 4),
(1028, 17, 9, 'CH9_A', 1),
(1029, 17, 10, 'CH10_D', 4),
(1030, 17, 11, 'CH11_D', 4),
(1031, 17, 12, 'CH12_B', 2),
(1032, 19, 1, 'CH1_C', 3),
(1033, 19, 8, 'CH8_D', 4),
(1034, 19, 9, 'CH9_B', 2),
(1035, 19, 10, 'CH10_B', 2),
(1036, 19, 2, 'CH2_B', 2),
(1037, 19, 3, 'CH3_A', 1),
(1038, 19, 4, 'CH4_B', 2),
(1039, 19, 11, 'CH11_D', 4),
(1040, 19, 5, 'CH5_D', 4),
(1041, 19, 12, 'CH12_D', 4),
(1042, 19, 6, 'CH6_C', 3),
(1043, 19, 7, 'CH7_A', 1);

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
(1, 'SVY_01', '2023-05-01 10:55:20', 4),
(2, 'SVY_01', '2023-05-01 11:00:24', 0),
(3, 'SVY_01', '2023-05-01 11:04:00', 0),
(4, 'SVY_01', '2023-05-01 11:05:32', 0),
(5, 'SVY_01', '2023-05-01 11:09:14', 0),
(6, 'SVY_01', '2023-05-01 11:11:10', 0),
(7, 'SVY_01', '2023-05-01 11:11:33', 0),
(8, 'SVY_01', '2023-05-01 11:32:26', 4),
(9, 'SVY_01', '2023-05-01 11:38:41', 0),
(10, 'SVY_01', '2023-05-01 11:54:54', 0),
(11, 'SVY_01', '2023-05-01 12:03:26', 0),
(12, 'SVY_01', '2023-05-01 12:08:07', 0),
(13, 'SVY_01', '2023-05-01 12:13:22', 4),
(14, 'SVY_01', '2023-05-01 12:43:12', 0),
(15, 'SVY_01', '2023-05-02 05:23:59', 0),
(16, 'SVY_01', '2023-05-02 05:54:48', 4),
(17, 'SVY_01', '2023-05-02 14:53:49', 0),
(18, 'SVY_01', '2023-05-02 15:05:53', 0),
(19, 'SVY_01', '2023-05-02 15:06:46', 0);

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
(1, 1, 12, 'PER_1'),
(2, 3, 34, 'PER_3'),
(4, 5, 29, 'PER_3'),
(5, 7, 31, 'PER_3'),
(6, 8, 22, 'PER_2'),
(7, 9, 23, 'PER_2'),
(8, 10, 32, 'PER_3'),
(9, 12, 27, 'PER_3'),
(10, 13, 36, 'PER_3'),
(11, 15, 30, 'PER_3'),
(12, 16, 32, 'PER_3'),
(13, 17, 33, 'PER_3'),
(14, 19, 32, 'PER_3');

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
-- Stand-in structure for view `view_or_do`
-- (See below for the actual view)
--
CREATE TABLE `view_or_do` (
`Response_ID` int(15)
,`Done_Survey` varchar(4)
);

-- --------------------------------------------------------

--
-- Structure for view `num_personal`
--
DROP TABLE IF EXISTS `num_personal`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `num_personal`  AS SELECT `response_result`.`Personal_Name` AS `Personal_Name`, count(0) AS `Number` FROM `response_result` GROUP BY `response_result`.`Personal_Name` ;

-- --------------------------------------------------------

--
-- Structure for view `num_response`
--
DROP TABLE IF EXISTS `num_response`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `num_response`  AS SELECT `view_or_do`.`Done_Survey` AS `Done_Survey`, count(0) AS `number` FROM `view_or_do` GROUP BY `view_or_do`.`Done_Survey` ;

-- --------------------------------------------------------

--
-- Structure for view `response_result`
--
DROP TABLE IF EXISTS `response_result`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `response_result`  AS SELECT `result`.`Response_ID` AS `Response_ID`, `result`.`resultScore` AS `resultScore`, `personal`.`Personal_Name` AS `Personal_Name` FROM (`result` join `personal` on(`result`.`Personal_ID` = `personal`.`Personal_ID`)) ;

-- --------------------------------------------------------

--
-- Structure for view `view_or_do`
--
DROP TABLE IF EXISTS `view_or_do`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_or_do`  AS SELECT `response`.`Response_ID` AS `Response_ID`, CASE WHEN `result`.`Response_ID` is not null THEN 'done' ELSE 'view' END AS `Done_Survey` FROM (`response` left join `result` on(`response`.`Response_ID` = `result`.`Response_ID`)) ;

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
  MODIFY `Score_ID` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1044;

--
-- AUTO_INCREMENT for table `response`
--
ALTER TABLE `response`
  MODIFY `Response_ID` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `result`
--
ALTER TABLE `result`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

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
