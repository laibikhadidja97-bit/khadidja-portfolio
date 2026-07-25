/** @type {import('next').NextConfig} */
// basePath is set (to "/<repo>") only when building for GitHub Pages, via the
// NEXT_PUBLIC_BASE_PATH env var in the deploy workflow. Locally and on Vercel
// it stays empty so the site is served from the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // static HTML export (required for GitHub Pages)
  trailingSlash: true, // export each route as a folder/index.html
  images: { unoptimized: true }, // no image optimization server on Pages
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
