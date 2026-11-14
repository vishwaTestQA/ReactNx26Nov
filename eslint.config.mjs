import nx from '@nx/eslint-plugin';

export default [
  // ...keep existing config blocks
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            // 1. Web-shell can import features, shared libs, and API contracts
            {
              sourceTag: 'scope:shell',
              onlyDependOnLibsWithTags: [
                'scope:auth',
                'scope:catalog',
                'scope:checkout',
                'scope:shared',
                'scope:api',
              ],
            },
            // 2. Domain modules can ONLY import from themselves, shared, and api (NO cross-module imports!)
            {
              sourceTag: 'scope:auth',
              onlyDependOnLibsWithTags: [
                'scope:auth',
                'scope:shared',
                'scope:api',
              ],
            },
            {
              sourceTag: 'scope:catalog',
              onlyDependOnLibsWithTags: [
                'scope:catalog',
                'scope:shared',
                'scope:api',
              ],
            },
            {
              sourceTag: 'scope:checkout',
              onlyDependOnLibsWithTags: [
                'scope:checkout',
                'scope:shared',
                'scope:api',
              ],
            },
            // 3. Shared libraries can ONLY depend on other shared libraries or API types
            {
              sourceTag: 'scope:shared',
              onlyDependOnLibsWithTags: ['scope:shared', 'scope:api'],
            },
            // 4. API contracts must remain pure and cannot depend on UI or modules
            {
              sourceTag: 'scope:api',
              onlyDependOnLibsWithTags: ['scope:api'],
            },
            // 5. Layer hierarchy: UI cannot import heavy feature containers
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: ['type:ui', 'type:util'],
            },
          ],
        },
      ],
    },
  },
  {
    ignores: ['**/vitest.config.*.timestamp*', '**/vite.config.*.timestamp*'],
  },
];
