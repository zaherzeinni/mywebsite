/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "localhost",
        "res.cloudinary.com",
      
        "firebasestorage.googleapis.com",
      ],
    },
    // typescript: {
    //   // !! WARN !!
    //   // Dangerously allow production builds to successfully complete even if
    //   // your project has type errors.
    //   // !! WARN !!
    //   ignoreBuildErrors: true,
    // },
  };
  
  module.exports = nextConfig;