module.exports = {
  testMatch: ["**/tests/**/*.spec.ts"],
  transform: {
    "\\.ts$": "@swc/jest",
  },
};
