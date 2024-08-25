/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/**
 * The `redirects` option in the `next.config.js` file allows you to redirect an incoming request path to a different destination path.
 * This is useful when you change the URL structure of pages or have a list of redirects that are known ahead of time.
 *
 * `redirects` supports
 *      - path,
 *      - header,
 *      - cookie, and
 *      - query matching,
 * giving you the flexibility to redirect users based on an incoming request.
 */
module.exports = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      // Wildcard path matching
      {
        source: "/blog/:slug",
        destination: "/news/:slug",
        permanent: true,
      },
    ];
  },
};
