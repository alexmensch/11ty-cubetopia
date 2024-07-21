const slugify = require("slugify");
const { DateTime } = require("luxon");

module.exports = {
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
};
