/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "link.fobshanghai.com",
      "cdn.sanity.io",
      "platform-lookaside.fbsbx.com",
      "i.ibb.co",
      "cdn.shopify.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
