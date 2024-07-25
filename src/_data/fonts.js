import EleventyFetch from "@11ty/eleventy-fetch";
import { getFontInfo } from "../../google-fonts.mjs";

const buildFontPath = "/assets/fonts";
const buildCSS = "/assets/css/fonts.css";

const [fontMaps, localCSS] = await getFontInfo(
  "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap",
  {
    base64: false,
    fontsPath: buildFontPath,
  },
);

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
      fonts.push({ fontBuffer, fileName });
    }
    return fonts;
  },
  buildFontPath: buildFontPath,
  buildCSS: buildCSS,
};
