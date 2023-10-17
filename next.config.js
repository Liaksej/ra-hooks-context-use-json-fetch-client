/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath:
    process.env.NODE_ENV === "production"
      ? "/ra-hooks-context-use-json-fetch-client"
      : "",
};

module.exports = nextConfig;
