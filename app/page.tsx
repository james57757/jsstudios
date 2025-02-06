import Head from 'next/head';
import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>JS Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className={styles.header}>
        <img src="/logo.png" alt="JS Studios Logo" className={styles.logo} />
      </header>


      <div className={styles.videoContainer}>
        <video controls autoPlay muted width="100%" height="auto" title="JS Studios Intro">
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>



      <section id="about" className={styles.about}>
        <h2>About Me</h2>
        <p>
          My name is Satchel White. My hobby has always been creating videos, capturing memories of my life. 
          With that passion, I’ve chosen to create this company to help others with a similar mission. 
          The future of brand marketing and image is centered on its social media presence. 
          I believe consistent and quality content will grow your brand exponentially. 
          Contact me for more information!
        </p>
      </section>

      <section id="services" className={styles.services}>
        <h2>My Services</h2>
        <ul>
          <li>Video Production</li>
          <li>Social Media Marketing</li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <p>Contact Us: 949-527-2486 | sunshinemedia6646@gmail.com</p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> | 
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </footer>
    </div>
  );
}
