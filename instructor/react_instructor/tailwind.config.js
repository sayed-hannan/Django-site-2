module.exports = {
  content: [
    // Specify the paths to your React components that use Tailwind CSS classes
    './src/**/*.js',
    './public/index.html', // Include your HTML file for PurgeCSS
  ],
  theme: {
    extend: {}, // You can extend the default theme here
  },
  plugins: [], // Add any Tailwind CSS plugins here
}
