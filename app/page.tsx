import Head from 'next/head';
import styles from './styles/Home.module.css';
import { FaYoutube, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Head>
        <title>JS Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className={styles.header}>
        <a href="#my-content" className={styles.navText}>
          <span>Content</span>
        </a>
        <img src="/logo.png" alt="JS Studios Logo" className={styles.logo} />
        <a href="#contact-footer" className={styles.navText}>
          <span>Contact</span>
        </a>
      </header>



      <div className={styles.videoContainer}>
        <video controls autoPlay muted width="100%" height="auto" title="JS Studios Intro">
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>



      <section id="my-content" className={styles.about}>
        <h2>My Content</h2>
        
        {/* Video Grid */}
        <div className={styles.videoGrid}>
          <iframe src="https://www.youtube.com/embed/JUyCFlw2ah4" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/ZKQknYo079Q" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/Q5tKhx4FMiU" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/yxIP169sdpk" allowFullScreen></iframe>
        </div>

        {/* Paragraph */}
        <p>
        Looking back at my content, I unlock cherished memories that bring me a sense of happiness. 
        My goal with brands I collaborate with is to help create that same emotional connection—to design experiences that make consumers feel something positive. 
        By creating a vibe that resonates deeply with people, the brand becomes more than just a logo or product. 
        It becomes a source of positive memories.
        </p>
      </section>

      <section id="my-services" className={styles.about}>
        <h2>My Services</h2>
        {/* Paragraph */}
        <p>
        I provide high-quality content creation, cinematography, 
        and editing, along with expert social media management, 
        including strategic post scheduling and audience engagement.
        </p>
      </section>

      <footer id="contact-footer" className={styles.footer}>
        <div className={styles.contactInfo}>
          <p>jsstudiosproduction@gmail.com</p>
          <p>949-527-2486</p>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://www.instagram.com/satchel.vlgs/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.icon} />
          </a>
          <a href="https://www.youtube.com/@SW22343" target="_blank" rel="noopener noreferrer">
            <FaYoutube className={styles.icon} />
          </a>
        </div>
      </footer>


    </div>
  );
}
