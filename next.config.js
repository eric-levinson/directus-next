/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dg31lq9y.directus.app',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
}


module.exports = nextConfig
