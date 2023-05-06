/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["res.cloudinary.com","www.joaillerie-larous.com.tn","firebasestorage.googleapis.com","cdn.shopify.com","tn.jumia.is","www.lamode.tn","mk-media.mytek.tn"]
  }
};

module.exports = nextConfig;