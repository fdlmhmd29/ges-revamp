const nextTranslate = require("next-translate");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = nextTranslate();
withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  webpack: (config, { isServer }) => {
    // Fixes npm packages (mdx) that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
});
