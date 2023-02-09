import Layout from './Layout';
import styles from './index.module.scss';
import AppHead from '../components/AppHead';

export default function Home() {
  const topContent = (
    <div className={styles.topContent}>
      <h1>Mateo 17:20</h1>
      <h2>
        Porque de cierto os digo, que si tuviereis fe como un grano de mostaza, diréis a este monte: Pásate de aquí allá, y se pasará; y nada os será imposible.
      </h2>
    </div>
  )

  return (
    <>
      <AppHead />
      <Layout fullScreen={true} topContent={topContent}>
        <div className={styles.zone1}>
          <section className={styles.aboutUs}>
            <div className={styles.aboutUs_image}></div>
            <h1 className={styles.aboutUs_title}>¡Gusto en conocerte!</h1>
            <div className={styles.aboutUs_content}>
              Te invitamos a que nos acompañes y que vivas una experienca única en el Señor. Una iglesia con corazón abierto para extender su mano de ayuda a las comunidades, haciendo participe a toda persona y nación de las buenas nuevas de salvación de nuestro Señor Jesucristo.
            </div>
          </section>
          <section className={styles.services}>
            <h1>Servicios</h1>
            <ul>
              <li>Ayunos: Martes y Sábados 9:30 am</li>
              <li>Instituto Bíblico: Miércoles 7:30 pm</li>
              <li>Servicio de Milagros: Viernes 7: 30 pm</li>
              <li>Reunión de Jóvenes: Sábado 5:30pm</li>
              <li>Escuela Dominical: 9:00 am</li>
            </ul>
          </section>
        </div>
      </Layout>
    </>
  );
}
