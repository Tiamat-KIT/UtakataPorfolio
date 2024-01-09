/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        swcPlugins: [['typewind/swc', {}]],
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.microcms-assets.io',
          },
        ],
      },
}

module.exports = nextConfig
