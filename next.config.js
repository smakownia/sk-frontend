/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };

    return config;
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_STATIC_FILES_DOMAIN]
  }
};

module.exports = nextConfig;
