module.exports = {
  name: 'features-advert-form',
  preset: '../../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      { cwd: __dirname, configFile: './babel-jest.config.json' },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../../coverage/libs/features/advert-form',
};
