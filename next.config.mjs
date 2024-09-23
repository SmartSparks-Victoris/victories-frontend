/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors during build
  },
  // experimental: {
  //   staleTimes: {
  //     dynamic: 0,
  //     static: 180,
  //   },
  // },
};

export default nextConfig;

