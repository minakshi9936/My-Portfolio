import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} >Hi, I'm Minakshi Tripathi</h1>
        <p className={styles.description} style={{ fontStyle: "italic" }}>
          A Web Developer turning ideas into sleek, responsive, and
          user-friendly websites. <br/> Reach out if you'd like to know more!
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/mt.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/6391421660"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappIcon} // Use CSS module
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>
    </section>
  );
};
