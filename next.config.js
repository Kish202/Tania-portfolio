/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "firebasestorage.googleapis.com",
      "img.icons8.com",
      "raw.githubusercontent.com",
      "i.imgur.com",
      "img.freepik.com",
      "www.freepik.com",
      "media.geeksforgeeks.org",
      "drive.google.com",
      "i.ibb.co",
      "cdn.dribbble.com",
      "developers.google.com",
      "s3.amazonaws.com",
      "miro.medium.com",
      ".com",
      "upload.wikimedia.org",
      "viz.mediapipe.dev",
      "raw.githubusercontent.com",
      "flowygo.com",
    ],
  },
};

module.exports = nextConfig;
