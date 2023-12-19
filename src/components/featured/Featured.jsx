"use client"

import React, { useEffect, useState } from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  const [latestPost, setLatestPost] = useState(null);

  useEffect(() => {
    const getLatestPost = async () => {
      const res = await fetch('https://www.fettahb.me/api/featured');
      const data = await res.json();
      setLatestPost(data);
    };

    getLatestPost();
  }, []);

  if (!latestPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey fettahbaba here!</b> Discover my stories and creative ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={latestPost.image} alt={latestPost.title} fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{latestPost.title}</h1>
          <p className={styles.postDesc}>{latestPost.description}</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;