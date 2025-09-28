import React from "react";
import styles from "./Education.module.css";
import { FaGraduationCap } from "react-icons/fa"; // ✅ Imported React Icon

const educationData = [
  {
    year: "2021-2025",
    degree: "B.Tech (CSE)",
    institution:
      "Mangalmay Institute Of Engineering And Technology, Greater Noida U.P. 201310",
  },
  {
    year: "2020-2021",
    degree: "Intermediate",
    institution:
      "Kamla Nehru Institute Of Child And Education, Civil Lines Sultanpur U.P. 228001",
  },

  {
    year: "2018-2019",
    degree: "High School",
    institution:
      "Kamla Nehru Institute Of Child And Education, Civil Lines Sultanpur U.P. 228001",
  },
];

export const Education = () => {
  return (
    <section className={styles.education} id="education">
      <h2>Education</h2>
      <div className={styles.timeline}>
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay={50 + index * 100}
          >
            <div className={styles.content}>
              {/* ✅ Replaced <i> with React Icon */}
              <FaGraduationCap className={styles.icon} />
              <span className={styles.year}>{edu.year}</span>
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
