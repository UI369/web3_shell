import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { FaBeer } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DAO Masons</title>
        <meta
          content="Bespoke Web3 DAO governance mechanisms inspired by game design"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 40 40"
        display="none"
        width="0"
        height="0"
      >
        <symbol id="icon-twitter" viewBox="0 0 40 40">
          <path d="M36.3,10.2c-1,1.3-2.1,2.5-3.4,3.5c0,0.2,0,0.4,0,1c0,1.7-0.2,3.6-0.9,5.3c-0.6,1.7-1.2,3.5-2.4,5.1 c-1.1,1.5-2.3,3.1-3.7,4.3c-1.4,1.2-3.3,2.3-5.3,3c-2.1,0.8-4.2,1.2-6.6,1.2c-3.6,0-7-1-10.2-3c0.4,0,1.1,0.1,1.5,0.1 c3.1,0,5.9-1,8.2-2.9c-1.4,0-2.7-0.4-3.8-1.3c-1.2-1-1.9-2-2.2-3.3c0.4,0.1,1,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-1.4-0.3-2.7-1.1-3.7-2.3s-1.4-2.6-1.4-4.2v-0.1c1,0.6,2,0.9,3,0.9c-1-0.6-1.5-1.3-2.2-2.4c-0.6-1-0.9-2.1-0.9-3.3s0.3-2.3,1-3.4 c1.5,2.1,3.6,3.6,6,4.9s4.9,2,7.6,2.1c-0.1-0.6-0.1-1.1-0.1-1.4c0-1.8,0.8-3.5,2-4.7c1.2-1.2,2.9-2,4.7-2c2,0,3.6,0.8,4.8,2.1 c1.4-0.3,2.9-0.9,4.2-1.5c-0.4,1.5-1.4,2.7-2.9,3.6C33.8,11.2,35.1,10.9,36.3,10.2L36.3,10.2z"></path>
        </symbol>
        <symbol id="icon-discord" viewBox="0 0 40 40">
          <path d="M33.2,8.3c-2.5-1.1-5.1-1.9-7.9-2.4c-0.3,0.6-0.7,1.4-1,2c-2.9-0.4-5.8-0.4-8.7,0c-0.3-0.6-0.7-1.4-1-2 c-2.8,0.5-5.4,1.3-7.9,2.4c-5,7.2-6.3,14.2-5.6,21.1c3.3,2.3,6.5,3.8,9.6,4.7c0.8-1,1.5-2.1,2.1-3.3c-1.1-0.4-2.2-0.9-3.2-1.5 c0.3-0.2,0.5-0.4,0.8-0.6c6.3,2.8,13,2.8,19.2,0c0.3,0.2,0.5,0.4,0.8,0.6c-1,0.6-2.1,1.1-3.2,1.5c0.6,1.1,1.3,2.2,2.1,3.3 c3.1-0.9,6.3-2.4,9.6-4.7C39.7,21.4,37.5,14.4,33.2,8.3z M13.7,25.1c-1.9,0-3.4-1.7-3.4-3.7s1.5-3.7,3.4-3.7c1.9,0,3.5,1.7,3.4,3.7 C17.1,23.4,15.6,25.1,13.7,25.1z M26.3,25.1c-1.9,0-3.4-1.7-3.4-3.7s1.5-3.7,3.4-3.7c1.9,0,3.5,1.7,3.4,3.7 C29.7,23.4,28.2,25.1,26.3,25.1z"></path>
        </symbol>
        <symbol id="icon-github" viewBox="0 0 40 40">
          <path d="M36,20.3c0,3.5-1,6.6-3.1,9.4c-2,2.8-4.7,4.7-7.9,5.8c-0.4,0.1-0.6,0-0.8-0.1c-0.2-0.2-0.3-0.4-0.3-0.6v-4.4 c0-1.3-0.4-2.3-1.1-3c0.8-0.1,1.5-0.2,2.1-0.4c0.6-0.2,1.3-0.4,2-0.8c0.7-0.4,1.2-0.8,1.7-1.4c0.5-0.5,0.8-1.3,1.1-2.2 s0.4-2,0.4-3.1c0-1.7-0.5-3.1-1.6-4.3c0.5-1.3,0.5-2.7-0.2-4.2c-0.4-0.1-1,0-1.7,0.2c-0.7,0.3-1.4,0.6-1.9,0.9L24,12.5 c-1.3-0.4-2.6-0.5-4-0.5s-2.7,0.2-4,0.5c-0.2-0.2-0.5-0.3-0.9-0.6c-0.4-0.2-0.9-0.5-1.7-0.8c-0.8-0.3-1.4-0.4-1.8-0.3 c-0.6,1.6-0.7,3-0.1,4.2c-1.1,1.2-1.6,2.6-1.6,4.3c0,1.2,0.1,2.2,0.4,3.1s0.6,1.6,1.1,2.2s1,1,1.7,1.4c0.7,0.4,1.3,0.6,2,0.8 c0.6,0.2,1.3,0.3,2.1,0.4c-0.6,0.5-0.9,1.2-1,2.1c-0.3,0.1-0.6,0.2-0.9,0.3c-0.3,0.1-0.7,0.1-1.2,0.1c-0.5,0-0.9-0.1-1.4-0.4 c-0.5-0.3-0.8-0.7-1.2-1.3c-0.3-0.4-0.6-0.8-1-1.1c-0.4-0.3-0.8-0.4-1-0.5L9,26.5c-0.3,0-0.5,0-0.6,0.1c-0.1,0.1-0.1,0.1-0.1,0.2 c0,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.2l0.1,0.1c0.3,0.1,0.6,0.4,0.9,0.8s0.5,0.7,0.7,1.1l0.2,0.5c0.2,0.5,0.5,1,0.9,1.3 c0.4,0.3,0.9,0.5,1.4,0.6c0.5,0.1,1,0.1,1.4,0.1c0.5,0,0.9,0,1.2-0.1l0.5-0.1c0,0.5,0,1.1,0,1.9c0,0.7,0,1.1,0,1.1 c0,0.2-0.1,0.5-0.3,0.6c-0.2,0.2-0.5,0.2-0.8,0.1c-3.2-1.1-5.8-3-7.9-5.8S4,23.8,4,20.3c0-2.9,0.7-5.6,2.1-8S9.5,7.8,12,6.4 s5.1-2.1,8-2.1s5.6,0.7,8,2.1s4.4,3.4,5.8,5.8S36,17.4,36,20.3L36,20.3z"></path>
        </symbol>
        <symbol id="icon-hex" viewBox="0 0 40 40">
          <path d="M4.9,11.7v17.5L20,37.9l15.2-8.8V11.7L20,2.9L4.9,11.7z"></path>
        </symbol>
        <symbol id="icon-telegram" viewBox="0 0 40 40">
          <path d="M34,9.6l-4.9,22.9c-0.3,1.6-1.3,2-2.7,1.2L19,28.3l-3.6,3.5c-0.3,0.4-0.7,0.8-1.5,0.8l0.4-7.6l0,0l-0.1,0 l13.9-12.4c0.7-0.6-0.1-0.8-0.9-0.3L10.2,22.9l-7.4-2.3c-1.7-0.4-1.7-1.6,0.3-2.3l28.8-11C33.2,6.7,34.5,7.6,34,9.6z"></path>
        </symbol>
      </svg>

      <main className={styles.main}>
        <Image
          src="/images/daomasons_logo_830X830.png"
          width="511"
          height="864"
          alt="Image"
          className={styles.image}
          layout="responsive"
          style={{ maxWidth: "300px" }}
        />
        <p
          className={styles.description}
          style={{ marginTop: ".5rem", textAlign: "center", lineHeight: "2" }}
          dangerouslySetInnerHTML={{
            __html: `Bespoke Web3 solutions. 
             <span style={{ marginLeft: "1.1rem" }}>Inspired&nbsp;by&nbsp;game&nbsp;design.</span>`,
          }}
        />

        <div className={styles.grid}>
          <a
            className={styles.card}
            href="https://buvld99oreh.typeform.com/to/QAzLnvZJ"
            target="_blank"
          >
            <h2>
              Get Started <span style={{ color: "#0d56ff" }}>&rarr;</span>
            </h2>
            <p>How can we help?</p>
          </a>

          <a
            className={styles.card}
            href="https://daomasons-docs.vercel.app/Intro/about"
            target="_blank"
          >
            <h2>Governance Docs &rarr;</h2>
            <p>Learn how we work</p>
          </a>
        </div>
        <div className={styles.iconContainer}>
          <a
            href="https://discord.gg/FydbKxFnyU"
            target="_blank"
            aria-label="Discord"
            className={styles.icon}
          >
            <svg className={styles.svgContainer}>
              <use xlinkHref="#icon-discord"></use>
            </svg>
          </a>
          <a
            href="https://twitter.com/daomasons"
            target="_blank"
            aria-label="Twitter"
            className={styles.icon}
          >
            <svg className={styles.svgContainer}>
              <use xlinkHref="#icon-twitter"></use>
            </svg>
          </a>
          <a
            href="https://github.com/daomasons"
            target="_blank"
            aria-label="Twitter"
            className={styles.icon}
          >
            <svg className={styles.svgContainer}>
              <use xlinkHref="#icon-github"></use>
            </svg>
          </a>
          <a
            href="https://t.me/daomasons"
            target="_blank"
            aria-label="Telegram"
            className={styles.icon}
          >
            <svg className={styles.svgContainer}>
              <use xlinkHref="#icon-telegram"></use>
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
