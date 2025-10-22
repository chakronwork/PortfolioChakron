// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos', // เผื่อไว้สำหรับรูป placeholder อื่นๆ
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;