const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "" : undefined;
const assetPrefix = isProd ? "" : undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath,
  assetPrefix,
};

module.exports = nextConfig;
