module.exports = {
	parser: '@typescript-eslint/parser',
	// idk why that file bugs out but ok
	ignorePatterns: ['node_modules', 'dist', 'src/components/HeaderLink.astro'],
	parserOptions: {
		// ...
		extraFileExtensions: ['.astro'], // This is a required setting in `@typescript-eslint/parser` v5.
	},
	// ...
	extends: [
		// ...
		'berry',
		'plugin:astro/recommended',
	],
	// ...
	overrides: [
		{
			// Define the configuration for `.astro` file.
			files: ['*.astro'],
			// Allows Astro components to be parsed.
			parser: 'astro-eslint-parser',
			// Parse the script in `.astro` as TypeScript by adding the following configuration.
			// It's the setting you need when using TypeScript.
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
			rules: {
				// override/add rules settings here, such as:
				// "astro/no-set-html-directive": "error"
			},
		},
		// ...
	],
};
