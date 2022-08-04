import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import { PropsWithChildren, useState } from "react";
import { useRouter } from "next/router";
import { FiChevronDown } from "react-icons/fi";
import { HiSelector } from "react-icons/hi";
import { BsArrowUpRight } from "react-icons/bs";

const Home: NextPage = () => {
  const [activeText, setActiveText] = useState("Trending");
  const handleClick = (text: string) => {
    setActiveText(text);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Cosmos</title>
        <meta name="description" content="Cosmos " />
        <link rel="icon" href="/images/logo.jpeg" />
      </Head>
      <nav className={styles.header}>
        <motion.div className={styles.logo}>
          <Image src={"/images/logo.jpeg"} width={100} height={100} />
        </motion.div>
        <span>Atlas Tool</span>
        <motion.ul layout animate={{}}>
          <li>
            Community <FiChevronDown />
          </li>
          <li>
            Doc <FiChevronDown />
          </li>
        </motion.ul>
      </nav>
      <motion.main className={styles.main}>
        <motion.section className={styles.gridSection}>
          <motion.div className={styles.buttonSection}>
            <ActiveButton
              text="Trending"
              active={activeText}
              onClick={handleClick}
            />
            <ActiveButton
              text="Discover"
              active={activeText}
              onClick={handleClick}
            />
          </motion.div>

          <motion.div className={styles.filter}>
            <input
              type="text"
              placeholder="Search by collection name or address..."
            />
            <span>
              {list.map((time) => {
                return (
                  <div
                    key={time}
                    style={{
                      fontSize: ".9rem",
                      textTransform: "lowercase",
                      padding: ".5rem",
                    }}
                    className={`${styles.btn} ${styles.active}`}
                  >
                    {time}
                  </div>
                );
              })}
            </span>
          </motion.div>
          <motion.div className={styles.display}>
            <div className={styles.titles}>
              {titles.map((title) => {
                return <Selctor key={title} text={title} />;
              })}
            </div>
            {data.map((props) => {
              return <DisplaySection key={props.name} {...props} />;
            })}
          </motion.div>
        </motion.section>
      </motion.main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
};

const Selctor = ({ text }: { text: string }) => {
  return (
    <motion.div className={styles.select}>
      {text} <HiSelector />
    </motion.div>
  );
};
const DisplaySection = ({
  average,
  average_percent,
  floor,
  floor_percent,
  image,
  name,
  sale,
  sale_percent,
  supply,
  volume,
  volume_percent,
}: data) => {
  return (
    <motion.div className={styles.display_section}>
      <div className={styles.first}>
        <span>
          <div className={styles.img_container}>
            <Image src={image} width={100} height={100} />
          </div>
          <div>
            <h3>{name}</h3>
            <p> Circulating Supply {supply}</p>
          </div>
        </span>
        <span>
          <div>
            <h3>{floor}</h3>
            <Percent text={floor_percent} />
          </div>
        </span>
      </div>
      <div>
        {" "}
        <h3>{sale}</h3>
        <Percent text={sale_percent} />
      </div>
      <div>
        <h3>{average}</h3>
        <Percent text={average_percent} />
      </div>
      <div>
        {" "}
        <h3>{volume}</h3>
        <Percent text={volume_percent} />
      </div>
    </motion.div>
  );
};
const Percent = ({ text }: { text: string | number }) => {
  return (
    <div className={styles.percent}>
      <BsArrowUpRight /> {text} %
    </div>
  );
};
const ActiveButton = ({
  active,
  text,
  onClick,
}: {
  active: string;
  text: string;
  onClick: (text: string) => void;
}) => {
  return (
    <motion.div
      onClick={() => onClick(text)}
      className={`${styles.btn} ${active == text ? styles.active : ""}`}
    >
      {text}
    </motion.div>
  );
};

const CustomLink = ({
  children,
  className,
  href,
}: PropsWithChildren & { className: string; href: string }) => {
  const router = useRouter();
  const route = () => {
    router.push(href);
  };
  return (
    <div onClick={route} className={className}>
      {children}
    </div>
  );
};

const data = [
  {
    name: "Stargaze Punks",
    image: "/images/punk.jpeg",
    supply: 8888,
    floor: 3600,
    floor_percent: 0.81,
    sale: 1328,
    sale_percent: 243.15,
    average: 0.021,
    average_percent: 27.73,
    volume: 27.52,
    volume_percent: 338.31,
  },
  {
    name: "Bad Kids",
    image: "/images/kids.jpeg",
    supply: 1730,
    floor: 3600,
    floor_percent: 0.81,
    sale: 1328,
    sale_percent: 243.15,
    average: 0.021,
    average_percent: 27.73,
    volume: 27.52,
    volume_percent: 338.31,
  },
  {
    name: "Stargaze Citizens",
    image: "/images/alien.jpeg",
    supply: 1449,
    floor: 3600,
    floor_percent: 0.81,
    sale: 1328,
    sale_percent: 243.15,
    average: 0.021,
    average_percent: 27.73,
    volume: 27.52,
    volume_percent: 338.31,
  },
  {
    name: "The SpaceApe Society",
    image: "/images/monkey.jpeg",
    supply: 1099,
    floor: 3600,
    floor_percent: 0.81,
    sale: 1328,
    sale_percent: 243.15,
    average: 0.021,
    average_percent: 27.73,
    volume: 27.52,
    volume_percent: 338.31,
  },
  {
    name: "Andromaverse",
    image: "/images/potatoo.jpeg",
    supply: 11900,
    floor: 3600,
    floor_percent: 0.81,
    sale: 1328,
    sale_percent: 243.15,
    average: 0.021,
    average_percent: 27.73,
    volume: 27.52,
    volume_percent: 338.31,
  },
  {
    name: "IBC Frens",
    image: "/images/drool.jpeg",
    supply: 575,
    floor: 3600,
    floor_percent: 0.81,
    sale: 1328,
    sale_percent: 243.15,
    average: 0.021,
    average_percent: 27.73,
    volume: 27.52,
    volume_percent: 338.31,
  },
  // {
  //   name: "Stargaze Punks",
  //   image: "/images/punk.jpeg",
  //   supply: 8888,
  //   floor: 3600,
  //   floor_percent: 0.81,
  //   sale: 1328,
  //   sale_percent: 243.15,
  //   average: 0.021,
  //   average_percent: 27.73,
  //   volume: 27.52,
  //   volume_percent: 338.31,
  // },
  // {
  //   name: "Stargaze Punks",
  //   image: "/images/punk.jpeg",
  //   supply: 8888,
  //   floor: 3600,
  //   floor_percent: 0.81,
  //   sale: 1328,
  //   sale_percent: 243.15,
  //   average: 0.021,
  //   average_percent: 27.73,
  //   volume: 27.52,
  //   volume_percent: 338.31,
  // },
];
type data = {
  name: string;
  image: string;
  supply: number;
  floor: number;
  floor_percent: number;
  sale: number;
  sale_percent: number;
  average: number;
  average_percent: number;
  volume: number;
  volume_percent: number;
};
const titles = ["Collection", "floor", "Sales", "Average", "Volume"];

const list = ["1m", "5m", "15m", "30m", "1h", "12h", "1d", "7d", "14d", "30d"];
export default Home;
