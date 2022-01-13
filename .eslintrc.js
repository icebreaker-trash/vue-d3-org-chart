function getJestGlobals (flag = true) {
  return {
    afterAll: flag,
    afterEach: flag,
    beforeAll: flag,
    beforeEach: flag,
    describe: flag,
    expect: flag,
    fit: flag,
    it: flag,
    jest: flag,
    test: flag,
    xdescribe: flag,
    xit: flag,
    xtest: flag
  }
}

module.exports = {
  root: false,
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    eqeqeq: 1,
    'no-return-assign': 1,
    'no-unused-vars': 1,
    'no-mixed-operators': 1,
    'no-undef': 1
  },
  globals: {
    ...getJestGlobals()
  }
}
