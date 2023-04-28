-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 28, 2023 at 03:14 PM
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
('CH1_A', 'ต้องการได้รับประทานอาหารท้องถิ่นที่ชื่นชอบ', 1, 1),
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
('PER_1', 'Big', 'กินอร่อย นอนอุ่นแบบ ', 'image_personal1.png', 12, ''),
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
(1, 2, 1, 'CH1_C', 3),
(2, 2, 2, 'CH2_C', 3),
(3, 2, 5, 'CH5_B', 2),
(4, 2, 6, 'CH6_B', 2),
(5, 2, 3, 'CH3_B', 2),
(6, 2, 4, 'CH4_A', 1),
(7, 2, 7, 'CH7_B', 2),
(8, 2, 8, 'CH8_D', 4),
(9, 2, 9, 'CH9_D', 4),
(10, 2, 10, 'CH10_B', 2),
(11, 2, 11, 'CH11_A', 1),
(12, 2, 12, 'CH12_B', 2),
(13, 7, 1, 'CH1_A', 1),
(14, 7, 2, 'CH2_B', 2),
(15, 7, 3, 'CH3_B', 2),
(16, 7, 4, 'CH4_B', 2),
(17, 7, 5, 'CH5_B', 2),
(18, 7, 6, 'CH6_B', 2),
(19, 7, 7, 'CH7_B', 2),
(20, 7, 8, 'CH8_B', 2),
(21, 7, 9, 'CH9_C', 3),
(22, 7, 11, 'CH11_B', 2),
(23, 7, 12, 'CH12_C', 3);

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
(1, 'SVY_01', '2023-04-28 07:39:26', 0),
(2, 'SVY_01', '2023-04-28 07:41:24', 3),
(3, 'SVY_01', '2023-04-28 08:43:24', 0),
(4, 'SVY_01', '2023-04-28 08:45:08', 0),
(5, 'SVY_01', '2023-04-28 08:47:08', 0),
(6, 'SVY_01', '2023-04-28 08:47:39', 0),
(7, 'SVY_01', '2023-04-28 08:59:51', 4);

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
(1, 2, 28, 'PER_1'),
(2, 7, 23, 'PER_1');

-- --------------------------------------------------------

--
-- Table structure for table `survey`
--

CREATE TABLE `survey` (
  `Survey_ID` varchar(10) COLLATE utf8_unicode_ci NOT NULL COMMENT 'รหัสแบบสอบถาม',
  `Survey_Name` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT 'ชื่อแบบสอบถาม'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `survey`
--

INSERT INTO `survey` (`Survey_ID`, `Survey_Name`) VALUES
('SVY_01', 'คุณเป็นนักเที่ยวแบบไหนกันน้า');

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
  MODIFY `Score_ID` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `response`
--
ALTER TABLE `response`
  MODIFY `Response_ID` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `result`
--
ALTER TABLE `result`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
