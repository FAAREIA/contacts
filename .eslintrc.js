module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		'airbnb',
		'airbnb/hooks',
		'plugin:react/recommended',
		'prettier/react',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'indent': [2, 'tab', { 'SwitchCase': 1 }],
		'no-tabs': 0,
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
		'react/jsx-indent': [
			2,
			'tab',
			{ checkAttributes: true, indentLogicalExpressions: true },
		],
	},
};
