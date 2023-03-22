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
