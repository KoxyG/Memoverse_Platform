// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },

  reactStrictMode: true,
  // experimental: {
  //   forceSwcTransforms: true,
  // },
};

module.exports = nextConfig
