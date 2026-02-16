import { execSync } from 'child_process';

export default function(eleventyConfig) {
  // Copy public folder to output
  eleventyConfig.addPassthroughCopy("src/public");

  // Rebuild CSS before build
  eleventyConfig.on('eleventy.before', async () => {
    execSync('tailwindcss -i src/styles.css -o src/public/css/styles.css', { stdio: 'inherit' });
  });

  // Watch CSS source for changes
  eleventyConfig.addWatchTarget("src/styles.css");
  eleventyConfig.addWatchTarget("src/**/*.njk");

  // Add date filter for formatting
  eleventyConfig.addFilter("formatDate", function(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
}
