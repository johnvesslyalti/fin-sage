/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === "development", // disable PWA in dev
});

const nextConfig = {
  // your existing config...
};

module.exports = withPWA(nextConfig);