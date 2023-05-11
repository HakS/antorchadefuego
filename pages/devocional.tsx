import AppHead from '../components/AppHead';
import Layout from './Layout';
import topImage from "../public/images/bck_devocional.jpeg";
import styles from "./devocional.module.scss";

export default function Home() {
  return (
    <>
      <AppHead title="Devocional" />
      <Layout topContent="Devocional" topImage={topImage}>
        <div className={`page-max-width page-padding`}>

        </div>
      </Layout>
    </>
  );
}
