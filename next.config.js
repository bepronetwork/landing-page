/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL || "localhost:3000",
    blogSource: process.env.BLOG_SLUG || "BEPRO",
    blogUrl: process.env.BLOG_URL || "https://blog.bepro.network",
    imageProxyUrl: process.env.IMAGE_PROXY_URL || "",
    imageProxyKey: process.env.IMAGE_PROXY_KEY || "",
    imageProxySalt: process.env.IMAGE_PROXY_SALT || "",
    webnetVersion: process.env.WEBNET_VERSION || "2.0",
    robots: process.env.ROBOTS || "false",
    sendgridApiKey: process.env.SENDGRID_API_KEY || "",
    sendgridListId: process.env.SENDGRID_LIST_ID || "",
    gaDisabled: process.env.GA_DISABLED || "true",
    gaDebug: process.env.GA_DEBUG || "false",
    gaProperty: process.env.GA_PROPERTY || "",
    backendGraphql:
      process.env.BACKEND_GRAPHQL || "http://localhost:4444/api/graphql",
    buyToken: process.env.BUY_TOKEN || "false",
    transakApiKey: process.env.TRANSAK_API_KEY || "",
    transakEnvironment: process.env.TRANSAK_ENVIRONMENT || "STAGING",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
