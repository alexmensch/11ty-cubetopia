import slugify from "slugify";
import { DateTime } from "luxon";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export default {
  currentYear: function () {
    return new Date().getFullYear();
  },
  // Standardize permalink format for full path use
  permalinkToPath: (title, date) => {
    return `${module.exports.toDate(date, "/")}/${module.exports.toSlug(title)}/`;
  },
  // Standardize permalink format for single file name use
  permalinkToFilename: (title, date) => {
    return `${module.exports.toDate(date, "-")}-${module.exports.toSlug(title)}`;
  },
  toSlug: function (string) {
    return slugify(string, {
      lower: true,
      replacement: "-",
      remove: /[*+~.()'"!:@]/g,
    });
  },
  toDate: function (date, delim) {
    const formatString = ["yyyy", "LL", "dd"].join(delim);
    return DateTime.fromJSDate(date).toFormat(formatString);
  },
  getLinkActiveState(itemPath, pagePath) {
    let response = "";

    if (itemPath === pagePath) {
      response = ' aria-current="page"';
    }

    if (itemPath.length > 1 && pagePath.indexOf(itemPath) === 0) {
      response += ' data-state="active"';
    }

    return response;
  },
  loremIpsum(count, type) {
    switch (type) {
      case "words":
      case "word":
        return lorem.generateWords(count);
      case "sentences":
      case "sentence":
        return lorem.generateSentences(count);
      case "paragraphs":
      case "paragraph":
        return lorem.generateParagraphs(count);
      default:
        return "Invalid input. Parameters were: ${count} and ${type}";
    }
  },
};
