module.exports = {
    $schema: 'https://json.schemastore.org/prettierrc',
    plugins: [require.resolve('prettier-plugin-organize-attributes')],
    arrowParens: 'avoid',
    bracketSpacing: true,
    endOfLine: 'lf',
    htmlWhitespaceSensitivity: 'ignore',
    printWidth: 120,
    proseWrap: 'always',
    semi: true,
    singleAttributePerLine: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    useTabs: false,
    overrides: [
        {
            files: ['*.json', '.prettierrc', '.stylelintrc'],
            options: { parser: 'json' },
        },
        {
            files: ['*.scss'],
            options: { parser: 'scss' },
        },
        {
            files: ['*.yml', '*.yaml'],
            options: { parser: 'yaml', tabWidth: 2 },
        },
        {
            files: ['*.md'],
            options: { parser: 'markdown', tabWidth: 2 },
        },
        {
            files: ['*.js', '*.ts'],
            options: { parser: 'typescript', printWidth: 90 },
        },
        {
            files: ['*.html'],
            options: {
                parser: 'angular',
                printWidth: 120,
                attributeGroups: [
                    '$ANGULAR_STRUCTURAL_DIRECTIVE',
                    '$ANGULAR_ELEMENT_REF',
                    '$ID',
                    '$DEFAULT',
                    '$CLASS',
                    '$ANGULAR_ANIMATION',
                    '$ANGULAR_ANIMATION_INPUT',
                    '$ANGULAR_INPUT',
                    '$ANGULAR_TWO_WAY_BINDING',
                    '$ANGULAR_OUTPUT',
                ],
                attributeSort: 'ASC',
            },
        },
        {
            files: ['*.ts'],
            options: {
                attributeGroups: [
                    '$ANGULAR_STRUCTURAL_DIRECTIVE',
                    '$ANGULAR_ELEMENT_REF',
                    '$ID',
                    '$DEFAULT',
                    '$CLASS',
                    '$ANGULAR_ANIMATION',
                    '$ANGULAR_ANIMATION_INPUT',
                    '$ANGULAR_INPUT',
                    '$ANGULAR_TWO_WAY_BINDING',
                    '$ANGULAR_OUTPUT',
                ],
                attributeSort: 'ASC',
            },
        },
    ],
};
