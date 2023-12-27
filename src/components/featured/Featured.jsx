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
  const latestPost = await getLatestPost();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Merhabalar!</b> Denemelerime göz atmaya ne dersiniz?
      </h1>
      <div className={styles.post}>
      <div className={styles.imgContainer}>
          <Image src={latestPost.img} alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{latestPost[0].title}</h1>
          <div className={styles.desc} dangerouslySetInnerHTML={{ __html:latestPost[0].desc.substring(0,100) }} />
          <button className={styles.button}><Link href={`/posts/${latestPost[0].slug}`} className={styles.link}>
          Read More
        </Link></button>
        </div>
      </div>
    </div>
  );
};

export default Featured;