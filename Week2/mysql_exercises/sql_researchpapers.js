const sqlCreateTableResearchPapers = `CREATE TABLE IF NOT EXISTS research_papers (
  paper_id INT PRIMARY KEY,
  paper_title VARCHAR(255),
  conference VARCHAR(255),
  publish_date DATE,
  notes TEXT
  );`;

const sqlInsertResearchPapers = `INSERT INTO research_papers (paper_id, paper_title, conference, publish_date)
  VALUES
    (1, 'Exploring the Impact of Machine Learning Algorithms', 'International Conference on Artificial Intelligence', '2022-01-01'),
    (2, 'Advances in Natural Language Processing', 'Annual Conference on Language and Linguistics', '2022-02-01'),
    (3, 'Deep Learning Techniques for Image Recognition', 'International Conference on Computer Vision', '2022-03-01'),
    (4, 'Big Data Analytics for Business Intelligence', 'International Symposium on Data Science', '2022-04-01'),
    (5, 'Cybersecurity Measures in Cloud Computing', 'International Conference on Information Security', '2022-05-01'),
    (6, 'Smart Cities: The Future of Urban Development', 'International Conference on Urban Planning and Architecture', '2022-06-01'),
    (7, 'Robotic Systems for Industrial Automation', 'International Conference on Robotics and Automation', '2022-07-01'),
    (8, 'Blockchain Technology and its Applications', 'International Symposium on Cryptography and Blockchain', '2022-08-01'),
    (9, 'Enhancing User Experience in Mobile Applications', 'International Conference on Human-Computer Interaction', '2022-09-01'),
    (10, 'Emerging Trends in Data Science', 'Annual Conference on Data Engineering', '2022-10-01'),
    (11, 'Internet of Things: Connecting the World', 'International Conference on IoT Technologies', '2022-11-01'),
    (12, 'Cloud Computing: Architectures and Challenges', 'International Conference on Cloud Computing', '2022-12-01'),
    (13, 'Artificial Intelligence in Healthcare', 'International Conference on Medical Informatics', '2023-01-01'),
    (14, 'Advancements in Natural Language Processing', 'Annual Conference on Language and Linguistics', '2023-02-01'),
    (15, 'Machine Learning Applications in Finance', 'International Conference on Financial Technology', '2023-03-01'),
    (16, 'Data Privacy and Security in the Digital Age', 'International Symposium on Privacy and Security', '2023-04-01'),
    (17, 'Autonomous Vehicles: Towards a Driverless Future', 'International Conference on Autonomous Systems', '2023-05-01'),
    (18, 'Social Media Analytics for Business Insights', 'International Conference on Social Computing', '2023-06-01'),
    (19, 'Internet Security and Threat Mitigation', 'International Symposium on Cybersecurity', '2023-07-01'),
    (20, 'Machine Learning Algorithms for Predictive Analytics', 'International Conference on Machine Learning', '2023-08-01'),
    (21, 'Natural Language Processing in Chatbots', 'Annual Conference on Natural Language Processing', '2023-09-01'),
    (22, 'Advancements in Computer Vision Technologies', 'International Conference on Computer Vision', '2023-10-01'),
    (23, 'Data Mining Techniques for Knowledge Discovery', 'International Symposium on Data Mining', '2023-11-01'),
    (24, 'Artificial Intelligence in Business Applications', 'Annual Conference on AI in Business', '2023-12-01'),
    (25, 'Cybersecurity Challenges in the Internet of Things', 'International Conference on IoT Security', '2024-01-01'),
    (26, 'Smart Grid Systems for Sustainable Energy', 'International Conference on Energy Systems', '2024-02-01'),
    (27, 'Humanoid Robots: Advancements and Applications', 'International Conference on Robotics', '2024-03-01'),
    (28, 'Cryptocurrency and Decentralized Finance', 'International Symposium on Blockchain', '2024-04-01'),
    (29, 'User-Centric Design in Mobile Interfaces', 'Annual Conference on Human-Computer Interaction', '2024-05-01'),
    (30, 'Big Data Analytics in Healthcare', 'International Conference on Medical Informatics', '2024-06-01');
  `;

// const sqlCreateTableResearchPapers2 = `CREATE TABLE IF NOT EXISTS research_papers (
//     paper_id INT PRIMARY KEY,
//     paper_title VARCHAR(255),
//     conference VARCHAR(255),
//     publish_date DATE,
//     author_id INT,
//     CONSTRAINT fk_author FOREIGN KEY (author_id) REFERENCES authors(author_id)
//     );`;

// const sqlAddColumnToResearchPapers = `ALTER TABLE research_Papers
//     ADD COLUMN author_id INT,
//     ADD CONSTRAINT fk_author
//     FOREIGN KEY (author_id) REFERENCES authors(author_id);`;

// const sqlInsertResearchPapers = `INSERT INTO research_papers (paper_id, paper_title, conference, publish_date, author_id)
// VALUES
//   (1, 'Exploring the Impact of Machine Learning Algorithms', 'International Conference on Artificial Intelligence', '2022-01-01', 1),
//   (2, 'Advances in Natural Language Processing', 'Annual Conference on Language and Linguistics', '2022-02-01', 2),
//   (3, 'Deep Learning Techniques for Image Recognition', 'International Conference on Computer Vision', '2022-03-01', 3),
//   (4, 'Big Data Analytics for Business Intelligence', 'International Symposium on Data Science', '2022-04-01', 4),
//   (5, 'Cybersecurity Measures in Cloud Computing', 'International Conference on Information Security', '2022-05-01', 5),
//   (6, 'Smart Cities: The Future of Urban Development', 'International Conference on Urban Planning and Architecture', '2022-06-01', 6),
//   (7, 'Robotic Systems for Industrial Automation', 'International Conference on Robotics and Automation', '2022-07-01', 7),
//   (8, 'Blockchain Technology and its Applications', 'International Symposium on Cryptography and Blockchain', '2022-08-01', 8),
//   (9, 'Enhancing User Experience in Mobile Applications', 'International Conference on Human-Computer Interaction', '2022-09-01', 9),
//   (10, 'Emerging Trends in Data Science', 'Annual Conference on Data Engineering', '2022-10-01', 10),
//   (11, 'Internet of Things: Connecting the World', 'International Conference on IoT Technologies', '2022-11-01', 11),
//   (12, 'Cloud Computing: Architectures and Challenges', 'International Conference on Cloud Computing', '2022-12-01', 12),
//   (13, 'Artificial Intelligence in Healthcare', 'International Conference on Medical Informatics', '2023-01-01', 13),
//   (14, 'Advancements in Natural Language Processing', 'Annual Conference on Language and Linguistics', '2023-02-01', 14),
//   (15, 'Machine Learning Applications in Finance', 'International Conference on Financial Technology', '2023-03-01', 15),
//   (16, 'Data Privacy and Security in the Digital Age', 'International Symposium on Privacy and Security', '2023-04-01', 16),
//   (17, 'Autonomous Vehicles: Towards a Driverless Future', 'International Conference on Autonomous Systems', '2023-05-01', 17),
//   (18, 'Social Media Analytics for Business Insights', 'International Conference on Social Computing', '2023-06-01', 18),
//   (19, 'Internet Security and Threat Mitigation', 'International Symposium on Cybersecurity', '2023-07-01', 19),
//   (20, 'Machine Learning Algorithms for Predictive Analytics', 'International Conference on Machine Learning', '2023-08-01', 20),
//   (21, 'Natural Language Processing in Chatbots', 'Annual Conference on Natural Language Processing', '2023-09-01', 1),
//   (22, 'Advancements in Computer Vision Technologies', 'International Conference on Computer Vision', '2023-10-01', 2),
//   (23, 'Data Mining Techniques for Knowledge Discovery', 'International Symposium on Data Mining', '2023-11-01', 3),
//   (24, 'Artificial Intelligence in Business Applications', 'Annual Conference on AI in Business', '2023-12-01', 4),
//   (25, 'Cybersecurity Challenges in the Internet of Things', 'International Conference on IoT Security', '2024-01-01', 5),
//   (26, 'Smart Grid Systems for Sustainable Energy', 'International Conference on Energy Systems', '2024-02-01', 6),
//   (27, 'Humanoid Robots: Advancements and Applications', 'International Conference on Robotics', '2024-03-01', 7),
//   (28, 'Cryptocurrency and Decentralized Finance', 'International Symposium on Blockchain', '2024-04-01', 8),
//   (29, 'User-Centric Design in Mobile Interfaces', 'Annual Conference on Human-Computer Interaction', '2024-05-01', 9),
//   (30, 'Big Data Analytics in Healthcare', 'International Conference on Medical Informatics', '2024-06-01', 10);
// `;

module.exports = {
   sqlCreateTableResearchPapers,
   //  sqlAddColumnToResearchPapers,
   sqlInsertResearchPapers,
};
