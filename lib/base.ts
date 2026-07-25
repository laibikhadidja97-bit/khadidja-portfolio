// Prefix for static assets referenced with a plain <img>/<a> (which Next does
// NOT auto-prefix with basePath, unlike next/link and next/image).
// Empty locally & on Vercel; "/khadidja-portfolio" on GitHub Pages.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const asset = (path: string) =>
  `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
