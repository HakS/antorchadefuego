import AppHead from '../components/AppHead';
import Layout from './Layout';
import styles from "./emisora.module.scss";
import { useState } from 'react';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleRadio = () => {
    if (isPlaying) {
      setIsPlaying(false);
    }
    else {
      setIsPlaying(true);
    }
  }

  return (
    <>
      <AppHead title="Emisora Antorcha de Fuego" />
      <Layout topContent="Emisora Antorcha de Fuego">
        <div className={`page-max-width ${styles.radio}`}>
          <div className={styles.radio_audio} onClick={() => handleRadio()}>
            <audio
              src="https://radio30.virtualtronics.com/proxy/antorcha?mp=/stream"
              preload="preload"
              data-active={isPlaying}
            />
            <img src="/emisora.svg" alt="" />
            <span>
              {isPlaying
                ? "Click para detener la radio"
                : "Click para iniciar la radio"}
            </span>
          </div>
          <div className={styles.radio_livechat}>
            <iframe
              className={styles.cboxIframe}
              src="https://www3.cbox.ws/box/?boxid=3526198&boxtag=ZEMvGR"
              // src="https://www3.cbox.ws/box/?boxid=3442083&boxtag=2t592t&sec=form"
              width="100%"
              height="100%"
              allow="autoplay"
            ></iframe>
            {/* <iframe
              src="https://www3.cbox.ws/box/?boxid=3526198&boxtag=ZEMvGR&sec=form"
              width="100%"
              height="450"
              allowtransparency="yes"
              allow="autoplay"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              scrolling="auto"
            ></iframe> */}
          </div>
        </div>
      </Layout>
    </>
  );
}
