const {
    pluginPrismic,
    definePrismicPluginOptions,
} = require("eleventy-plugin-prismic");

// This is a sugar function that gives you intellisense and
// documentation in your IDE while defining plugin options.
const prismicPluginOptions = definePrismicPluginOptions({
    endpoint: "developerblog",

    // Optional, additional parameters to pass to the client
    clientConfig: {
        accessToken: "2c5007bbe230022f48f2a619407e3d2d",
    },

    /* see configuration references for more */
});

const config = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginPrismic, prismicPluginOptions);
    return {
        markdownTemplateEngine: "njk",
    };
};
// This format is important if you want to setup previews
// with the plugin.
config.prismicPluginOptions = prismicPluginOptions;

module.exports = config;
