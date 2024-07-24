import EleventyFetch from "@11ty/eleventy-fetch";
import { getFontInfo } from "../../google-fonts.mjs";

const buildFontPath = "/assets/fonts";
const buildCSS = "/assets/css/fonts.css";

/* outputDir: local base directory
   stylePath: name of CSS file in ${outputDir}
   fontsDir:  local directory for fonts: ${outputDir}/${fontsDir}
   fontsPath: used to populate url() in CSS file
 */
const { localCSS, fontMaps } = await getFontInfo(
    "https://fonts.googleapis.com/css2?family=Roboto",
    {
        base64: false,
        fontsPath: buildFontPath,
    });

export default {
  css: async function () {
    return localCSS;
  },
  files: async function () {
    const fonts = [];

    for (const [url, fileName] of fontMaps) {
      const fontBuffer = await EleventyFetch(url, {
        duration: "1w",
        type: "buffer",
      });
      fonts.push({fontBuffer, fileName});
    }
    return fonts;
  },
  buildFontPath: buildFontPath,
  buildCSS: buildCSS,
};
