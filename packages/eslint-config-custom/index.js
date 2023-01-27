module.exports = {
  extends: ['next', 'turbo', 'prettier', 'airbnb', 'airbnb-typescript'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  plugins: ['import', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['tsconfig.json'],
  },
  // settings: {
  //   next: {
  //     rootDir: ['apps/test-api', 'apps/ui-kit-workshop', 'packages/ui', 'packages/tsconfig'],
  //   },
  //   'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
  //   'import/resolver': {
  //     node: {
  //       extensions: ['.js', '.jsx', '.ts', '.tsx'],
  //       project: ['tsconfig.json', 'package/tsconfig.json'],
  //     },
  //     typescript: {
  //       alwaysTryTypes: true,
  //       project: ['tsconfig.json', 'package/tsconfig.json'],
  //
  //     },
  //   },
  //   parserOptions: {
  //     sourceType: 'module',
  //     tsconfigRootDir: __dirname,
  //     project: ['./tsconfig.json'], // could be tsconfig.json too
  //   },
  // },
};
