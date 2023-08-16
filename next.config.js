/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };

    return config;
  },
  images: {
    domains: [process.env.STATIC_FILES_DOMAIN],
  },
  output: "standalone",
};

module.exports = nextConfig;
