/**
 * @type {import('stylelint').Config}
 */
export default {
  defaultSeverity: 'warning',
  extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order'],
  overrides: [
    {
      extends: ['stylelint-config-css-modules'],
      files: ['**/*.module.scss'],
      rules: {
        'selector-class-pattern': [
          '^[a-z]+([A-Z0-9][a-zA-Z0-9]+)*$',
          {
            message: (selector) => `Expected class selector "${selector}" to be lowerCamelCase`,
          },
        ],
      },
    },
  ],
};
