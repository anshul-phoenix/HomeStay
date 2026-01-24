/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add any specific config here
  // Images from external domains need to be whitelisted for next/image
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "content.jdmagicbox.com",
      },
    ],
  },
};

export default nextConfig;
