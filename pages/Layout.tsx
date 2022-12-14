import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram} from "react-icons/fa";
import styles from "../styles/Layout.module.scss"
import topImage from "../assets/images/worship3.jpeg";

type LayoutProps = {
  fullScreen ?: boolean;
  topContent ?: React.ReactNode;
  children: React.ReactNode;
};
const Layout = ({fullScreen = false, topContent, children}: LayoutProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="Iglesia Antorcha de Fuego - Concilio Aposento Alto"></meta>
      </Head>
      <div className={styles.mainWrapper}>
        <header className={`${styles.mainHeader} ${fullScreen && styles.mainHeader__full}`}>
          <div className={styles.mainHeader_inner}>
            <Link href="/" className="mb-0 inline-flex">
              <Image src="/logo.png" width={218} height={75} alt="Iglesia Antorcha de Fuego - Concilio Aposento Alto" />
            </Link>
            <nav>
              <Link href="/emisora">Emisora</Link>
              <Link href="/devocional">Devocional</Link>
              <Link href="/donaciones">Donaciones</Link>
              <Link href="/Contacto">Contacto</Link>
            </nav>
          </div>
        </header>
        <div className={`${styles.mainImage} ${fullScreen && styles.mainImage__full}`}>
          <Image src={topImage} fill={true} alt="Iglesia Antorcha de Fuego - Concilio Aposento Alto" placeholder="blur"/>
        </div>
        <div className={styles.topContent}>
          {topContent}
        </div>
        <div className={styles.mainContent}>
          <div className={`${styles.pageMaxWidth} ${styles.mainContent_inner}`}>
            <main>{children}</main>
          </div>
        </div>
        <div className={styles.mainFooter}>
          <div className={`${styles.pageMaxWidth}`}>
            <footer>
              Iglesia Antorcha de Fuego - Concilio Aposento Alto, {new Date().getFullYear()} todos los derechos
              reservados.
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
