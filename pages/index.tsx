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

  const topContent = (
    <>
      <h1>Mateo 17:20</h1>
      <h2>
        Porque de cierto os digo, que si tuviereis fe como un grano de
        mostaza, diréis a este monte: Pásate de aquí allá, y se pasará; y nada
        os será imposible.
      </h2>
    </>
  )

  return (
    <>
      <Head>
        <title>Iglesia Antorcha de Fuego - Concilio Aposento Alto</title>
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

      <Layout fullScreen={true} topContent={topContent}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
          amet varius elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Cras aliquet imperdiet risus ut venenatis. Etiam fermentum sed
          nisi vitae tincidunt. Fusce volutpat ac justo quis pellentesque.
          Mauris congue luctus velit non egestas. Morbi lacinia nisi mi, vitae
          imperdiet massa pretium a. Duis ultrices justo at nisi tincidunt
          aliquam. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Sed orci nulla, placerat eget ornare
          nec, scelerisque quis magna. Suspendisse leo nibh, varius ut ipsum
          sed, interdum tempus lorem. Suspendisse scelerisque orci et feugiat
          condimentum. Quisque posuere augue leo, id semper lectus rutrum a. Nam
          sollicitudin dignissim fringilla. Cras in erat hendrerit, imperdiet
          ligula eu, posuere neque. Curabitur sit amet iaculis risus, at egestas
          lacus. Cras consectetur nisi neque, condimentum suscipit augue
          pellentesque nec. Duis purus sem, hendrerit id tempus ac, pellentesque
          ac mi. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Curabitur gravida tempor enim at
          condimentum. Maecenas varius lorem non tempus auctor. Nulla pharetra,
          turpis id ornare pulvinar, ipsum velit fermentum lacus, a finibus
          lectus libero id felis. Duis ut suscipit magna, ac auctor tellus.
          Donec volutpat euismod tellus, ut eleifend eros dictum vel. Etiam
          ultrices odio a tortor rhoncus, posuere pellentesque ante consectetur.
          Suspendisse non massa suscipit felis posuere scelerisque. Nam ac
          volutpat mauris, vel pellentesque justo. Vestibulum quis dignissim
          sem. Mauris porttitor nisl ut nisi tempor dictum. Pellentesque vel
          tristique mauris. Quisque ipsum lacus, congue vitae erat non,
          vestibulum condimentum sem. Nulla facilisi. Ut a sodales justo.
          Suspendisse tortor odio, dignissim quis felis nec, sollicitudin
          sodales massa. Proin sit amet pharetra ex. Aenean eget risus risus.
          Nullam tempor libero augue, id tincidunt nulla egestas id.
          Pellentesque sit amet dictum dui. Nulla vel porttitor augue. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Quisque maximus ante eget eros aliquam, vel
          fermentum est cursus. Nulla finibus nibh id sodales rhoncus. Donec
          pellentesque quam dolor, in feugiat lorem semper vitae. Proin dapibus
          massa consequat mi tempus, nec pretium eros semper. Integer sodales
          dictum velit at cursus. Aenean commodo sed ligula at cursus. Aliquam
          et ornare tellus. Nunc tempus magna id sapien tincidunt, in
          condimentum tellus bibendum. Curabitur eget ornare odio. Quisque at
          purus tristique quam tristique egestas eu ac sem. Pellentesque et
          rhoncus augue. Vivamus maximus, lectus non blandit volutpat, libero
          sapien sagittis tellus, eu vulputate nisl ipsum eu sem. Fusce ultrices
          odio eros, eget semper justo viverra sed. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Nullam tempor purus a mauris lacinia
          ultrices. Suspendisse potenti.
        </div>
      </Layout>
    </>
  );
}
