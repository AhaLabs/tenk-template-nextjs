const withPlugins = require("next-compose-plugins");
// Build-time image optimization; see https://github.com/cyrilwanner/next-optimized-images
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
        inlineImageLimit: 8192,
        imagesFolder: 'images',
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
        removeOriginalExtension: false,
        optimizeImages: true,
        optimizeImagesInDev: false,
        mozjpeg: {
          quality: 80,
        },
        optipng: {
          optimizationLevel: 7,
          interlaced: true,
        },
        pngquant: false,
        gifsicle: {
          interlaced: true,
          optimizationLevel: 3,
        },
        svgo: {
          // enable/disable svgo plugins here
        },
        webp: {
          preset: 'default',
          quality: 75,
        },
      },
    ],

    // your other plugins here
  ],
  // Next.js core config here
  {
    images: {
      loader: "custom",
    },
  }
);
