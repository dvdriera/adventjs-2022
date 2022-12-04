/** @type {import('jest').Config} */
const config = {
  verbose: true,
  bail: 1,
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
};

module.exports = config;
