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
    <p>Merhaba, ben [Adınız Soyadınız]!</p>
    <p></p>
    <p>🚀 Yazılım Geliştirici ve [Sizin Uzmanlık Alanınız]</p>
    <p>🌐 Web Teknolojileri ve Uygulama Geliştirme ile ilgileniyorum</p>
    <p>💼 Şu anda [Şirket Adı] firmasında çalışıyorum</p>
    <p>🔧 Ana uzmanlık alanlarım: [Ana Uzmanlık Alanlarınız]</p>
    <p>🚀 Sürekli öğrenmeye ve gelişen teknolojilere ayak uydurmaya odaklıyım</p>
    <p>📚 Kendimi geliştirmek için düzenli olarak [Okuma, Kurslar, Seminerler] gibi kaynaklardan yararlanıyorum</p>
    <p>📢 Ayrıca, [Sosyal Medya Hesaplarınız veya Kişisel Blogunuz] üzerinden yazılım ve teknolojiyle ilgili düşüncelerimi paylaşıyorum<br/></p>
    <p>🌍 İletişim kurmak ve yeni projelerde işbirliği yapmak beni heyecanlandırıyor, bu yüzden benimle iletişime geçmekten çekinmeyin!<br/></p>
    <p>edefim, teknoloji dünyasındaki değişimlere ayak uydurarak, sürekli öğrenerek ve deneyimlerimi paylaşarak hem kişisel hem de profesyonel olarak gelişmek. Eğer benimle aynı tutkulara sahipseniz, birlikte çalışmayı çok isterim!</p>
  </div>
</div>

    )
}

export default AboutPage
