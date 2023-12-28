import React from "react";
import styles from "./aboutPage.module.css"
import Image from "next/image";


const AboutPage = () =>{
    return(
<div className={styles.container}>
  <div className={styles.imgContainer}>
    <Image src={"/fettah.png"} alt="" className={styles.image} />
  </div>
  <div className={styles.textContainer}>
    <h2>Muhammed Fettah Başdemir</h2>
    <p>Sucukları severim ve bazen iyi kod yazarım. Ama genelde yazdığım kodlara spagetti demek bile övgü sayılır.</p>
  </div>
</div>

    )
}

export default AboutPage
