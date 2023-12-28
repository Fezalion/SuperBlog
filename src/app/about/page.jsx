import React from "react";
import styles from "./aboutPage.module.css"
import Image from "next/image";


const AboutPage = () =>{
    return(
        <div>
            <h1>TESTINGTESTING</h1>
            <div className={styles.imgContainer}>
            <Image src={"/fettah.png"} alt="" classname={styles.image}/>
            </div>
        </div>
    )
}

export default AboutPage
