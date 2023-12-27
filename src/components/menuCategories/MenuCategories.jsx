import Link from 'next/link';
import React from 'react';
import styles from './menuCategories.module.css';

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
				<Link href="/blog?cat=code" className={`${styles.categoryItem} ${styles.code}`}>Code</Link>
				<Link href="/blog?cat=philosophy" className={`${styles.categoryItem} ${styles.philosophy}`}>Philosophy</Link>
				<Link href="/blog?cat=literature" className={`${styles.categoryItem} ${styles.literature}`}>Literature</Link>
				<Link href="/blog?cat=music" className={`${styles.categoryItem} ${styles.music}`}>Music</Link>
				<Link href="/blog?cat=movies" className={`${styles.categoryItem} ${styles.movies}`}>Movies</Link>
				<Link href="/blog?cat=gaming" className={`${styles.categoryItem} ${styles.gaming}`}>Gaming</Link>
			</div>
  );
};

export default MenuCategories;
