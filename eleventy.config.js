export default async function (eleventyConfig) {
  // Access to the full `eleventyConfig` Configuration API
  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
  });
}

export const config = {
  // Control which files Eleventy will process
  templateFormats: ["md", "njk", "html", "liquid", "11ty.js"],

  dir: {
    input: "content",
    includes: "../_includes",
    data: "../_data",
    output: "_site",
  },
};
