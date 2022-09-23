/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL || "localhost:3000",
    blogSource: process.env.BLOG_SLUG || "BEPRO",
    blogUrl: process.env.BLOG_URL || "https://blog.bepro.network",
    backendGraphql:
      process.env.BACKEND_GRAPHQL || "http://localhost:4444/api/graphql",
    imageProxyUrl: process.env.IMAGE_PROXY_URL || "",
    imageProxyKey: process.env.IMAGE_PROXY_KEY || "",
    imageProxySalt: process.env.IMAGE_PROXY_SALT || "",
    robots: process.env.ROBOTS || "false",
    webnetVersion: process.env.WEBNET_VERSION || "2.0",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
