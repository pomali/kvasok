module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  useRemark(eleventyConfig);

  // eleventyConfig.addPassthroughCopy({"_images": "images"});
  // eleventyConfig.addPassthroughCopy('images');

  return {
    pathPrefix: "/kvasok/",
  };
};

function useRemark(eleventyConfig) {
  const eleventyRemark = require("@fec/eleventy-plugin-remark");
  const remarkImages = require("@fec/remark-images");
  var gfm = require("remark-gfm");
  var toc = require("remark-toc");
  var slug = require("remark-slug");

  eleventyConfig.addPlugin(eleventyRemark, {
    plugins: [
      { plugin: gfm },
      { plugin: toc, options: { tight: true } },
      slug,
      {
        plugin: remarkImages,
        options: {
          srcDir: "./",
          targetDir: "./_site/",
          // resolutions: [1, 2, 3],
          // imageSizes: [320, 640, 960],
        },
      },
    ],
  });
}

function useMarkdownIt(eleventyConfig) {
  const markdownIt = require("markdown-it");
  const markdownItAnchor = require("markdown-it-anchor");

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    images: true,
  });
  // .use(markdownItAnchor, {
  //   permalink: true,
  //   permalinkClass: "direct-link",
  //   permalinkSymbol: "#"
  // });
  eleventyConfig.setLibrary("md", markdownLibrary);
}
