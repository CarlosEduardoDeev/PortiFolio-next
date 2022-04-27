import styles from '../styles/Sobre.module.css'
import Image from 'next/Image'


export default function Sobre(){
    return (
<>
        <div className={styles.container}>
        <div className={styles.box}/>
        <div className={styles.box1}/>
        <div className={styles.box2}/>
        <div className={styles.box3}/>
        <div className={styles.box4}/>
        
            <div className={styles.model1}>
                
            <Image className='image' src='/images/foto2.png' width='600' height="688"/>
            </div>
            
            <div className={styles.model2}>
            <h1> Sobre mim </h1>
            <p>My name is Carlos eu tenho 24 anos sou formado em ADS e estudo JS, React, Next e Node  </p>

            </div>
        </div>
</>
    )
}