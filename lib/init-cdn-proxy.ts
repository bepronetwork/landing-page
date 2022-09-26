import Imgproxy from "imgproxy";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const createCdnProxy = () => {
  const cdnProxy = new Imgproxy({
    baseUrl: publicRuntimeConfig.imageProxyUrl,
    key: publicRuntimeConfig.imageProxyKey,
    salt: publicRuntimeConfig.imageProxySalt,
    encode: true,
  });
  return cdnProxy;
};

export default createCdnProxy;
