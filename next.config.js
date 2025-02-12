/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = {
  reactStrictMode: true,
  output: "standalone",
  // experimental: {
  //   appDir: true, // Habilita a nova estrutura `app/`
  // },
};
