module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['@vue/airbnb', 'plugin:vue/essential'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': 'off',
    'vue/max-attributes-per-line': ['error', {
			'singleline': 3,
			'multiline': {
				'max': 1,
				'allowFirstLine': false
			}
		}],

    'vue/singleline-html-element-content-newline': 'off',
  },
};
