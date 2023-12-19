import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination';
import Card from '../card/Card';


const getData = async (cat) => {
	let page = 1;
	let posts = [];
	while (true) {
			const res = await fetch(`https://www.fettahb.me/api/posts?page=${page}&cat=${cat || ""}`, {
					cache: "no-store",
			});

			if (!res.ok) {
					throw new Error("Failed");
			}

			const data = await res.json();
			posts = [...posts, ...data.posts];

			if (data.posts.length === 0) {
					break;
			}

			page++;
	}

	return { posts, count: posts.length };
}

const CardList = async ({ page, cat }) => {
	const { posts, count } = await getData(cat)

	const POST_PER_PAGE = 2;

	const sortedPosts = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
	const displayedPosts = sortedPosts.slice((page - 1) * POST_PER_PAGE, page * POST_PER_PAGE);

	const hasPrev = POST_PER_PAGE * (page - 1) > 0;
	const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

	return (
			<div className={styles.container}>
					<h1 className={styles.title}>Recent Posts</h1>
					<div className={styles.posts}>
							{displayedPosts?.map((item) => (
									<Card item={item} key={item._id} />)
							)}
					</div>
					<Pagination hasPrev={hasPrev} hasNext={hasNext} />
			</div>
	);
};

export default CardList;
