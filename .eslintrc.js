module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    // parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs,jsx}'],
            parserOptions: {
                sourceType: 'module',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'no-unused-vars': 'off',
        'react/prop-types': 'off',
        'no-undef': 'off',
        eqeqeq: [2, 'always', { null: 'ignore' }],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
