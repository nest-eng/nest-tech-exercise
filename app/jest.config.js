/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  //
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],

  moduleNameMapper: {
    '\\.css$': '<rootDir>/test/jest/__mocks__/styleMock.ts',
    '\\.svg': '<rootDir>/__mocks__/svg.js',
  },
  modulePaths: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/test/setupTests.ts'],
  testEnvironment: 'jest-environment-jsdom',
  // testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
