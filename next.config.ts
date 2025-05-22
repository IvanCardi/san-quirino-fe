import withPWA from "next-pwa";

const nextConfig = {
  reactStrictMode: true, // Enable React strict mode for improved error handling
  swcMinify: true, // Enable SWC minification for improved performance
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
};

export default withPWA({
  dest: "public", // destination directory for the PWA files
  disable: process.env.NODE_ENV === "development", // disable PWA in the development environment
  /*register: false, // register the PWA service worker
  scope: "/",
  skipWaiting: true, // skip waiting for service worker activation */
  // importScripts: ['/worker.js']
})(nextConfig);
