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
    <p>Merhabalar, ben Fettah. Çocukluğumdan beri ilgi duyduğum uygulama ve websitesi geliştirme hobimi 2022 yılında profesyonelliğe çevirme kararıyla üniversite eğitimime ara verdim. O andan beri çeşitli projelerle uğraşıyorum. C++ 20 ve DirectX 12 kullarak geliştirmekte olduğum, en kibar söylemle, vasat bir oyun motorum var. Kendimi geliştirmek için .Net kullanarak yazmış olduğum bir websitesi vardı ve bu yazıyı okuduğunuz blogu ise yeni öğrendiğim havalı NextJS frameworkü ile yazdım. Asıl ilgi alanım backend olmasıyla birlikte yeni şeylere olan merakımdan dolayı bu blog üzerinde sürekli geliştirmeler yapmaya çalışacağım. Şu an Glomil adlı şirket backend geliştirici olarak çalışmaktayım. Elektronik müziği ve bilim-kurguları severim. Ve okuduğum sayısız bilim-kurgudan bir tanesi bile gerçekçi tahminlerde bulunduğunu var sayarsam, yapay zekanın en iyi ihtimalle başımızı ağrıtacağını düşünüyorum. Bazen temiz kod yazarım, ama genel olarak yazdığım şeyleri okumaya çalışmak antik bir dili çözümlemeyi anımsatır.</p>
  </div>
</div>

    )
}

export default AboutPage
