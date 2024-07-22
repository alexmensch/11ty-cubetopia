export default {
  domain: "your-domain.com",
  authorName: "Your Name",
  authorEmail: "",
  siteName: "Your Site",
  includes: [
    {
      rel: "stylesheet",
      href: "/assets/css/global.css",
    },
    {
      rel: "stylesheet",
      href: "/assets/css/fonts.css",
    },
    {
      rel: "stylesheet",
      href: "/assets/css/prism.css",
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
