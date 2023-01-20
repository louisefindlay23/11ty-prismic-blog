const {
    pluginPrismic,
    definePrismicPluginOptions,
} = require("eleventy-plugin-prismic");

// This is a sugar function that gives you intellisense and
// documentation in your IDE while defining plugin options.
const prismicPluginOptions = definePrismicPluginOptions({
    endpoint: "developerblog",
    preview: {
        name: "preview",
        functionsDir: "./netlify/functions/",
    },

    // Optional, additional parameters to pass to the client
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

const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

const config = function (eleventyConfig) {
    eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
        name: "preview",
        functionsDir: "./netlify/functions/",
    });
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
// This format is important if you want to setup previews
// with the plugin.
config.prismicPluginOptions = prismicPluginOptions;

module.exports = config;
