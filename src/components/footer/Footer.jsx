import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="blog" width={50} height={50} />
          <h1 className={styles.logoText}>MK - Blog</h1>
        </div>
        <p className={styles.desc}>
        The blog invites readers to explore the innovative realm of Quantum Web Development, where quantum principles are harnessed to push the boundaries of traditional computing. It promises insights into superpositioned layouts and entangled user experiences, suggesting a transformative shift in the perception and interaction with the digital world. The language used emphasizes a revolutionary leap into a new era of web development, inviting readers to anticipate a quantum wave of possibilities. 🚀🌐
        </p>
        
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
