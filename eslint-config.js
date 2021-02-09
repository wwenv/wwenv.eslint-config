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

    'array-bracket-spacing': ['warn', 'always'],

    'array-callback-return': 'warn',

    'arrow-parens': ['warn', 'always'],

    'arrow-spacing': 'warn',

    'brace-style': 'off',
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],

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
        tuples: 'always-multiline',
      },
    ],

    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'error',

    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
      },
    ],

    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',

    'dot-location': ['warn', 'property'],

    'eol-last': 'warn',

    'eqeqeq': 'warn',

    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],

    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        overrides: {
          constructors: 'off',
        },
      },
    ],

    '@typescript-eslint/func-call-spacing': 'error',

    'indent': 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        MemberExpression: 'off',
      },
    ],

    'jsx-quotes': ['error', 'prefer-single'],

    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': 'error',

    'linebreak-style': ['warn', 'unix'],

    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': 'warn',

    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ],

    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: [
          // Index signature
          //'signature',

          // Fields
          'public-abstract-field',
          'protected-abstract-field',
          'private-abstract-field',

          'public-static-field',
          'protected-static-field',
          'private-static-field',

          //'public-decorated-field',
          //'protected-decorated-field',
          //'private-decorated-field',

          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',

          'public-field',
          'protected-field',
          'private-field',

          'static-field',
          'instance-field',
          'abstract-field',

          //'decorated-field',

          'field',

          // Constructors
          'public-constructor',
          'protected-constructor',
          'private-constructor',

          'constructor',

          // Methods
          'public-abstract-method',
          'public-static-method',
          //'public-decorated-method',
          'public-instance-method',
          'public-method',

          'protected-abstract-method',
          'protected-static-method',
          //'protected-decorated-method',
          'protected-instance-method',
          'protected-method',

          'private-abstract-method',
          'private-static-method',
          //'private-decorated-method',
          'private-instance-method',
          'private-method',

          'abstract-method',
          'static-method',
          //'decorated-method',
          'instance-method',

          'method',
        ],
      },
    ],

    '@typescript-eslint/method-signature-style': 'warn',

    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['enum', 'interface', 'class'],
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['camelCase', 'UPPER_CASE'],
      },
    ],

    'no-caller': 'error',

    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    'no-console': 'error',

    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': [
      'error',
      {
        includeExports: true,
      },
    ],

    'no-eval': 'error',

    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',

    '@typescript-eslint/no-inferrable-types': 'off',

    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',

    'no-label-var': 'warn',

    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',

    'no-mixed-operators': 'warn',

    '@typescript-eslint/no-namespace': 'error',

    '@typescript-eslint/no-parameter-properties': 'error',

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    '@typescript-eslint/no-require-imports': 'error',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    '@typescript-eslint/no-throw-literal': 'error',

    'no-trailing-spaces': 'warn',

    'no-undef-init': 'warn',

    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',

    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',

    '@typescript-eslint/no-unsafe-assignment': 'warn',

    '@typescript-eslint/no-unsafe-call': 'warn',

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'warn',

    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],

    '@typescript-eslint/no-use-before-define': 'error',

    'no-var': 'error',

    '@typescript-eslint/non-nullable-type-assertion-style': 'warn',

    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['warn', 'always'],

    '@typescript-eslint/prefer-includes': 'warn',

    'prefer-const': 'error',

    '@typescript-eslint/prefer-nullish-coalescing': 'warn',

    '@typescript-eslint/prefer-optional-chain': 'warn',

    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',

    '@typescript-eslint/prefer-ts-expect-error': 'warn',

    '@typescript-eslint/promise-function-async': [
      'error',
      {
        checkArrowFunctions: false,
      },
    ],

    'quote-props': ['warn', 'as-needed'],

    'quotes': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    'radix': 'warn',

    '@typescript-eslint/restrict-plus-operands': [
      'error',
      {
        checkCompoundAssignments: true,
      },
    ],

    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'warn',

    'semi': 'off',
    '@typescript-eslint/semi': [
      'warn',
      'always',
      {
        omitLastInOneLineBlock: false,
      },
    ],

    'semi-style': 'warn',

    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],

    'space-before-blocks': 'warn',

    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'warn',

    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': [
      'error',
      {
        int32Hint: false,
      },
    ],

    'spaced-comment': [
      'warn',
      'always',
      {
        exceptions: ['-', '+', '*'],
        line: {
          markers: ['/'],
        },
        block: {
          balanced: true,
        },
      },
    ],

    '@typescript-eslint/switch-exhaustiveness-check': 'warn',

    '@typescript-eslint/type-annotation-spacing': 'warn',

    '@typescript-eslint/unified-signatures': 'warn',

    'yoda': 'warn',

    // restrict some modules from being used
    'no-restricted-imports': [
      'error',
      {
        paths: ['moment'],
        patterns: [],
      },
    ],
  },

  overrides: [
    // special rules for backend parts
    {
      files: [
        'src/backend/**/*.ts',
      ],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: [],
            patterns: [
              '**/../frontend/*',
            ],
          },
        ],
      },
    },

    // special rules for frontend parts
    {
      files: [
        'src/frontend/**/*.ts',
        'src/frontend/**/*.tsx',
      ],
      rules: {
        'no-alert': 'error',

        'no-restricted-imports': [
          'error',
          {
            paths: [],
            patterns: [
              '**/../backend/*',
            ],
          },
        ],
      },
    },

    // special rules for common parts
    {
      files: [
        'src/common/**/*.ts',
      ],
      rules: {
        'no-alert': 'error',

        'no-restricted-imports': [
          'error',
          {
            paths: ['debug'],
            patterns: [
              '../backend/*',
              '../frontend/*',
            ],
          },
        ],
      },
    },
  ],

};
