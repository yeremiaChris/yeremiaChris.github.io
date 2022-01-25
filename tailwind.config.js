module.exports = {
  purge: {
    enabled: false,
    content: ["./*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      extend: {
        spacing: {
          "50px": "50px",
          "100px": "100px",
          "1080px": "1080px",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
