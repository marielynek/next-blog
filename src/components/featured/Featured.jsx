import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Marie-lyne here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image 
            src="/home.jpeg" 
            alt="" 
            width={700}
            height={500}
            lassName={styles.image} 
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Revolutionizing the Digital Landscape: Unleashing the Power of Quantum Web Development</h1>
          <p className={styles.postDesc}>
            The blog invites readers to explore the innovative realm of Quantum Web Development, where quantum principles are harnessed to push the boundaries of traditional computing. It promises insights into superpositioned layouts and entangled user experiences, suggesting a transformative shift in the perception and interaction with the digital world. The language used emphasizes a revolutionary leap into a new era of web development, inviting readers to anticipate a quantum wave of possibilities. 🚀🌐
          </p>
          {/* <button className={styles.button}>Read More</button> */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
