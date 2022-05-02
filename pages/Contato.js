import Head from "next/head"
import React from "react"
import TextField from '@material-ui/core/TextField';
import styles from "../styles/Contato.module.css"
import { Button } from "@material-ui/core";


export default function Contato(){

  


    return (
    <>
    <Head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> 
    </Head>

    <div className={styles.container}>
       
        <div className={styles.box}/>
        <div className={styles.box1}/>
        <div className={styles.box2}/>
        <div className={styles.box3}/>
        <div className={styles.box4}/>
        <div className={styles.box5}/>

                    <form className={styles.forms}>

                    <div className={styles.texto}>
                    <h1>Fale Comigo!</h1> 
                    </div>

                    <TextField className={styles.input} required size="small" id="outlined-basic" label="Nome" variant="outlined" />
                    <TextField className={styles.input} required size="small" id="outlined-basic" label="Email" variant="outlined" />
                    <TextField className={styles.input_texto} maxRows={4} multiline size="small" id="outlined-basic" label="Texto..." variant="outlined" />
                    <Button variant="contained" color="primary" className={styles.btn}  >
                    Enviar
                    </Button>
                    </form>

        </div>
        
  
    </>
    )
}
