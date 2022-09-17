/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    blogSource: process.env.BLOG_SLUG || "BEPRO",
    backendGraphql:
      process.env.BACKEND_GRAPHQL || "http://localhost:4444/api/graphql",
    imageProxyUrl: process.env.IMAGE_PROXY_URL || "",
    imageProxyKey: process.env.IMAGE_PROXY_KEY || "",
    imageProxySalt: process.env.IMAGE_PROXY_SALT || "",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
