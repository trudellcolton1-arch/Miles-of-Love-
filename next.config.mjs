/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // BASE_PATH is set by the GitHub Pages deploy workflow (e.g. "/Miles-of-Love-").
  // Leave unset for Vercel/Netlify/custom-domain hosting.
  basePath: process.env.BASE_PATH || "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
