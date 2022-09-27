import Head from "next/head";
import getConfig from "next/config";
import { baseUrl } from "../config";

const SiteHead = () => {
  const { publicRuntimeConfig } = getConfig();
  const title =
    "Bepro Network - The bounty network platform for open-source projects";
  const description =
    "Bepro Network is a bounty network created to help organizations manage their decentralized development.";
  const thumbnail = "/bepro-default-opengraph.jpg";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Bepro Network" />
      <meta
        name="robots"
        content={`${
          publicRuntimeConfig.robots === "true"
            ? "index, follow"
            : "noindex, nofollow"
        }`}
      />
      <meta
        key="keywords"
        name="keywords"
        content="web3 development platform, web3 developer, web3 development, smart contract web3, web3 eth contract"
      />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:site" name="twitter:site" content="@bepronet" />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={description}
      />
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="twitter:image" name="twitter:image" content={thumbnail} />
      <meta key="og:url" property="og:url" content={baseUrl} />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:title" property="og:title" content={title} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta key="og:image" property="og:image" content={thumbnail} />
      <meta key="og:locale" property="og:locale" content="en_us" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link rel="icon" href="favicon.ico" type="image/x-icon" />
      <link rel="canonical" href={`${publicRuntimeConfig.baseUrl}`} />
    </Head>
  );
};

export default SiteHead;
