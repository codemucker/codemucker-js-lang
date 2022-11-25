import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  collectCoverage: false,
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        // ts-jest configuration goes here
      },
    ],
  },
  roots: ['test', 'src'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/test/$1',
  },
}

export default config
