module.exports = {
	env: {
		node: true
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', '@typescript-eslint/tslint', 'import', 'no-null', 'prefer-arrow'],
	rules: {
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/ban-types': 'error',
		'@typescript-eslint/class-name-casing': 'error',
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/consistent-type-definitions': 'error',
		'@typescript-eslint/explicit-function-return-type': ['off'],
		'@typescript-eslint/no-non-null-assertion': ['off'],
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				accessibility: 'explicit'
			}
		],
		'@typescript-eslint/interface-name-prefix': ['error', 'always'],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false
				}
			}
		],
		'@typescript-eslint/member-ordering': [
			'error',
			{
				default: [
					// Index signature
					// No scope for index signature. See above.

					// Fields
					'static-field', // = ["public-static-field", "protected-static-field", "private-static-field"])
					'static-method', // = ["public-static-method", "protected-static-method", "private-static-method"])

					'instance-field', // = ["public-instance-field", "protected-instance-field", "private-instance-field"])

					// Constructors
					'constructor', // = ["public-constructor", "protected-constructor", "private-constructor"])
					'instance-method', // = ["public-instance-method", "protected-instance-method", "private-instance-method"])
					'abstract-field', // = ["public-abstract-field", "protected-abstract-field", "private-abstract-field"])

					// Methods
					'abstract-method' // = ["public-abstract-method", "protected-abstract-method", "private-abstract-method"])
				]
			}
		],
		'@typescript-eslint/no-empty-function': 'error',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-floating-promises': 'off', // TODO: enable this rule when Objection doesn't flag false positive
		'@typescript-eslint/no-misused-promises': 'off', // TODO: enable this rule when Objection doesn't flag false positive
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-parameter-properties': 'off',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				avoidEscape: true
			}
		],
		'@typescript-eslint/semi': ['error', 'always'],
		'@typescript-eslint/triple-slash-reference': 'error',
		'@typescript-eslint/type-annotation-spacing': 'error',
		'@typescript-eslint/typedef': [
			'error',
			{
				arrowParameter: false,
				memberVariableDeclaration: false
			}
		],
		'@typescript-eslint/unified-signatures': 'error',
		'arrow-body-style': 'error',
		'arrow-parens': 'off',
		camelcase: 'error',
		'comma-dangle': 'off',
		complexity: 'off',
		'constructor-super': 'error',
		curly: 'error',
		'dot-notation': 'error',
		'eol-last': 'error',
		eqeqeq: ['error', 'smart'],
		'guard-for-in': 'error',
		'id-blacklist': ['error', 'any', 'Number', 'number', 'String', 'string', 'Boolean', 'boolean', 'Undefined'],
		'id-match': 'error',
		'import/order': 'error',
		'max-classes-per-file': ['error', 1],
		'max-len': 'off',
		'new-parens': 'error',
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-cond-assign': 'error',
		'no-console': 'error',
		'no-debugger': 'error',
		'no-empty': 'error',
		'no-eval': 'error',
		'no-fallthrough': 'off',
		'no-invalid-this': 'off',
		'no-multiple-empty-lines': 'error',
		'no-new-wrappers': 'error',
		'no-null/no-null': 'error',
		'no-return-await': 'error',
		'no-shadow': [
			'error',
			{
				hoist: 'all'
			}
		],
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef-init': 'error',
		'no-underscore-dangle': 'off',
		'no-unsafe-finally': 'error',
		'no-unused-expressions': 'error',
		'no-unused-labels': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'one-var': ['error', 'never'],
		'prefer-arrow/prefer-arrow-functions': 'error',
		'prefer-const': 'error',
		'quote-props': ['error', 'as-needed'],
		radix: 'error',
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				asyncArrow: 'always',
				named: 'never'
			}
		],
		'spaced-comment': 'error',
		'use-isnan': 'error',
		'valid-typeof': 'off',
		'@typescript-eslint/tslint/config': [
			'error',
			{
				rules: {
					'jsdoc-format': true,
					'match-default-export-name': true
				}
			}
		]
	}
};