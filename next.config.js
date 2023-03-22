/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        source: '/post/:id',
        missing: [
          {
            type: 'header',
            key: 'Next-Router-Prefetch',
          }
        ],
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=60',
          },
        ],
      },
    ]
  },
}
