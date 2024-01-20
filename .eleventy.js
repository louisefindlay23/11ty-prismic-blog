const {
  pluginPrismic,
  definePrismicPluginOptions,
} = require("eleventy-plugin-prismic");

const prismicPluginOptions = definePrismicPluginOptions({
  endpoint: "developerblog",

  clientConfig: {
    accessToken: "2c5007bbe230022f48f2a619407e3d2d",
  },
  routes: [
    {
      type: "page",
      path: "/",
    },
    { type: "developer_posts", path: "/blog/:uid" },
  ],
});

const config = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginPrismic, prismicPluginOptions);
  const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addFilter("markdown", function (value) {
    let markdown = require("markdown-it")({
      html: true,
    });
    return markdown.render(value);
  });
  js = eleventyConfig.javascriptFunctions;
  eleventyConfig.addPassthroughCopy("css");
};

config.prismicPluginOptions = prismicPluginOptions;

module.exports = config;
