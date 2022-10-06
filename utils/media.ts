import { cdn } from "config";
import {ICDNOption} from "types/media-types"
import createCdnProxy from "lib/init-cdn-proxy";

const urlIsAbsolute = (url: string) => {
  if (typeof url !== "string") {
    return false;
  }

  return /^[a-z][a-z\d+.-]*:/.test(url);
};

export const getCdnUrl = (url = '', options: ICDNOption | null = null) => {
  if (!url) return '';

  const { width = 300, height = 200, resizingType = 'fit', enlarge = false } = options || {};

  if (!url || !urlIsAbsolute(url)) {
    return url;
  }

  const cdnProxy = createCdnProxy();
  const newUrl = cdnProxy.builder().resize(resizingType, width, height, enlarge).generateUrl(url);
  return newUrl;
};

export const getCdnUrlBlogPostCover = (imageUrl: string) => {
  if (!imageUrl) {
    return "";
  }

  if (!urlIsAbsolute(imageUrl)) {
    return imageUrl;
  }

  // @ts-ignore
  return getCdnUrl(imageUrl, cdn.cardCoverSet);
};

export const getCdnUrlUserSmallAvatar = (imageUrl: string) => {
  if (!imageUrl) {
    return "";
  }

  if (!urlIsAbsolute(imageUrl)) {
    return imageUrl;
  }

  // @ts-ignore
  return getCdnUrl(imageUrl, cdn.userAvatar);
};
