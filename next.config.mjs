// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        'zlib-sync': false,
      };
    }
    return config;
  },
};

export default nextConfig;
