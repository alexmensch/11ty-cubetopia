import md from "markdown-it";
import mdFN from "markdown-it-footnote";
import * as sass from "sass";
import path from "node:path";

import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import directoryOutputPlugin from "@11ty/eleventy-plugin-directory-output";
import { IdAttributePlugin } from "@11ty/eleventy";

import helpers from "./src/_data/helpers.js";
import siteConfig from "./src/_data/site.js";

export default function (eleventyConfig) {
  /* 11ty Plugins */
  /****************/
  // Image transforms
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",
    formats: ["webp", "auto"],
    widths: ["auto"],
    urlPath: "/assets/images/",

    // optional, attributes assigned on <img> override these values.
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
    },
  });

  // Syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // Add anchors to headings
  eleventyConfig.addPlugin(IdAttributePlugin, {
    // Use standard slugify filter
    slugify: helpers.toSlug,
  });

  // RSS / Atom feed
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: `/${siteConfig.rss.collection}.atom`,
    collection: {
      name: siteConfig.rss.collection, // iterate over `collections.posts`
      limit: 0, // 0 means no limit
    },
    metadata: {
      language: "en",
      title: `${siteConfig.siteName} | ${siteConfig.rss.title}`,
      subtitle: siteConfig.rss.subtitle,
      base: `https://${siteConfig.domain}`,
      author: {
        name: siteConfig.authorName,
        email: siteConfig.authorEmail, // Optional
      },
    },
  });

  // Directory output on build
  eleventyConfig.setQuietMode(true);
  eleventyConfig.addPlugin(directoryOutputPlugin, {
    warningFileSize: 250 * 1000,
  });

  /* Passthrough assets */
  /**********************/
  eleventyConfig.addPassthroughCopy({
    "src/assets/css": "assets/css",
    "src/assets/files": "assets/files",
    "src/assets/fonts": "assets/fonts",
    "src/_redirects": "_redirects",
    "src/404.html": "404.html",
  });

  /* Collections config */
  /**********************/
  // Collections are defined in src/_data/site.js in the "nav" object
  let postCollections = new Set();
  siteConfig.nav.forEach((item) => {
    if (item.collection) {
      postCollections.add(item.url.replace(/\//g, ""));
    }
  });

  postCollections.forEach((collectionName) => {
    eleventyConfig.addCollection(`${collectionName}`, function (collectionApi) {
      return collectionApi.getFilteredByGlob(`src/${collectionName}/*.md`);
    });
  });

  /* Markdown Configuration */
  /**************************/
  let markdownLib = md({
    typographer: true,
  })
    // Footnotes
    .use(mdFN);

  // Footnote HTML customization
  markdownLib.renderer.rules.footnote_block_open = () =>
    '<section class="[ footnotes ] [ flow ]">\n' +
    "<h2>Notes</h2>\n" +
    '<ol role="list">\n';

  // Override footnote indicator render to output a number without square brackets
  markdownLib.renderer.rules.footnote_caption = (tokens, idx) => {
    let n = Number(tokens[idx].meta.id + 1).toString();
    if (tokens[idx].meta.subId > 0) n += `:${tokens[idx].meta.subId}`;
    return `${n}`;
  };

  // Add role="list" attribute for accessibility and correct styling
  markdownLib.renderer.rules.bullet_list_open = (
    tokens,
    idx,
    options,
    env,
    self,
  ) => {
    tokens[idx].attrPush(["role", "list"]);
    return self.renderToken(tokens, idx, options);
  };

  // Add role="list" attribute for accessibility and correct styling
  markdownLib.renderer.rules.ordered_list_open = (
    tokens,
    idx,
    options,
    env,
    self,
  ) => {
    tokens[idx].attrPush(["role", "list"]);
    return self.renderToken(tokens, idx, options);
  };

  // Set the Markdown library to use
  eleventyConfig.setLibrary("md", markdownLib);

  /* Sass support as a template format */
  /*************************************/

  eleventyConfig.addTemplateFormats("scss");

  // Creates the extension for use
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css", // optional, default: "html"

    // Customizing the permalink for the output file
    compileOptions: {
      permalink: function (inputContent, inputPath) {
        let parsed = path.parse(inputPath);

        const outputDir = "/assets/css";
        const outputFilePath = path.join(outputDir, `${parsed.name}.css`);

        // Return the new permalink
        return outputFilePath;
      },
    },

    // `compile` is called once per .scss file in the input directory
    compile: async function (inputContent, inputPath) {
      let parsed = path.parse(inputPath);
      // Adhere to convention of not outputting Sass underscore files
      if (parsed.name.startsWith("_")) {
        return;
      }

      let result = sass.compileString(inputContent, {
        loadPaths: [parsed.dir || "."],
      });

      // This is the render function, `data` is the full data cascade
      return async (data) => {
        return result.css;
      };
    },
  });

  /* Custom filters */
  /******************/

  // Custom filter to determine if current page is within parent link path
  // Called like this: {{ pagePath | getLinkActiveState: parentPath }}
  eleventyConfig.addFilter("getLinkActiveState", helpers.getLinkActiveState);

  // Generate lorem ipsum for use in content
  // Called like this: {{ count | loremIpsum: type }}
  // Where type is one of: words, sentences, paragraphs
  eleventyConfig.addFilter("loremIpsum", helpers.loremIpsum);

  return {
    // Set directories to watch
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    // Define other options like pathPrefix
    templateFormats: ["liquid", "md"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
}
