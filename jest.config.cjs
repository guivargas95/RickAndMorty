module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'tsx'],
  testMatch: ['**/*.test.tsx'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};