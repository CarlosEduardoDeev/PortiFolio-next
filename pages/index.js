import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'



export default function Home({children}) {
  return (
    <>
    <Head>
      <title> Portifolio</title>
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'/>
    </Head>

    <div className={styles.container_main}>
      <div className={styles.box}/>
      <div className={styles.box1}/>
      <div className={styles.box2}/>
      <div className={styles.box3}/>
      <div className={styles.box4}/>
      
   
        <div className={styles.model1}>
          
         <Image className='image' src='/images/foto.png' width='301' height="301"/>
         
         <div className={styles.sobre_container}>
      
         </div>
         <div className={styles.sobre}>
         <Link href='/Sobre' ><a>Sobre mim</a></Link> 
         </div>
        </div>
        
        <div className={styles.model2}>
          <h3>Oi sou o  </h3>
          <h1><span>Carlos</span> Eduardo</h1>
          <h4>Atualmente sou formado em ADS, e <span>Dev FrontEnd JR</span> em busca de oportunidades de expressar a criatividade ! </h4>
        <div className={styles.social}>
           <Link href='https://drive.google.com/file/d/1w6W0fhSvBXddwQiUjTPFHjk1AEs499uN/view?usp=sharing' ><a className={styles.btn}>Curriculo</a></Link>
         <div className={styles.icons_social}>
        
         <Link href='/' ><i class="fa-brands fa-instagram"></i></Link>
         <Link href='/' ><i class="fa-brands fa-linkedin-in"></i></Link>
         <Link href='/' ><i class="fa-brands fa-github"></i></Link>
          </div>  
        </div>
       </div>
      
    </div>
    </>
  )
}