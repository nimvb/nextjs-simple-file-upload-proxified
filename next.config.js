/** @type {import('next').NextConfig} */
const nextConfig = {

  serverRuntimeConfig: {
    // Will only be available on the server side
    AXIOS_PROXY_URL: 'http://localhost:3001',
  },

  reactStrictMode: true,
}

module.exports = nextConfig
