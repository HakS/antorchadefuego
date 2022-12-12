import Head from 'next/head'
import { useRouter } from 'next/router';
import { getAbsUrl } from '../utils';
import Layout from './Layout';

export default function Home() {
  const router = useRouter();
  const absUrl = getAbsUrl(router);
  const tagTitle = "Iglesia Antorcha de Fuego - Concilio Aposento Alto";
  const tagDescription = "Predicando el evangelio de Jesucristo a toda nación, pueblo y lengua.";
  const tagImage = `${getAbsUrl()}/social-share-img.png`;

  return (
    <>
      <Head>
        <title>Aqui Decimos</title>
        <meta name="description" content={tagDescription} />
        <meta itemProp="name" content={tagTitle} />
        <meta itemProp="description" content={tagDescription} />
        <meta itemProp="image" content={tagImage}></meta>
        <meta property="og:title" content={tagTitle} />
        <meta property="og:description" content={tagDescription} />
        <meta property="og:image" content={tagImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={absUrl} />
        <meta name="twitter:title" content={tagTitle} />
        <meta name="twitter:description" content={tagDescription} />
        <meta name="twitter:image" content={tagImage} />
        <meta name="twitter:card" content="summary" />
        <link rel="canonical" href={absUrl} />
      </Head>

      <Layout>
        <h1>Mateo 17:20</h1>
        <h2>
          Porque de cierto os digo, que si tuviereis fe como un grano de
          mostaza, diréis a este monte: Pásate de aquí allá, y se pasará; y nada
          os será imposible.
        </h2>
      </Layout>
    </>
  );
}
