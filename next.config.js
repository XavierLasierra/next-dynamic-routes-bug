/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "default",
    locales: ["default", "en", "de"],
  },
};

module.exports = nextConfig;
