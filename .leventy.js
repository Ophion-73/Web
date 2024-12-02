module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: "src",  // Carpeta donde estarán tus archivos Markdown
            output: "dist" // Carpeta donde Eleventy generará tu sitio
        }
    };
};