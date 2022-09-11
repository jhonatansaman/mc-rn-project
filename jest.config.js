module.exports = {
  preset: "react-native",
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/src/config/jest.ts"],
  moduleDirectories: ["node_modules"],
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  clearMocks: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!**/node_modules/**"],
};
