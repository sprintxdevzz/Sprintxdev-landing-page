/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: (config) => {
    // Node.js 24 breaks webpack's WASM-based xxhash; fall back to md4
    config.output.hashFunction = 'md4';
    return config;
  },
};
export default nextConfig;
