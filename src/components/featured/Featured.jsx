import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';
import Link from "next/link";

//gets the latest post from the api
const getLatestPost = async () => {
  const res = await fetch("https://www.fettahb.me/api/featured", {
    cache: "no-store",
  })
  return res.json();
};


const Featured = async () => {
  const data = await getLatestPost();
  console.log(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Merhabalar!</b> Denemelerime göz atmaya ne dersiniz?
      </h1>
      <div className={styles.post}>
      <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{data.title}</h1>
          <div className={styles.desc}>&emsp;&emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;