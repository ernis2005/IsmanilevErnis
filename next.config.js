/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      // formats:['image/avif','image/webp'],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "image.tmdb.org",
        },
        {
          protocol: "https",
          hostname: "kudago.kz",
        },
        {
          protocol: "https",
          hostname: "kudago.uz",
        },
        {
          protocol: "https",
          hostname: "kudago.tj",
        },
        {
          protocol: "https",
          hostname: "kudago.kg",
        },
      ],
      minimumCacheTTL: 1500000,
    },
  };
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const withNextIntl = require("next-intl/plugin")(
    // This is the default (also the `src` folder is supported out of the box)
    "./i18n.ts"
  );
  
  // const appsConfig = require("./next-app.config.js");
  
  module.exports = withNextIntl(nextConfig);