/**
 * Recommended ESLint rules to be used in all Web Working Environment (WWEnv) parts.
 */
/***/

module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: [
      './tsconfig.json'
    ],
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
  ],

  plugins: [],

  ignorePatterns: [
    '/dist/*',
    '/*.js', // ignore js files in the root directory because they are not part of the typescript rootDir
  ],

  rules: {
    'indent': 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'MemberExpression': 'off'
      }
    ],
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],
    '@typescript-eslint/type-annotation-spacing': 'warn',
    'keyword-spacing': 'warn',
    'space-before-blocks': 'warn',
    'array-bracket-spacing': [
      'warn',
      'always'
    ],
    'object-curly-spacing': [
      'warn',
      'always'
    ],
    'arrow-spacing': 'warn',
    'space-before-function-paren': 'warn',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        typedefs: false,
        classes: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off', // This is necessary for Map.has()/get()!
    'no-var': 'error',
    'prefer-const': 'error',
    'no-trailing-spaces': 'warn',

    // require a comma at the end ob multiline arrays, objects, imports, ...
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        enums: 'always-multiline',
        generics: 'always-multiline',
        tuples: 'always-multiline'
      },
    ],
  }
};
