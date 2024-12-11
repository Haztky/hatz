// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
    },
  };
  
  export default nextConfig;