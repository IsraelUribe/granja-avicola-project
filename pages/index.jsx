import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Granja Automatizada</title>
      </Head>

        <section className = {styles.home}>
          <div className={styles.navbar}>
            <button class={styles.layaut}>Salir</button>
            <button class={styles.autolayaut}>Guardar</button>
          </div>
          <h1 className=" mt-6 mb-4 text-3xl xl:text-4xl font-bold text-gray-800">Granja Avicola</h1>
          <div className = {styles.content}>
             {/*  <br> */}
                  <label className = {styles.tituloA}>Valor de la temperatura</label>
                  <label id="Alimentos" name="Name" className = {styles.alimentos}>0%</label>
                  <label className = {styles.tituloT}>Valor de la temperatura</label>
                  <label type="Alimento" id="Alimentos" name="Name" className = {styles.temperaturaV}>0%</label>
              {/* </br> */}
          </div>
          <div className ={styles.content2}>
              {/* <br></br> */}
                  <label className = {styles.tituloAg}>Nivel del agua</label>
                  <label type="Alimento" id="Alimentos" name="Name" className = {styles.aguaV}>0%</label>
              <label className = {styles.tituloC}>Cortinas</label>

              <button className = {styles.buttonS}>
                  Subir
              </button>
              <button className = {styles.buttonB}>
                  Bajar
              </button>

          </div>
      </section>
    </div>
  )
}
