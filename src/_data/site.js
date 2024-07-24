import fonts from "./fonts.js";

export default {
  domain: "your-domain.com",
  authorName: "Alex Marshall",
  authorEmail: "",
  siteName: "Cubetopia",
  includes: [
    {
      rel: "stylesheet",
      href: fonts.buildCSS,
    },
    {
      rel: "stylesheet",
      href: "/assets/css/syntax.css",
    },
    {
      rel: "stylesheet",
      href: "/assets/css/global.css",
    },
  ],
  rss: {
    collection: "posts",
    title: "My Posts",
    subtitle: "A feed of all of my posts",
  },
  nav: [
    { title: "Posts", url: "/posts/", collection: true },
    { title: "About", url: "/about/" },
    { title: "Hidden Section", url: "/hidden-section/", hidden: true },
    { title: "Contact", url: "/contact/" },
  ],
};
