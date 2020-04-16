## Tools
We use linters as well as Prettier to enforce a number of coding guidelines. Refer to our [.eslintrc.js](docs/eslint.md) example and our [Prettier config](docs/prettier.md) for specific details.

#### Common guidelines that are not in lint/Prettier
- Use promises instead of callbacks.
- Use [es6 features](https://github.com/airbnb/javascript#ecmascript-6-es-2015-styles) (arrow functions, classes, default parameters, spreads, etc)
- _camelCase for private variables and methods (TypeScript only).

#### Common guidelines inferred from our linting/Prettier config
- Visit the [Prettier playgroud](https://prettier.io/playground/#N4Igxg9gdgLgprEAuEBLWcBOAzAhmOAAgFkBPASQx3yOAB0pDDsIIAKASiUIGcZN0AcwA0DJgCNcmbgEFMmXKQA8UAK4BbcVgB8oqAF8GDOAA8ADhEwxCucXwVhrYADa4ePQgDFWhVOrPOcOoIMB5klPDUBIT0jMysnDFiTCmpTAD06YQAKgDyACK53JhwMKqYjLiVjqq4zoQAbnWqRAAWWHDJTKjYbPwtHF0psWkpJWUVhADk7c7OEFNDTIZxTHDOPJ2rw0tjpeWMUwDuls4AJlMA3Lsro7eEgqWEkpiJI3sTjADaTACMersAEzCQgAZj0qQAuskVisGDBSGYiAAlOAARxafGyiKIAF5pgBxACi2SmhAAPtMABJEmT5MmUqYABVyAGVSRTpkyAKocxm5JnZci5AByrIZ0wAwqKRUTJXzpvkiQAZElEiVTbLImSS9UgYQgCBmGCoaA8ZCgKSYCBHJlSBDmlC4BoQVBnfUgcQOADWpVZZnwQmQeA2cANrRg6mcAHVWqh4DwAwRWQ746gGvHSMhwO4PehNlYmQpBOpcMG6psDQArHgmABCPr9uGCyvQcHLoertdZQkCAEVVBB4B3KyAA5gC9mEUieGABMaPWYBLBo26YK1kL9AQAGA1LiCbaMKMzZpdwAsNdsGjFDuBFo2OkBuAC0UDgcDOH49JQxqBKRdwEsyyQENR02dRUGQfowxAHhezgAdbygzAWgNGBbFXM512QYEQH4XBUGcIRJQgdRS2zKBoCvEBVE2bJbEdaD9H0IA) for an example of how your code will be automatically formatted.
- camelCase variable names and methods.
- PascalCase classes.
- Tabs
- Ordered imports.
- No `var` usage. Use `const` and `let`.
- No `null` usage. Use `undefined`.
- Use [JSDoc](https://jsdoc.app/) style comments.

## Javascript / Typescript
Reference https://github.com/airbnb/javascript as a guideline. Keep in mind most of this document is covered by our combination of TypeScript, lint, and Prettier.

## Angular
[Angular-specific guidelines](https://angular.io/guide/styleguide).

## CSS
- We use [SCSS](https://sass-lang.com/).
- In general we use the [BEM](http://getbem.com/) standard.
- With front-end frameworks, such as Angular, we also utilize [component styles](https://angular.io/guide/component-styles).

## Drupal
- We recommend following [Drupal's specific guidelines](https://www.drupal.org/docs/develop/standards).
- We are looking to adapt lint and prettier to our php projects so the majority of these rules can be applied automatically.
