/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"], // ✅ smaller modern formats
    minimumCacheTTL: 60 * 60 * 24 * 30, // ✅ cache images for 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // optimize responsive loading
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },

  compress: true, // ✅ gzip compression
  reactStrictMode: true,
};

module.exports = nextConfig;