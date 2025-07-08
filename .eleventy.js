module.exports = function(eleventyConfig) {
    // Input directory: src
    // Output directory: _site

    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addWatchTarget("images");
    eleventyConfig.addWatchTarget("_site/styles");
    eleventyConfig.addPassthroughCopy({ 'robots.txt': '/robots.txt' });

    return {
        dir: {
          includes: "_includes",
          layouts: "_layouts",
          markdownTemplateEngine: "njk"
        }
      };
  };