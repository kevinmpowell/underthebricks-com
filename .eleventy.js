module.exports = function(eleventyConfig) {
    // Input directory: src
    // Output directory: _site
  
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addWatchTarget("images");
    eleventyConfig.addWatchTarget("_site/styles");

    return {
        dir: {
          includes: "_includes",
          layouts: "_layouts",
          markdownTemplateEngine: "njk"
        }
      };
  };