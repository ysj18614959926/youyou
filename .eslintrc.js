module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"parser": "vue-eslint-parser",
	"extends": [
		"eslint:recommended",
		"plugin:vue/essential",
		"plugin:@typescript-eslint/recommended"
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"parser": "@typescript-eslint/parser",
		"sourceType": "module"
	},
	"plugins": [
		"vue",
		"@typescript-eslint"
	],
	"rules": {
		"no-console": "warn",
		"vue/no-reserved-component-names": ["error", {
			"disallowVueBuiltInComponents": false,
			"disallowVue3BuiltInComponents": false
		}],
		"vue/no-multiple-template-root": 'off',
		"semi": "warn",
		"no-trailing-spaces": "error",
		"no-undef": "off",
		"no-redeclare": "off",
		"vue/no-unused-components": "off"
	}
};
