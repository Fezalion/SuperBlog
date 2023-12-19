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
        <b>Hey fettahbaba here!</b> Discover my stories and creative ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
        <Image src={data.img} fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{data.title}</h1>
          <div className={styles.desc}>{data.desc}</div>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;