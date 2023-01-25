import Head from "next/head";
import { useRouter } from "next/router";
import { getAbsUrl } from '../utils';

type LayoutProps = {
  title?: string;
  tagDescription?: string;
  tagImage?: string;
};

const AppHead = ({
  title = "",
  tagDescription = '"Predicando el evangelio de Jesucristo a toda nación, pueblo y lengua."',
  tagImage = `${getAbsUrl()}/social-share-img.png`,
}: LayoutProps) => {
  const router = useRouter();
  const absUrl = getAbsUrl(router);

  return (
    <Head>
      <title>{`${
        title !== "" ? `${title} - ` : ""
      }Iglesia Antorcha de Fuego - Concilio Aposento Alto`}</title>
      <meta name="description" content={tagDescription} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={tagDescription} />
      <meta itemProp="image" content={tagImage}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={tagDescription} />
      <meta property="og:image" content={tagImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={absUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={tagDescription} />
      <meta name="twitter:image" content={tagImage} />
      <meta name="twitter:card" content="summary" />
      <link rel="canonical" href={absUrl} />
    </Head>
  );
};

export default AppHead;
