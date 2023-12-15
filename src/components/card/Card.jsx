import Link from "next/link";
import styles from "./card.module.css"
import Image from "next/image";

const Card = ({key,item}) => {
  return (
    <div className={styles.container} key = {key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>12.11.2023</span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/">
        <h1>{item.title}</h1>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quibusdam explicabo reprehenderit voluptatibus,
          sint fugit eveniet alias omnis quia at obcaecati reiciendis quidem!
          Est qui debitis exercitationem eos harum consequatur ipsam.</p>
          <Link href="/">Read More</Link>
      </div>
    </div>
  );
};

export default Card;
