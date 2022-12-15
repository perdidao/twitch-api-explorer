/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static-cdn.jtvnw.net'],
  },
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "~@styles/ds.scss";`,
  }
}

module.exports = nextConfig
